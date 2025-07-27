import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Quiz } from "@/components/quiz";
import { ModuleContent } from "@/components/module-content";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { loadTrailContent } from "@/lib/trail-loader";
import { useProgress } from "@/hooks/use-progress";
import { useState } from "react";

export default function Trail() {
  const { trailId } = useParams();
  const [, setLocation] = useLocation();
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const { data: trail, isLoading } = useQuery({
    queryKey: ["trail", trailId],
    queryFn: () => loadTrailContent(trailId!),
    enabled: !!trailId,
  });

  const { progress, updateProgress } = useProgress(trailId!);

  const handleBackToHome = () => {
    setLocation("/");
  };

  const handleStartModule = (moduleId: number) => {
    setActiveModule(moduleId);
    setShowQuiz(false);
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleQuizComplete = (score: number) => {
    if (activeModule) {
      updateProgress(activeModule, true);
      setShowQuiz(false);
      setActiveModule(null);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-custom-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-primary mx-auto mb-4"></div>
          <p className="text-custom-text">Carregando trilha...</p>
        </div>
      </div>
    );
  }

  if (!trail) {
    return (
      <div className="min-h-screen bg-custom-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-custom-title mb-4">Trilha não encontrada</h1>
          <Button onClick={handleBackToHome}>Voltar ao início</Button>
        </div>
      </div>
    );
  }

  const currentModule = activeModule ? trail.modules.find(m => m.id === activeModule) : null;
  const completedModules = trail.modules.filter(m => progress.completedModules.includes(m.id)).length;
  const progressPercentage = (completedModules / trail.modules.length) * 100;

  return (
    <div className="bg-custom-bg font-sans text-custom-text min-h-screen">
      <Header />
      {/* Trail Header */}
      <section className="bg-gradient-to-r from-custom-highlight to-custom-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm">
              <button 
                onClick={handleBackToHome}
                className="hover:text-gray-200 transition-colors"
              >
                Início
              </button>
              <i className="fas fa-chevron-right text-xs"></i>
              <span>Trilhas</span>
              <i className="fas fa-chevron-right text-xs"></i>
              <span>{trail.title}</span>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-custom-title">{trail.title}</h1>
              <p className="text-lg mb-6 text-custom-text">{trail.description}</p>
              
              <div className="flex items-center space-x-6 mb-8 text-custom-title">
                <div className="flex items-center">
                  <i className="fas fa-clock mr-2"></i>
                  <span>{trail.duration}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-layer-group mr-2"></i>
                  <span>{trail.modules.length} módulos</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-star mr-2"></i>
                  <span>{trail.difficulty}</span>
                </div>
              </div>

              {/* Progress Overview */}
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="flex justify-between text-sm mb-2 text-custom-title">
                  <span>Seu Progresso</span>
                  <span>{Math.round(progressPercentage)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src={trail.image} 
                alt={`Fox character representing ${trail.title}`} 
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Module Content or Quiz */}
      {showQuiz && currentModule ? (
        <Quiz 
          module={currentModule} 
          onComplete={handleQuizComplete}
          onBack={() => setShowQuiz(false)}
        />
      ) : activeModule && currentModule ? (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-custom-title mb-6">{currentModule.title}</h2>
                <div className="mb-8">
                  <ModuleContent module={currentModule} />
                </div>
                <div className="flex justify-between">
                  <Button 
                    variant="outline"
                    onClick={() => setActiveModule(null)}
                  >
                    Voltar aos Módulos
                  </Button>
                  <Button 
                    onClick={handleStartQuiz}
                    className="bg-custom-primary hover:bg-custom-hover"
                  >
                    Fazer Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ) : (
        /* Trail Modules */
        (<section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-custom-title mb-8 text-center">Módulos da Trilha</h2>
            
            <div className="space-y-6">
              {trail.modules.map((module, index) => {
                const isCompleted = progress.completedModules.includes(module.id);
                const isLocked = index > 0 && !progress.completedModules.includes(trail.modules[index - 1].id);
                
                return (
                  <Card 
                    key={module.id}
                    className={`${isCompleted ? 'border-custom-success' : isLocked ? 'opacity-60' : 'border-custom-border'} ${!isLocked ? 'hover:shadow-md cursor-pointer' : ''} transition-shadow`}
                    onClick={() => !isLocked && handleStartModule(module.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${isLocked ? 'bg-gray-400' : isCompleted ? 'bg-custom-success' : 'bg-custom-primary'} text-white rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
                          {isLocked ? <i className="fas fa-lock"></i> : index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className={`text-lg font-semibold ${isLocked ? 'text-gray-600' : 'text-custom-title'}`}>
                              {module.title}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              isCompleted 
                                ? 'bg-custom-success text-custom-title' 
                                : isLocked 
                                  ? 'bg-gray-200 text-gray-600'
                                  : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {isCompleted ? (
                                <><i className="fas fa-check mr-1"></i>Completo</>
                              ) : isLocked ? (
                                <><i className="fas fa-lock mr-1"></i>Bloqueado</>
                              ) : (
                                <><i className="fas fa-play mr-1"></i>Disponível</>
                              )}
                            </span>
                          </div>
                          <p className={`mb-4 ${isLocked ? 'text-gray-500' : 'text-custom-text'}`}>
                            {module.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className={`flex items-center space-x-4 text-sm ${isLocked ? 'text-gray-500' : 'text-custom-text'}`}>
                              <span><i className="fas fa-book mr-1"></i>Leitura: {module.readingTime}</span>
                              <span><i className="fas fa-question-circle mr-1"></i>Quiz: {module.quizTime}</span>
                            </div>
                            <Button 
                              className={`${
                                isLocked 
                                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                  : isCompleted
                                    ? 'bg-custom-secondary hover:bg-custom-hover'
                                    : 'bg-custom-primary hover:bg-custom-hover'
                              } text-white`}
                              disabled={isLocked}
                            >
                              {isLocked ? 'Complete o módulo anterior' : isCompleted ? 'Revisar' : 'Começar'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>)
      )}
      <Footer />
    </div>
  );
}
