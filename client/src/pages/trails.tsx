import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TrailCard } from "@/components/trail-card";
import { useQuery } from "@tanstack/react-query";
import { loadTrails } from "@/lib/trail-loader";

export default function TrailsPage() {
  const { data: trails, isLoading } = useQuery({
    queryKey: ["trails"],
    queryFn: loadTrails,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-custom-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-primary mx-auto mb-4"></div>
          <p className="text-custom-text">Carregando trilhas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-custom-bg font-sans text-custom-text min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-custom-bg to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-custom-title mb-6">
                Trilhas de Aprendizado
              </h1>
              <p className="text-lg text-custom-text max-w-2xl mx-auto mb-8">
                Escolha sua jornada de aprendizado em segurança digital. Cada trilha foi cuidadosamente desenvolvida para te ensinar aspectos importantes da proteção online.
              </p>
            </div>
          </div>
        </section>

        {/* Trail Selection Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-custom-title mb-4">Escolha Sua Trilha de Aprendizado</h2>
              <p className="text-lg text-custom-text max-w-2xl mx-auto">
                Cada trilha foi cuidadosamente desenvolvida para te ensinar aspectos importantes da segurança digital de forma prática e divertida.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {trails?.map((trail) => (
                <TrailCard key={trail.id} trail={trail} />
              ))}
            </div>

            {/* Coming Soon Trail Card */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="bg-gray-50 border-2 border-dashed border-custom-border rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-custom-border rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-plus text-custom-text text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-custom-text mb-2">Mais Trilhas em Breve</h4>
                <p className="text-sm text-custom-text">Estamos preparando novas trilhas educativas para expandir seu conhecimento em segurança digital.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-custom-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-custom-title mb-4">Como Funciona</h3>
              <p className="text-lg text-custom-text max-w-2xl mx-auto">
                Nossa metodologia de ensino é baseada em princípios pedagógicos modernos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-custom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-play text-white text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-custom-title mb-2">1. Escolha e Inicie</h4>
                <p className="text-custom-text">Selecione uma trilha que corresponda ao seu nível de conhecimento atual.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-custom-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-book-open text-white text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-custom-title mb-2">2. Aprenda e Pratique</h4>
                <p className="text-custom-text">Absorva o conteúdo através de módulos interativos e exercícios práticos.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-custom-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-trophy text-white text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-custom-title mb-2">3. Complete e Avance</h4>
                <p className="text-custom-text">Finalize quizzes, ganhe pontuação e avance para o próximo nível.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}