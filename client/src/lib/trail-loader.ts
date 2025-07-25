// Import JSON files
import trailsData from "@/data/trails.json";
import digitalSelfDefenseData from "@/data/digital-self-defense.json";
import scamsAndTrapsData from "@/data/scams-and-traps.json";
import exampleFlexibleTrailData from "@/data/example-flexible-trail.json";

export interface Trail {
  id: string;
  title: string;
  description: string;
  duration: string;
  moduleCount: number;
  difficulty: string;
  image: string;
}

export interface TextSection {
  type: 'text';
  content: string;
}

export interface ImageSection {
  type: 'image';
  content: string;
  alt?: string;
  caption?: string;
}

export interface HeadingSection {
  type: 'heading';
  content: string;
}

export interface ListSection {
  type: 'list';
  items: string[];
}

export type ContentSection = TextSection | ImageSection | HeadingSection | ListSection;

export interface Module {
  id: number;
  title: string;
  description: string;
  readingTime: string;
  quizTime: string;
  content: string; // Legacy support
  sections?: ContentSection[]; // New flexible format
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export interface TrailContent {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  image: string;
  modules: Module[];
}

const trailContentMap: Record<string, TrailContent> = {
  "digital-self-defense": digitalSelfDefenseData,
  "scams-and-traps": scamsAndTrapsData,
  "example-flexible-trail": exampleFlexibleTrailData,
};

export async function loadTrails(): Promise<Trail[]> {
  // Simulate network delay for realistic loading
  await new Promise(resolve => setTimeout(resolve, 500));
  return trailsData;
}

export async function loadTrailContent(trailId: string): Promise<TrailContent | null> {
  // Simulate network delay for realistic loading
  await new Promise(resolve => setTimeout(resolve, 800));
  return trailContentMap[trailId] || null;
}
