import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Play, BookOpen, Award } from 'lucide-react';

const Modulo = () => {
  const { trilhaId, moduloId } = useParams();
  const [completed, setCompleted] = useState(false);

  // Dados do módulo baseado no conteúdo fornecido
  const moduloData = {
    'defesa-pessoal-digital': {
      title: 'Defesa Pessoal Digital',
      modules: {
        '1': {
          title: 'A Tríade da Segurança da Informação (CIA)',
          content: `
            <h2>🔑 Conceitos-chave: A Tríade da Segurança da Informação (CIA)</h2>
            <p>A base da segurança digital está em três pilares fundamentais:</p>
            
            <div class="space-y-4 my-6">
              <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 class="font-bold text-blue-800 mb-2">🔒 Confidencialidade</h3>
                <p class="text-blue-700">Garantir que somente pessoas autorizadas tenham acesso a certas informações.</p>
                <p class="text-sm text-blue-600 mt-2"><strong>Exemplo:</strong> Apenas você pode ver suas conversas privadas ou acessar seu e-mail.</p>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 class="font-bold text-green-800 mb-2">🧩 Integridade</h3>
                <p class="text-green-700">Assegurar que os dados não sejam alterados ou corrompidos sem autorização.</p>
                <p class="text-sm text-green-600 mt-2"><strong>Exemplo:</strong> Uma mensagem que você envia deve chegar ao destinatário sem modificações.</p>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 class="font-bold text-purple-800 mb-2">🌐 Disponibilidade</h3>
                <p class="text-purple-700">Garantir que os dados e serviços estejam acessíveis quando você precisar.</p>
                <p class="text-sm text-purple-600 mt-2"><strong>Exemplo:</strong> Um site de banco que precisa estar no ar 24h por dia para que você possa movimentar sua conta.</p>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
              <h4 class="font-bold text-yellow-800 mb-2">💡 Por que isso é importante?</h4>
              <p class="text-yellow-700">Estes três pilares formam a base de toda estratégia de segurança digital. Quando um deles falha, sua segurança fica comprometida.</p>
            </div>
          `,
          nextModule: '2'
        },
        '2': {
          title: 'Como Criar Senhas Fortes',
          content: `
            <h2>🧩 Como criar senhas fortes</h2>
            <p>Senhas fracas são uma das principais portas de entrada para golpes online. Veja como criar uma senha segura:</p>
            
            <div class="bg-red-50 p-4 rounded-lg border border-red-200 my-6">
              <h3 class="font-bold text-red-800 mb-3">❌ Evite estas práticas:</h3>
              <ul class="list-disc list-inside text-red-700 space-y-1">
                <li>Palavras comuns como "senha", "123456" ou seu nome</li>
                <li>Datas de nascimento ou informações pessoais</li>
                <li>Sequências simples como "abcd" ou "1234"</li>
                <li>Reutilizar senhas em diferentes contas</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border border-green-200 my-6">
              <h3 class="font-bold text-green-800 mb-3">✅ Regras para senhas seguras:</h3>
              <ul class="list-disc list-inside text-green-700 space-y-1">
                <li>Use pelo menos 12 caracteres</li>
                <li>Misture letras maiúsculas, minúsculas, números e símbolos</li>
                <li>Use frases aleatórias fáceis de lembrar</li>
                <li>Crie uma senha única para cada conta</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200 my-6">
              <h3 class="font-bold text-blue-800 mb-3">💡 Exemplo de senha forte:</h3>
              <code class="bg-blue-100 px-3 py-2 rounded text-blue-800 font-mono text-lg">Gatos!Chuvosos23Na_Praça</code>
              <p class="text-blue-700 mt-2 text-sm">Esta senha combina palavras aleatórias, números, símbolos e é fácil de lembrar!</p>
            </div>
          `,
          nextModule: '3'
        }
      }
    }
  };

  const currentTrilha = moduloData[trilhaId as keyof typeof moduloData];
  const currentModule = currentTrilha?.modules[moduloId as keyof typeof currentTrilha.modules];

  if (!currentTrilha || !currentModule) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#5C2A7C] mb-4">Módulo não encontrado</h1>
          <Link to="/trilhas" className="text-[#6C63FF] hover:underline">
            Voltar para trilhas
          </Link>
        </div>
      </div>
    );
  }

  const handleComplete = () => {
    setCompleted(true);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-[#6C63FF] mb-8">
          <Link to="/trilhas" className="hover:underline">Trilhas</Link>
          <span>/</span>
          <span className="text-[#2D2D2D]">{currentTrilha.title}</span>
          <span>/</span>
          <span className="text-[#2D2D2D]">Módulo {moduloId}</span>
        </nav>

        {/* Header */}
        <div className="bg-[#FAFAFA] rounded-xl p-6 mb-8 border border-[#D9D3E5]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#5C2A7C]">{currentModule.title}</h1>
                <p className="text-[#6C63FF]">{currentTrilha.title} - Módulo {moduloId}</p>
              </div>
            </div>
            {completed && (
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle size={24} />
                <span className="font-medium">Concluído</span>
              </div>
            )}
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-[#D9D3E5] rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#C75EEB] to-[#B347DC] h-2 rounded-full transition-all duration-500"
              style={{ width: completed ? '100%' : '0%' }}
            ></div>
          </div>
        </div>

        {/* Conteúdo do Módulo */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-[#D9D3E5]">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: currentModule.content }}
            style={{
              '--tw-prose-headings': '#5C2A7C',
              '--tw-prose-body': '#2D2D2D',
              '--tw-prose-links': '#6C63FF'
            } as React.CSSProperties}
          />
        </div>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <Link
            to="/trilhas"
            className="flex items-center space-x-2 text-[#6C63FF] hover:text-[#5C2A7C] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Voltar para Trilhas</span>
          </Link>

          <div className="flex space-x-4">
            {!completed && (
              <button
                onClick={handleComplete}
                className="flex items-center space-x-2 px-6 py-3 bg-[#B6E3C4] text-green-800 font-semibold rounded-lg hover:bg-green-200 transition-colors"
              >
                <CheckCircle size={20} />
                <span>Marcar como Concluído</span>
              </button>
            )}
            
            {currentModule.nextModule ? (
              <Link
                to={`/modulo/${trilhaId}/${currentModule.nextModule}`}
                className="flex items-center space-x-2 px-6 py-3 bg-[#C75EEB] text-white font-semibold rounded-lg hover:bg-[#B347DC] transition-colors"
              >
                <span>Próximo Módulo</span>
                <ArrowRight size={20} />
              </Link>
            ) : (
              <Link
                to={`/quiz/${trilhaId}`}
                className="flex items-center space-x-2 px-6 py-3 bg-[#C75EEB] text-white font-semibold rounded-lg hover:bg-[#B347DC] transition-colors"
              >
                <Award size={20} />
                <span>Fazer Quiz</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mascote */}
        <div className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <span className="text-2xl">🦊</span>
        </div>
      </div>
    </div>
  );
};

export default Modulo;