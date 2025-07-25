import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, BookOpen, Lock, Eye, CreditCard, Bug, ShoppingCart } from 'lucide-react';

const Home = () => {
  const trilhas = [
    {
      id: 'defesa-pessoal-digital',
      title: 'Defesa Pessoal Digital',
      description: 'Aprenda a criar senhas fortes, usar autenticação de dois fatores e proteger suas contas.',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      modules: 4
    },
    {
      id: 'golpes-phishing',
      title: 'Golpes e Phishing',
      description: 'Identifique e evite golpes online, e-mails falsos e tentativas de phishing.',
      icon: Eye,
      color: 'from-red-500 to-red-600',
      modules: 5
    },
    {
      id: 'privacidade-redes-sociais',
      title: 'Privacidade e Redes Sociais',
      description: 'Configure suas redes sociais com segurança e proteja sua privacidade online.',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      modules: 4
    },
    {
      id: 'malwares-dispositivos',
      title: 'Malwares e Dispositivos',
      description: 'Proteja seus dispositivos contra vírus, malwares e outras ameaças digitais.',
      icon: Bug,
      color: 'from-orange-500 to-orange-600',
      modules: 6
    },
    {
      id: 'compras-seguras',
      title: 'Compras Seguras Online',
      description: 'Faça compras online com segurança e evite fraudes financeiras.',
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600',
      modules: 4
    }
  ];

  const stats = [
    { number: '5', label: 'Trilhas Disponíveis', icon: BookOpen },
    { number: '23', label: 'Módulos Interativos', icon: Award },
    { number: '100+', label: 'Exercícios Práticos', icon: Lock }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#5C2A7C] via-[#3E4B7E] to-[#6C63FF] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Sua jornada pela 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  {' '}segurança digital{' '}
                </span>
                começa aqui
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Aprenda a se proteger no mundo virtual com trilhas interativas, 
                gamificação e conteúdo acessível para todos os níveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/trilhas"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#C75EEB] text-white font-semibold rounded-lg hover:bg-[#B347DC] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Começar Agora
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/perfil"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#5C2A7C] transition-all duration-300"
                >
                  Meu Progresso
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-8xl">🦊</span>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-2xl">🔍</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#C75EEB] to-[#B347DC] rounded-full mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-[#5C2A7C] mb-2">{stat.number}</div>
                <div className="text-[#2D2D2D] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trilhas Section */}
      <section className="py-20 bg-[#F4F0FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#5C2A7C] mb-4">
              Trilhas de Aprendizagem
            </h2>
            <p className="text-xl text-[#2D2D2D] max-w-3xl mx-auto">
              Escolha sua trilha e comece a aprender segurança digital de forma prática e divertida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trilhas.map((trilha) => (
              <div
                key={trilha.id}
                className="bg-[#FAFAFA] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#D9D3E5] overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${trilha.color}`}></div>
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${trilha.color} rounded-lg mb-4`}>
                    <trilha.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#5C2A7C] mb-3">{trilha.title}</h3>
                  <p className="text-[#2D2D2D] mb-4 leading-relaxed">{trilha.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-[#6C63FF] font-medium">
                      {trilha.modules} módulos
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-[#C75EEB]' : 'bg-[#D9D3E5]'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/modulo/${trilha.id}/1`}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#C75EEB] text-white font-semibold rounded-lg hover:bg-[#B347DC] transition-colors"
                  >
                    Acessar Trilha
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#5C2A7C] to-[#3E4B7E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Junte-se a milhares de pessoas que já aprenderam a se proteger no mundo digital
          </p>
          <Link
            to="/trilhas"
            className="inline-flex items-center px-8 py-4 bg-[#C75EEB] text-white font-semibold rounded-lg hover:bg-[#B347DC] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explorar Trilhas
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;