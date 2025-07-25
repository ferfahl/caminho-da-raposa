import React from 'react';
import { User, Award, Clock, BookOpen, Target, TrendingUp } from 'lucide-react';

const Profile = () => {
  const userStats = {
    name: 'Usuário Demo',
    email: 'demo@caminhodaraposa.com',
    joinDate: 'Janeiro 2025',
    totalTime: '0h 0min',
    completedModules: 0,
    totalModules: 23,
    badges: 0,
    currentStreak: 0
  };

  const badges = [
    {
      id: 1,
      name: 'Primeiro Passo',
      description: 'Complete seu primeiro módulo',
      icon: '🎯',
      earned: false
    },
    {
      id: 2,
      name: 'Defensor Digital',
      description: 'Complete a trilha de Defesa Pessoal Digital',
      icon: '🛡️',
      earned: false
    },
    {
      id: 3,
      name: 'Caçador de Golpes',
      description: 'Complete a trilha de Golpes e Phishing',
      icon: '🕵️',
      earned: false
    },
    {
      id: 4,
      name: 'Guardião da Privacidade',
      description: 'Complete a trilha de Privacidade e Redes Sociais',
      icon: '🔒',
      earned: false
    }
  ];

  const recentActivity = [
    {
      action: 'Bem-vindo ao Caminho da Raposa!',
      date: 'Hoje',
      type: 'welcome'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#5C2A7C] to-[#3E4B7E] rounded-xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <User className="text-white" size={40} />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{userStats.name}</h1>
              <p className="text-gray-200 mb-1">{userStats.email}</p>
              <p className="text-gray-300 text-sm">Membro desde {userStats.joinDate}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#D9D3E5]">
              <h2 className="text-xl font-bold text-[#5C2A7C] mb-6">Seu Progresso</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-[#5C2A7C]">
                    {userStats.completedModules}/{userStats.totalModules}
                  </div>
                  <div className="text-sm text-[#2D2D2D]">Módulos</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-[#5C2A7C]">{userStats.badges}</div>
                  <div className="text-sm text-[#2D2D2D]">Badges</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-[#5C2A7C]">{userStats.totalTime}</div>
                  <div className="text-sm text-[#2D2D2D]">Estudado</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-[#5C2A7C]">{userStats.currentStreak}</div>
                  <div className="text-sm text-[#2D2D2D]">Sequência</div>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#D9D3E5]">
              <h2 className="text-xl font-bold text-[#5C2A7C] mb-6">Conquistas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      badge.earned
                        ? 'border-[#C75EEB] bg-[#F4F0FA]'
                        : 'border-[#D9D3E5] bg-gray-50 opacity-60'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{badge.icon}</div>
                      <div>
                        <h3 className={`font-semibold ${
                          badge.earned ? 'text-[#5C2A7C]' : 'text-gray-500'
                        }`}>
                          {badge.name}
                        </h3>
                        <p className={`text-sm ${
                          badge.earned ? 'text-[#2D2D2D]' : 'text-gray-400'
                        }`}>
                          {badge.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#D9D3E5]">
              <h3 className="text-lg font-bold text-[#5C2A7C] mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg border border-[#D9D3E5] hover:border-[#C75EEB] hover:bg-[#F4F0FA] transition-colors">
                  <div className="flex items-center space-x-3">
                    <Target className="text-[#C75EEB]" size={20} />
                    <span className="font-medium text-[#2D2D2D]">Continuar Aprendendo</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-[#D9D3E5] hover:border-[#C75EEB] hover:bg-[#F4F0FA] transition-colors">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="text-[#C75EEB]" size={20} />
                    <span className="font-medium text-[#2D2D2D]">Explorar Trilhas</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#D9D3E5]">
              <h3 className="text-lg font-bold text-[#5C2A7C] mb-4">Atividade Recente</h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C75EEB] rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-[#2D2D2D]">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Motivational Card */}
            <div className="bg-gradient-to-br from-[#C75EEB] to-[#B347DC] rounded-xl p-6 text-white">
              <div className="text-center">
                <div className="text-4xl mb-3">🦊</div>
                <h3 className="font-bold mb-2">Continue Explorando!</h3>
                <p className="text-sm opacity-90">
                  Cada módulo concluído te deixa mais seguro no mundo digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;