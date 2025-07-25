import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Users, Bug, ShoppingCart, ArrowRight, Clock, Award } from 'lucide-react';

const Trilhas = () => {
  const trilhas = [
    {
      id: 'defesa-pessoal-digital',
      title: 'Defesa Pessoal Digital',
      description: 'Aprenda os fundamentos da segurança digital: senhas fortes, autenticação de dois fatores e proteção de contas.',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      modules: 4,
      duration: '2h',
      difficulty: 'Iniciante',
      topics: ['Senhas Seguras', 'Autenticação 2FA', 'Gerenciadores de Senha', 'Tríade CIA']
    },
    {
      id: 'golpes-phishing',
      title: 'Golpes e Phishing',
      description: 'Identifique e evite golpes online, e-mails falsos, links maliciosos e tentativas de phishing.',
      icon: Eye,
      color: 'from-red-500 to-red-600',
      modules: 5,
      duration: '3h',
      difficulty: 'Intermediário',
      topics: ['Identificação de Phishing', 'E-mails Suspeitos', 'Links Maliciosos', 'Engenharia Social']
    },
    {
      id: 'privacidade-redes-sociais',
      title: 'Privacidade e Redes Sociais',
      description: 'Configure suas redes sociais com segurança, proteja sua privacidade e controle suas informações pessoais.',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      modules: 4,
      duration: '2.5h',
      difficulty: 'Iniciante',
      topics: ['Configurações de Privacidade', 'Compartilhamento Seguro', 'Dados Pessoais', 'Pegada Digital']
    },
    {
      id: 'malwares-dispositivos',
      title: 'Malwares e Dispositivos',
      description: 'Proteja seus dispositivos contra vírus, malwares, ransomware e outras ameaças digitais.',
      icon: Bug,
      color: 'from-orange-500 to-orange-600',
      modules: 6,
      duration: '4h',
      difficulty: 'Avançado',
      topics: ['Tipos de Malware', 'Antivírus', 'Atualizações', 'Backup Seguro']
    },
    {
      id: 'compras-seguras',
      title: 'Compras Seguras Online',
      description: 'Faça compras online com segurança, evite fraudes financeiras e proteja seus dados bancários.',
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600',
      modules: 4,
      duration: '2h',
      difficulty: 'Iniciante',
      topics: ['Sites Confiáveis', 'Pagamentos Seguros', 'Fraudes Financeiras', 'Cartões Virtuais']
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante':
        return 'bg-green-100 text-green-800';
      case 'Intermediário':
        return 'bg-yellow-100 text-yellow-800';
      case 'Avançado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#5C2A7C] mb-4">
            Trilhas de Aprendizagem
          </h1>
          <p className="text-xl text-[#2D2D2D] max-w-3xl mx-auto">
            Escolha sua trilha e comece a aprender segurança digital de forma estruturada e prática
          </p>
        </div>

        {/* Trilhas Grid */}
        <div className="space-y-8">
          {trilhas.map((trilha, index) => (
            <div
              key={trilha.id}
              className="bg-[#FAFAFA] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D9D3E5] overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${trilha.color}`}></div>
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Conteúdo Principal */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${trilha.color} rounded-xl flex items-center justify-center`}>
                        <trilha.icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[#5C2A7C] mb-3">{trilha.title}</h2>
                        <p className="text-[#2D2D2D] mb-4 leading-relaxed">{trilha.description}</p>
                        
                        {/* Metadados */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <div className="flex items-center space-x-2 text-sm text-[#6C63FF]">
                            <Clock size={16} />
                            <span>{trilha.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-[#6C63FF]">
                            <Award size={16} />
                            <span>{trilha.modules} módulos</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(trilha.difficulty)}`}>
                            {trilha.difficulty}
                          </span>
                        </div>

                        {/* Tópicos */}
                        <div className="flex flex-wrap gap-2">
                          {trilha.topics.map((topic, topicIndex) => (
                            <span
                              key={topicIndex}
                              className="px-3 py-1 bg-[#F4F0FA] text-[#5C2A7C] text-sm rounded-full border border-[#D9D3E5]"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="lg:col-span-1 flex flex-col space-y-3">
                    <Link
                      to={`/modulo/${trilha.id}/1`}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#C75EEB] text-white font-semibold rounded-lg hover:bg-[#B347DC] transition-colors"
                    >
                      Iniciar Trilha
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                    <button className="w-full px-6 py-3 border-2 border-[#C75EEB] text-[#C75EEB] font-semibold rounded-lg hover:bg-[#C75EEB] hover:text-white transition-colors">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="mt-16 bg-gradient-to-r from-[#5C2A7C] to-[#3E4B7E] rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Seu Progresso</h3>
            <p className="text-gray-200">Acompanhe sua evolução nas trilhas de segurança digital</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">0/5</div>
              <div className="text-gray-200">Trilhas Concluídas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-gray-200">Badges Conquistadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">0h</div>
              <div className="text-gray-200">Tempo de Estudo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trilhas;