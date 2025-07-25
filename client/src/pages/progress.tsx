import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { loadTrails } from "@/lib/trail-loader";
import { useProgress } from "@/hooks/use-progress";
import { useLocation } from "wouter";

function TrailProgressCard({ trail, onClick }: { trail: any; onClick: (id: string) => void }) {
  const { progress } = useProgress(trail.id);
  const progressPercentage = (progress.completedModules.length / trail.moduleCount) * 100;
  const completedModules = progress.completedModules.length;

  return (
    <Card 
      className="bg-custom-card border border-custom-border rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
      onClick={() => onClick(trail.id)}
    >
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img 
            src={trail.image} 
            alt={`Fox representing ${trail.title}`} 
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-custom-title group-hover:text-custom-primary transition-colors">
              {trail.title}
            </h3>
            <p className="text-sm text-custom-text">{trail.difficulty}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-custom-text mb-2">
            <span>Progresso</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-custom-bg rounded-lg p-3">
            <div className="text-2xl font-bold text-custom-primary">{completedModules}</div>
            <div className="text-xs text-custom-text">Completos</div>
          </div>
          <div className="bg-custom-bg rounded-lg p-3">
            <div className="text-2xl font-bold text-custom-secondary">{trail.moduleCount}</div>
            <div className="text-xs text-custom-text">Total</div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            progressPercentage === 100 
              ? 'bg-custom-success text-custom-title' 
              : progressPercentage > 0
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-600'
          }`}>
            {progressPercentage === 100 ? (
              <><i className="fas fa-trophy mr-1"></i>Concluída</>
            ) : progressPercentage > 0 ? (
              <><i className="fas fa-play mr-1"></i>Em Progresso</>
            ) : (
              <><i className="fas fa-lock mr-1"></i>Não Iniciada</>
            )}
          </span>
          <i className="fas fa-arrow-right text-custom-primary group-hover:translate-x-1 transition-transform"></i>
        </div>
      </CardContent>
    </Card>
  );
}

function OverallStats({ trails }: { trails: any[] }) {
  const allProgress = trails.map(trail => {
    const { progress } = useProgress(trail.id);
    return { trail, progress };
  });

  const totalModules = trails.reduce((sum, trail) => sum + trail.moduleCount, 0);
  const completedTotal = allProgress.reduce((sum, { progress }) => sum + progress.completedModules.length, 0);
  const completedTrails = allProgress.filter(({ trail, progress }) => 
    progress.completedModules.length === trail.moduleCount
  ).length;
  const overallProgress = totalModules > 0 ? (completedTotal / totalModules) * 100 : 0;

  return (
    <>
      <Card className="text-center">
        <CardContent className="p-6">
          <div className="w-12 h-12 bg-custom-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-percentage text-white"></i>
          </div>
          <div className="text-3xl font-bold text-custom-title mb-2">
            {Math.round(overallProgress)}%
          </div>
          <div className="text-sm text-custom-text">Progresso Geral</div>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardContent className="p-6">
          <div className="w-12 h-12 bg-custom-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-book text-white"></i>
          </div>
          <div className="text-3xl font-bold text-custom-title mb-2">
            {completedTotal}
          </div>
          <div className="text-sm text-custom-text">Módulos Completos</div>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardContent className="p-6">
          <div className="w-12 h-12 bg-custom-highlight rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-trophy text-white"></i>
          </div>
          <div className="text-3xl font-bold text-custom-title mb-2">
            {completedTrails}
          </div>
          <div className="text-sm text-custom-text">Trilhas Concluídas</div>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardContent className="p-6">
          <div className="w-12 h-12 bg-custom-success rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-target text-custom-title"></i>
          </div>
          <div className="text-3xl font-bold text-custom-title mb-2">
            {trails.length}
          </div>
          <div className="text-sm text-custom-text">Trilhas Disponíveis</div>
        </CardContent>
      </Card>
    </>
  );
}

export default function ProgressPage() {
  const [, setLocation] = useLocation();
  const { data: trails, isLoading } = useQuery({
    queryKey: ["trails"],
    queryFn: loadTrails,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-custom-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-primary mx-auto mb-4"></div>
          <p className="text-custom-text">Carregando progresso...</p>
        </div>
      </div>
    );
  }

  const handleTrailClick = (trailId: string) => {
    setLocation(`/trail/${trailId}`);
  };

  return (
    <div className="bg-custom-bg font-sans text-custom-text min-h-screen">
      <Header />

      {/* Progress Header */}
      <section className="bg-gradient-to-r from-custom-highlight to-custom-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-chart-line text-2xl"></i>
            </div>
            <h1 className="text-4xl font-bold mb-4">Seu Progresso</h1>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Acompanhe seu desenvolvimento nas trilhas de segurança digital e veja o que já conquistou.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-custom-title mb-4">Visão Geral</h2>
            <p className="text-lg text-custom-text">
              Seu progresso em todas as trilhas educativas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trails?.map((trail) => (
              <TrailProgressCard 
                key={trail.id} 
                trail={trail} 
                onClick={handleTrailClick} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-custom-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-custom-title mb-4">Suas Conquistas</h2>
            <p className="text-lg text-custom-text">
              Estatísticas do seu aprendizado
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {trails && <OverallStats trails={trails} />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}