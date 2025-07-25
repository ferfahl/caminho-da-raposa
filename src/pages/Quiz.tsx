import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Award, RotateCcw } from 'lucide-react';

const Quiz = () => {
  const { trilhaId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quizData = {
    'defesa-pessoal-digital': {
      title: 'Quiz: Defesa Pessoal Digital',
      questions: [
        {
          question: 'O que significa a sigla CIA na segurança da informação?',
          options: [
            'Confiança, Inovação e Autonomia',
            'Confidencialidade, Integridade e Disponibilidade',
            'Comunicação, Internet e Aplicações',
            'Controle, Identidade e Acesso'
          ],
          correct: 1,
          explanation: 'CIA significa Confidencialidade, Integridade e Disponibilidade - os três pilares fundamentais da segurança da informação.'
        },
        {
          question: 'Qual é a principal função da autenticação de dois fatores (2FA)?',
          options: [
            'Aumentar o tempo de login',
            'Prevenir o uso de emojis nas senhas',
            'Adicionar uma camada extra de segurança',
            'Proteger contra vírus'
          ],
          correct: 2,
          explanation: 'A 2FA adiciona uma camada extra de segurança, exigindo um segundo fator além da senha para acessar uma conta.'
        },
        {
          question: 'Qual dessas senhas é mais segura?',
          options: [
            'fernanda123',
            'senha2023',
            'Gato$Preto_92_Lua',
            '12345678'
          ],
          correct: 2,
          explanation: 'A senha "Gato$Preto_92_Lua" é mais segura por combinar letras maiúsculas e minúsculas, números, símbolos e ter mais de 12 caracteres.'
        },
        {
          question: 'O que é um gerenciador de senhas?',
          options: [
            'Um antivírus para e-mail',
            'Um lugar seguro para armazenar e criar senhas',
            'Um histórico de senhas usadas',
            'Um aplicativo de bloqueio de tela'
          ],
          correct: 1,
          explanation: 'Um gerenciador de senhas é uma ferramenta que armazena com segurança todas as suas senhas e pode gerar senhas fortes automaticamente.'
        },
        {
          question: 'Você deve usar a mesma senha em vários sites?',
          options: [
            'Sim, se for forte',
            'Não',
            'Depende do site',
            'Só se for no mesmo dia'
          ],
          correct: 1,
          explanation: 'Nunca reutilize senhas! Se uma conta for comprometida, todas as outras contas com a mesma senha também estarão em risco.'
        }
      ]
    }
  };

  const currentQuiz = quizData[trilhaId as keyof typeof quizData];

  if (!currentQuiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#5C2A7C] mb-4">Quiz não encontrado</h1>
          <Link to="/trilhas" className="text-[#6C63FF] hover:underline">
            Voltar para trilhas
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === currentQuiz.questions[index].correct ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const score = calculateScore();
  const percentage = Math.round((score / currentQuiz.questions.length) * 100);
  const passed = percentage >= 70;

  if (showResult) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
              passed ? 'bg-[#B6E3C4]' : 'bg-[#F7A6A6]'
            }`}>
              {passed ? (
                <Award className="text-green-800" size={40} />
              ) : (
                <XCircle className="text-red-800" size={40} />
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-[#5C2A7C] mb-4">
              {passed ? 'Parabéns! 🎉' : 'Quase lá! 💪'}
            </h1>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="text-6xl font-bold text-[#5C2A7C] mb-4">
                {score}/{currentQuiz.questions.length}
              </div>
              <div className="text-2xl text-[#2D2D2D] mb-2">
                {percentage}% de acertos
              </div>
              <div className={`text-lg font-medium ${
                passed ? 'text-green-600' : 'text-orange-600'
              }`}>
                {passed ? 'Você passou no quiz!' : 'Continue estudando para melhorar!'}
              </div>
            </div>

            {passed && (
              <div className="bg-gradient-to-r from-[#C75EEB] to-[#B347DC] text-white rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-2">🏆 Badge Conquistada!</h3>
                <p>Especialista em Defesa Pessoal Digital</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={resetQuiz}
                className="flex items-center space-x-2 px-6 py-3 border-2 border-[#C75EEB] text-[#C75EEB] font-semibold rounded-lg hover:bg-[#C75EEB] hover:text-white transition-colors"
              >
                <RotateCcw size={20} />
                <span>Tentar Novamente</span>
              </button>
              <Link
                to="/trilhas"
                className="flex items-center space-x-2 px-6 py-3 bg-[#C75EEB] text-white font-semibold rounded-lg hover:bg-[#B347DC] transition-colors"
              >
                <span>Explorar Outras Trilhas</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = currentQuiz.questions[currentQuestion];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/trilhas"
            className="flex items-center space-x-2 text-[#6C63FF] hover:text-[#5C2A7C] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Voltar para Trilhas</span>
          </Link>
          <div className="text-[#6C63FF] font-medium">
            Questão {currentQuestion + 1} de {currentQuiz.questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#D9D3E5] rounded-full h-3 mb-8">
          <div 
            className="bg-gradient-to-r from-[#C75EEB] to-[#B347DC] h-3 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / currentQuiz.questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-2xl font-bold text-[#5C2A7C] mb-8">{currentQuiz.title}</h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#2D2D2D] mb-6">
              {question.question}
            </h2>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedAnswer === index
                      ? 'border-[#C75EEB] bg-[#F4F0FA] text-[#5C2A7C]'
                      : 'border-[#D9D3E5] hover:border-[#C75EEB] hover:bg-[#F4F0FA]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-[#C75EEB] bg-[#C75EEB]'
                        : 'border-[#D9D3E5]'
                    }`}>
                      {selectedAnswer === index && (
                        <CheckCircle className="text-white" size={16} />
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 font-semibold rounded-lg transition-colors ${
                selectedAnswer !== null
                  ? 'bg-[#C75EEB] text-white hover:bg-[#B347DC]'
                  : 'bg-[#D9D3E5] text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion < currentQuiz.questions.length - 1 ? 'Próxima' : 'Finalizar'}
            </button>
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

export default Quiz;