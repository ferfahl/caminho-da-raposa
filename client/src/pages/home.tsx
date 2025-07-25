import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleViewTrails = () => {
    setLocation("/progress");
  };

  const handleStartLearning = () => {
    setLocation("/trail/digital-self-defense");
  };

  return (
    <div className="bg-custom-bg font-sans text-custom-text min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-custom-bg to-white py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-6xl font-bold text-custom-title mb-6 leading-tight">
                  Aprenda Segurança Digital de Forma
                  <span className="text-custom-primary"> Interativa</span>
                </h2>
                <p className="text-lg text-custom-text mb-8 leading-relaxed">
                  Descubra como se proteger online através de trilhas educativas guiadas pela nossa raposa especialista em segurança digital.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    onClick={handleViewTrails}
                    className="bg-custom-primary hover:bg-custom-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                  >
                    Ver Trilhas
                  </Button>
                  <Button 
                    onClick={handleStartLearning}
                    variant="outline"
                    className="bg-white hover:bg-gray-50 text-custom-title px-8 py-3 rounded-lg font-semibold border-2 border-custom-border transition-colors"
                  >
                    Começar Aprendizado
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://github.com/ferfahl/caminho-da-raposa/blob/main/public/static/img/banner.png?raw=true&auto=format&fit=crop&w=600&h=400" 
                  alt="Cute fox character holding a shield representing digital security" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>



        {/* Features Section */}
        <section className="py-20 bg-custom-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-custom-title mb-4">Por que Escolher o Caminho da Raposa?</h3>
              <p className="text-lg text-custom-text max-w-2xl mx-auto">
                Nossa plataforma oferece uma experiência de aprendizado única e envolvente.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-custom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-gamepad text-white text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-custom-title mb-2">Aprendizado Interativo</h4>
                <p className="text-custom-text">Quizzes, exercícios práticos e feedback imediato para maximizar o aprendizado.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-custom-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-route text-white text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-custom-title mb-2">Trilhas Personalizadas</h4>
                <p className="text-custom-text">Conteúdo adaptado ao seu nível de conhecimento e necessidades específicas.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-custom-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-white text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-custom-title mb-2">Progresso Acompanhado</h4>
                <p className="text-custom-text">Visualize seu desenvolvimento e conquiste certificados ao completar as trilhas.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
