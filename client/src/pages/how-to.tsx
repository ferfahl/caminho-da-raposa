import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="bg-custom-bg font-sans text-custom-text min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-custom-bg to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-custom-title mb-6">
              Como usar o Caminho da Raposa
            </h1>
            <p className="text-lg text-custom-text max-w-2xl mx-auto">
              Aprenda a explorar as trilhas e testar seus conhecimentos com nossos quizzes interativos.
            </p>
          </div>
        </section>

        {/* Como Funciona Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Explorar Trilhas */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-custom-title mb-4">1. Explorar Trilhas</h2>
                <p className="text-custom-text leading-relaxed mb-2">
                  Acesse a seção <strong>Trilhas</strong> no menu superior para ver todos os caminhos disponíveis.
                </p>
                <p className="text-custom-text leading-relaxed">
                  Cada trilha é dividida em módulos com etapas de leitura e exemplos práticos. Clique no nome da trilha para iniciar.
                </p>
              </CardContent>
            </Card>

            {/* Realizar Quizzes */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-custom-title mb-4">2. Realizar Quizzes</h2>
                <p className="text-custom-text leading-relaxed mb-2">
                  Ao concluir cada módulo, encontre o quiz correspondente para reforçar seu aprendizado.
                </p>
                <p className="text-custom-text leading-relaxed">
                  Selecione a alternativa correta e clique em <strong>Confirmar</strong>. Use <strong>Próxima</strong> para avançar ou <strong>Finalizar</strong> para ver seu desempenho.
                </p>
              </CardContent>
            </Card>

            {/* Acompanhar Progresso */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-custom-title mb-4">3. Acompanhar Progresso</h2>
                <p className="text-custom-text leading-relaxed mb-2">
                  Seu progresso é salvo automaticamente no armazenamento local do navegador.
                </p>
                <p className="text-custom-text leading-relaxed">
                  Volte a qualquer trilha ou módulo para continuar de onde parou. Na página <strong>Progresso</strong>, veja um resumo do seu desempenho.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
