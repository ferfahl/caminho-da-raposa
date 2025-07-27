import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="bg-custom-bg font-sans text-custom-text min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-custom-bg to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-custom-title mb-6">
                Sobre o Projeto
              </h1>
              <p className="text-lg text-custom-text max-w-2xl mx-auto">
                Conheça mais sobre o Caminho da Raposa e a missão por trás desta plataforma educativa.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Project Description */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-custom-primary rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-lightbulb text-white"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-custom-title">A Ideia</h2>
                </div>
                <p className="text-custom-text leading-relaxed mb-4">
                  O Caminho da Raposa nasceu da necessidade de tornar o aprendizado sobre segurança digital mais acessível e envolvente. Em um mundo cada vez mais conectado, é fundamental que todos tenham acesso ao conhecimento necessário para se proteger online.
                </p>
                <p className="text-custom-text leading-relaxed">
                  Nossa plataforma utiliza uma abordagem gamificada e interativa, guiada por nossa mascote raposa, para transformar conceitos complexos de segurança em experiências de aprendizado divertidas e memoráveis.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-custom-secondary rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-target text-white"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-custom-title">Nossa Missão</h2>
                </div>
                <p className="text-custom-text leading-relaxed">
                  Democratizar o conhecimento em segurança digital através de uma educação de qualidade, acessível e prática. Acreditamos que todos merecem navegar pela internet com segurança e confiança, independentemente de seu nível técnico inicial.
                </p>
              </CardContent>
            </Card>

            {/* About Creator */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-custom-highlight rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user text-white"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-custom-title">Sobre o Criador</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-1">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D5603AQFFcOsRNjjLYg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728045860233?e=1756339200&v=beta&t=IJYBww2RpxblY-h4DabC7__UfRf6Y_CzPr5ypGT94s4&auto=format&fit=crop&w=300&h=300&q=80" 
                      alt="Foto do criador" 
                      className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-custom-text leading-relaxed mb-4">
                      Fernanda Fahl é desenvolvedora de software com experiência em integração de sistemas e segurança digital. Apaixonada por educação e tecnologia, criou o Caminho da Raposa para tornar o aprendizado em cibersegurança acessível, prático e acolhedor.
                    </p>
                    <p className="text-custom-text leading-relaxed mb-4">
                      Formada em Arquitetura e Urbanismo pela FAU-USP e em Engenharia de Software pela 42 São Paulo, além de cursar MBA em Engenharia de Software pela USP/Esalq, Fernanda traz uma visão multidisciplinar para a tecnologia, unindo sua vivência na área de arquitetura e design à experiência em automação, APIs, atuação no iPaaS Digibee e no BRE. Acredita que a educação é a melhor ferramenta para criar um ambiente digital mais seguro e inclusivo.
                    </p>
                    <p className="text-custom-text leading-relaxed">
                      Quando não está desenvolvendo soluções ou explorando temas de cibersegurança, gosta de ler, assistir filmes, patinar e dançar, sempre buscando criar experiências de aprendizado que combinem conhecimento técnico com criatividade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-custom-success rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-code text-custom-title"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-custom-title">Tecnologia</h2>
                </div>
                <p className="text-custom-text leading-relaxed mb-4">
                  A plataforma foi desenvolvida utilizando tecnologias modernas e seguras, garantindo uma experiência fluida e confiável para todos os usuários.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-custom-title mb-2">Frontend</h4>
                    <ul className="text-custom-text text-sm space-y-1">
                      <li>• React com TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• Vite para desenvolvimento</li>
                      <li>• Componentes reutilizáveis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-custom-title mb-2">Recursos</h4>
                    <ul className="text-custom-text text-sm space-y-1">
                      <li>• Sistema de progresso local</li>
                      <li>• Conteúdo modular JSON</li>
                      <li>• Interface responsiva</li>
                      <li>• Experiência offline</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mx-auto mb-4">
                  <h2 className="text-2xl font-bold text-custom-title mb-4">Entre em Contato</h2>
                </div>
                <p className="text-custom-text leading-relaxed mb-6">
                  Tem sugestões, dúvidas ou quer colaborar com o projeto? Adoraria ouvir de você!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:autumn.fahl@gmail.com" 
                    className="inline-flex items-center px-6 py-3 bg-custom-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Email
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/fernanda-fahl/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-custom-highlight text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <i className="fab fa-linkedin mr-2"></i>
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/ferfahl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-custom-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <i className="fab fa-github mr-2"></i>
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}