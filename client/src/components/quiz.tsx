import { useState, useRef, useEffect } from "react";
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

  // progress only counts correct answers
  const correctCountSoFar = answers.filter((ans, idx) => ans === questions[idx].correct).length;
  const progressPercentage = (correctCountSoFar / questions.length) * 100;
  const isCorrect = selectedAnswer === question.correct;

  // auto-advance timer ref
  const autoAdvanceTimer = useRef<number | null>(null);

  // auto-advance 7s after correct feedback
  useEffect(() => {
    if (showFeedback && isCorrect) {
      autoAdvanceTimer.current = window.setTimeout(() => {
        handleContinue();
      }, 7000);
    }
    return () => {
      if (autoAdvanceTimer.current) {
        clearTimeout(autoAdvanceTimer.current);
        autoAdvanceTimer.current = null;
      }
    };
  }, [showFeedback, isCorrect]);

  // show feedback after 1s
  const handleNext = () => {
    if (selectedAnswer === null) return;
    setTimeout(() => setShowFeedback(true), 1000);
  };

  // record correct answer and go on
  const handleContinue = () => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }
    setAnswers((prev) => [...prev, selectedAnswer!]);
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentQuestion((q) => q + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  // record wrong answer and go on
  const handleForceContinue = () => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }
    setAnswers((prev) => [...prev, selectedAnswer!]);
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentQuestion((q) => q + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  // retry same question
  const handleRetry = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  // finish and report %
  const handleFinish = () => {
    const finalCorrect = answers.filter((ans, i) => ans === questions[i].correct).length;
    const pct = (finalCorrect / questions.length) * 100;
    onComplete(pct);
  };

  // restart entire quiz
  const handleRestart = () => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowFeedback(false);
    setShowResult(false);
  };

  // --- RESULT SCREEN ---
  if (showResult) {
    // count only correct answers here, too
    const finalCorrect = answers.filter((ans, i) => ans === questions[i].correct).length;
    const pct = (finalCorrect / questions.length) * 100;

    return (
      <section className="py-16 bg-custom-bg">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardContent className="p-8 text-center">
              <div
                className={`w-16 h-16 ${
                  pct >= 70 ? "bg-custom-success" : "bg-custom-error"
                } rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <i
                  className={`fas ${
                    pct >= 70 ? "fa-check" : "fa-times"
                  } text-white text-xl`}
                />
              </div>
              <h3 className="text-2xl font-bold text-custom-title mb-4">
                Quiz Concluído!
              </h3>
              <p className="text-lg text-custom-text mb-6">
                Você acertou {finalCorrect} de {questions.length} questões (
                {Math.round(pct)}%)
              </p>
              {pct >= 70 ? (
                <div className="bg-custom-success p-4 rounded-lg mb-6">
                  <p className="text-custom-title font-semibold">
                    Parabéns! Você passou no quiz e pode avançar para o próximo
                    módulo.
                  </p>
                </div>
              ) : (
                <div className="bg-custom-error p-4 rounded-lg mb-6">
                  <p className="text-custom-title font-semibold">
                    Você precisa de pelo menos 70% para passar. Revise o
                    conteúdo e tente novamente.
                  </p>
                </div>
              )}
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={onBack}>
                  Revisar Conteúdo
                </Button>
                <Button
                  onClick={handleFinish}
                  className="bg-custom-primary hover:bg-custom-hover"
                >
                  Continuar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // --- QUIZ SCREEN ---
  return (
    <section className="py-16 bg-custom-bg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-custom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-question text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-custom-title mb-2">
                Quiz: {module.title}
              </h3>
              <p className="text-custom-text">
                Teste seus conhecimentos sobre o módulo
              </p>
            </div>

            {/* Question & Options */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-custom-title mb-4">
                Pergunta {currentQuestion + 1} de {questions.length}
              </h4>
              <p className="text-custom-text mb-6">{question.question}</p>

              <div className="space-y-3">
                {question.options.map((opt, idx) => (
                  <label
                    key={idx}
                    className={`flex items-center p-4 border rounded-lg transition-colors ${
                      selectedAnswer === idx
                        ? showFeedback
                          ? idx === question.correct
                            ? "border-green-500 bg-green-50"
                            : "border-red-500 bg-red-50"
                          : "border-custom-primary bg-custom-bg"
                        : "border-custom-border hover:bg-custom-bg"
                    }`}
                  >
                    <input
                      type="radio"
                      name="quiz-question"
                      checked={selectedAnswer === idx}
                      onChange={() =>
                        !showFeedback && setSelectedAnswer(idx)
                      }
                      disabled={showFeedback}
                      className="mr-3"
                    />
                    <span className="text-custom-text">{opt}</span>
                  </label>
                ))}
              </div>

              {/* Feedback */}
              {showFeedback && question.explanation && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    isCorrect
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <p className="text-sm text-custom-text">
                    <strong>
                      {isCorrect ? "Correto!" : "Incorreto."}
                    </strong>{" "}
                    {question.explanation}
                  </p>
                  <div className="mt-4 flex gap-2 justify-end">
                    {!isCorrect && (
                      <Button onClick={handleRetry} variant="outline">
                        Tentar novamente
                      </Button>
                    )}
                    <Button
                      onClick={isCorrect ? handleContinue : handleForceContinue}
                      className="bg-custom-primary hover:bg-custom-hover"
                    >
                      {isLastQuestion ? "Finalizar" : "Próxima"}
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-custom-text mb-2">
                <span>Progresso do Quiz</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>

            {/* Bottom Actions */}
            {!showFeedback && (
              <div className="flex justify-between">
                <Button variant="outline" onClick={onBack}>
                  Voltar ao Módulo
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                  className="bg-custom-primary hover:bg-custom-hover"
                >
                  Confirmar
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
