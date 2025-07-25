import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock blog posts data - you can replace this with a JSON file or CMS later
const blogPosts = [
  {
    id: 1,
    title: "Lançamento da Plataforma Caminho da Raposa",
    excerpt: "Estamos empolgados em anunciar o lançamento oficial da nossa plataforma de educação em segurança digital.",
    content: `Hoje marca um marco importante para nós - o lançamento oficial do Caminho da Raposa!

Após meses de desenvolvimento e testes, finalmente podemos compartilhar nossa visão de tornar a educação em segurança digital mais acessível e divertida.

**O que você pode esperar:**
- Trilhas interativas de aprendizado
- Quizzes práticos e envolventes
- Acompanhamento de progresso personalizado
- Conteúdo sempre atualizado

Nossa jornada está apenas começando, e estamos ansiosos para receber seu feedback e sugestões para tornar a plataforma ainda melhor.`,
    date: "2024-01-15",
    category: "Novidades",
    author: "Equipe Caminho da Raposa",
    readTime: "3 min"
  },
  {
    id: 2,
    title: "Nova Trilha: Defesa Digital Pessoal",
    excerpt: "Aprenda a proteger suas informações pessoais com nossa mais nova trilha educativa.",
    content: `Temos o prazer de anunciar o lançamento de nossa primeira trilha educativa: **Defesa Digital Pessoal**.

Esta trilha abrangente foi projetada para ensinar os conceitos fundamentais de segurança digital de forma prática e envolvente.

**Módulos inclusos:**
1. Fundamentos da Segurança Digital
2. Senhas Seguras e Autenticação
3. Navegação Segura na Internet
4. Proteção contra Phishing
5. Backup e Recuperação de Dados

Cada módulo inclui exercícios práticos, quizzes interativos e dicas reais que você pode aplicar imediatamente em sua vida digital.`,
    date: "2024-01-20",
    category: "Trilhas",
    author: "Equipe Educativa",
    readTime: "5 min"
  },
  {
    id: 3,
    title: "Dicas de Segurança: Autenticação de Dois Fatores",
    excerpt: "Por que a autenticação de dois fatores é essencial e como configurá-la corretamente.",
    content: `A autenticação de dois fatores (2FA) é uma das medidas de segurança mais importantes que você pode implementar para proteger suas contas online.

**Por que é importante?**
Mesmo que alguém descubra sua senha, ainda precisará do segundo fator (geralmente seu telefone ou app autenticador) para acessar sua conta.

**Como configurar:**
1. Acesse as configurações de segurança da conta
2. Procure por "Autenticação de dois fatores" ou "2FA"
3. Escolha seu método preferido (SMS, app autenticador, etc.)
4. Siga as instruções de configuração
5. Guarde os códigos de backup em local seguro

**Apps recomendados:**
- Google Authenticator
- Microsoft Authenticator
- Authy

Lembre-se: sempre mantenha códigos de backup salvos em local seguro para não perder acesso às suas contas.`,
    date: "2024-01-25",
    category: "Dicas",
    author: "Especialista em Segurança",
    readTime: "4 min"
  },
  {
    id: 4,
    title: "Atualização da Plataforma v1.1",
    excerpt: "Melhorias na interface, correções de bugs e novos recursos foram implementados.",
    content: `Estamos felizes em anunciar a versão 1.1 da nossa plataforma!

**Novidades desta versão:**

**🎨 Interface**
- Design mais limpo e moderno
- Melhor navegação mobile
- Cores mais acessíveis

**📊 Recursos**
- Nova página de progresso detalhado
- Sistema de conquistas aprimorado
- Feedback melhorado nos quizzes

**🐛 Correções**
- Correção de problemas na navegação
- Melhoria na velocidade de carregamento
- Fixes em compatibilidade mobile

**🔜 Próximos passos**
- Sistema de certificados
- Mais trilhas de aprendizado
- Recursos de gamificação

Obrigado por seu feedback contínuo que nos ajuda a melhorar constantemente!`,
    date: "2024-02-01",
    category: "Atualizações",
    author: "Equipe de Desenvolvimento",
    readTime: "3 min"
  }
];

const categories = ["Todas", "Novidades", "Trilhas", "Dicas", "Atualizações"];

export default function BlogPage() {
  return (
    <div className="bg-custom-bg font-sans text-custom-text min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-custom-bg to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-custom-title mb-6">
                Blog & Atualizações
              </h1>
              <p className="text-lg text-custom-text max-w-2xl mx-auto">
                Fique por dentro das novidades, dicas de segurança e atualizações da plataforma Caminho da Raposa.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b border-custom-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === "Todas" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-custom-primary hover:text-white transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-custom-text">
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="text-sm text-custom-text">•</span>
                      <span className="text-sm text-custom-text">{post.readTime}</span>
                      <span className="text-sm text-custom-text">•</span>
                      <span className="text-sm text-custom-text">{post.author}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-custom-title mb-2 hover:text-custom-primary transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    <p className="text-custom-text">{post.excerpt}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none text-custom-text">
                      {post.content.split('\n').map((paragraph, index) => {
                        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                          return (
                            <h3 key={index} className="font-semibold text-custom-title mt-4 mb-2">
                              {paragraph.replace(/\*\*/g, '')}
                            </h3>
                          );
                        }
                        if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
                          return (
                            <li key={index} className="ml-4">
                              {paragraph.replace(/^[-\d\.]\s/, '')}
                            </li>
                          );
                        }
                        if (paragraph.trim()) {
                          return (
                            <p key={index} className="mb-3">
                              {paragraph}
                            </p>
                          );
                        }
                        return null;
                      })}
                    </div>
                    <div className="mt-6 pt-4 border-t border-custom-border">
                      <button className="text-custom-primary hover:text-custom-hover font-medium">
                        Ler mais →
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-custom-primary hover:bg-custom-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Carregar Mais Posts
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-custom-bg">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-custom-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-bell text-white text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-custom-title mb-4">
              Receba Atualizações
            </h3>
            <p className="text-custom-text mb-8">
              Inscreva-se para receber as últimas novidades, dicas de segurança e atualizações da plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu email aqui"
                className="flex-1 px-4 py-3 rounded-lg border border-custom-border focus:outline-none focus:ring-2 focus:ring-custom-primary"
              />
              <button className="bg-custom-primary hover:bg-custom-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}