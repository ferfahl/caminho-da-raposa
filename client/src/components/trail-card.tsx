import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLocation } from "wouter";
import { useProgress } from "@/hooks/use-progress";

interface Trail {
  id: string;
  title: string;
  description: string;
  duration: string;
  moduleCount: number;
  difficulty: string;
  image: string;
}

interface TrailCardProps {
  trail: Trail;
}

export function TrailCard({ trail }: TrailCardProps) {
  const [, setLocation] = useLocation();
  const { progress } = useProgress(trail.id);
  
  const progressPercentage = (progress.completedModules.length / trail.moduleCount) * 100;

  const handleClick = () => {
    setLocation(`/trail/${trail.id}`);
  };

  return (
    <Card 
      className="bg-custom-card border border-custom-border rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
      onClick={handleClick}
    >
      <CardContent className="p-8">
        <div className="flex items-start space-x-4">
          <img 
            src={trail.image} 
            alt={`Fox representing ${trail.title}`} 
            className="w-16 h-16 rounded-full flex-shrink-0 object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-custom-title group-hover:text-custom-primary transition-colors">
                {trail.title}
              </h4>
              <span className="bg-custom-highlight text-white px-3 py-1 rounded-full text-sm font-medium">
                {trail.moduleCount} Módulos
              </span>
            </div>
            <p className="text-custom-text mb-4 leading-relaxed">
              {trail.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-custom-text">
                  <i className="fas fa-clock mr-1"></i>
                  {trail.duration}
                </span>
                <span className="text-sm text-custom-text">
                  <i className="fas fa-star mr-1"></i>
                  {trail.difficulty}
                </span>
              </div>
              <i className="fas fa-arrow-right text-custom-primary group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-custom-text mb-2">
            <span>Progresso</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}
