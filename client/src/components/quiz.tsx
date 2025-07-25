import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

interface Module {
  id: number;
  title: string;
  quiz: QuizQuestion[];
}

interface QuizProps {
  module: Module;
  onComplete: (score: number) => void;
  onBack: () => void;
}

export function Quiz({ module, onComplete, onBack }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = module.quiz;
  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setShowFeedback(true);

    setTimeout(() => {
      if (isLastQuestion) {
        const score = newAnswers.reduce((acc, answer, index) => {
          return acc + (answer === questions[index].correct ? 1 : 0);
        }, 0);
        setShowResult(true);
      } else {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      }
    }, 2000);
  };

  const handleFinish = () => {
    const score = (answers.filter((answer, index) => answer === questions[index].correct).length / questions.length) * 100;
    onComplete(score);
  };

  const isCorrect = selectedAnswer === question.correct;

  if (showResult) {
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].correct).length;
    const scorePercentage = (correctAnswers / questions.length) * 100;

    return (
      <section className="py-16 bg-custom-bg">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardContent className="p-8 text-center">
              <div className={`w-16 h-16 ${scorePercentage >= 70 ? 'bg-custom-success' : 'bg-custom-error'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`fas ${scorePercentage >= 70 ? 'fa-check' : 'fa-times'} text-white text-xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-custom-title mb-4">
                Quiz Concluído!
              </h3>
              <p className="text-lg text-custom-text mb-6">
                Você acertou {correctAnswers} de {questions.length} questões ({Math.round(scorePercentage)}%)
              </p>
              {scorePercentage >= 70 ? (
                <div className="bg-custom-success p-4 rounded-lg mb-6">
                  <p className="text-custom-title font-semibold">
                    Parabéns! Você passou no quiz e pode avançar para o próximo módulo.
                  </p>
                </div>
              ) : (
                <div className="bg-custom-error p-4 rounded-lg mb-6">
                  <p className="text-custom-title font-semibold">
                    Você precisa de pelo menos 70% para passar. Revise o conteúdo e tente novamente.
                  </p>
                </div>
              )}
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={onBack}>
                  Revisar Conteúdo
                </Button>
                <Button onClick={handleFinish} className="bg-custom-primary hover:bg-custom-hover">
                  Continuar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-custom-bg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-custom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-question text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-custom-title mb-2">Quiz: {module.title}</h3>
              <p className="text-custom-text">Teste seus conhecimentos sobre o módulo</p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-custom-title mb-4">
                Pergunta {currentQuestion + 1} de {questions.length}
              </h4>
              <p className="text-custom-text mb-6">{question.question}</p>
              
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <label 
                    key={index}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedAnswer === index 
                        ? showFeedback
                          ? index === question.correct
                            ? 'border-green-500 bg-green-50'
                            : 'border-red-500 bg-red-50'
                          : 'border-custom-primary bg-custom-bg'
                        : 'border-custom-border hover:bg-custom-bg'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="quiz-question" 
                      value={index}
                      checked={selectedAnswer === index}
                      onChange={() => !showFeedback && handleAnswerSelect(index)}
                      className="mr-3"
                      disabled={showFeedback}
                    />
                    <span className="text-custom-text">{option}</span>
                  </label>
                ))}
              </div>

              {showFeedback && question.explanation && (
                <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <p className="text-sm text-custom-text">
                    <strong>{isCorrect ? 'Correto!' : 'Incorreto.'}</strong> {question.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* Quiz Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-custom-text mb-2">
                <span>Progresso do Quiz</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>

            {/* Quiz Actions */}
            <div className="flex justify-between">
              <Button 
                variant="outline"
                onClick={onBack}
                disabled={showFeedback}
              >
                Voltar ao Módulo
              </Button>
              <Button 
                onClick={handleNext}
                disabled={selectedAnswer === null || showFeedback}
                className="bg-custom-primary hover:bg-custom-hover"
              >
                {isLastQuestion ? 'Finalizar' : 'Próxima'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
