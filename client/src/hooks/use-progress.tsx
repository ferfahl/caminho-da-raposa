import { useState, useEffect } from "react";

interface Progress {
  completedModules: number[];
  lastAccessed: string;
}

export function useProgress(trailId: string) {
  const [progress, setProgress] = useState<Progress>({
    completedModules: [],
    lastAccessed: new Date().toISOString(),
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress_${trailId}`);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, [trailId]);

  const updateProgress = (moduleId: number, completed: boolean) => {
    setProgress(prev => {
      const newProgress = {
        ...prev,
        completedModules: completed 
          ? Array.from(new Set([...prev.completedModules, moduleId]))
          : prev.completedModules.filter(id => id !== moduleId),
        lastAccessed: new Date().toISOString(),
      };
      
      localStorage.setItem(`progress_${trailId}`, JSON.stringify(newProgress));
      return newProgress;
    });
  };

  const resetProgress = () => {
    const newProgress: Progress = {
      completedModules: [],
      lastAccessed: new Date().toISOString(),
    };
    setProgress(newProgress);
    localStorage.setItem(`progress_${trailId}`, JSON.stringify(newProgress));
  };

  return {
    progress,
    updateProgress,
    resetProgress,
  };
}
