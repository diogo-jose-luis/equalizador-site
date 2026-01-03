export type CourseModuleLesson = {
  title: string;
  bullets: string[];
};

export type CourseModule = {
  code: string;          // "01", "02"...
  title: string;         // "Fundamentos de Networking..."
  summary?: string;      // opcional
  lessons?: CourseModuleLesson[]; // opcional (detalhe por tópicos)
};

export type CourseAssessment = {
  exams?: string[];
  accreditation?: string[];
};

export type Course = {
  // identidade / rotas
  id: string;
  slug: string;

  // catálogo
  title: string;
  shortTitle?: string;
  category: string;
  durationHours: number;
  durationLabel?: string; // se quiseres manter "• 40h"
  image: string;
  image2: string;
  image3: string;
  price?: string;

  // métricas (catálogo)
  students?: number;
  lessonsCount?: number;
  rating?: number; // 0..5

  // detalhe (single page)
  targetAudience: string;
  prerequisites: string[];
  objectives: string[];
  modules: CourseModule[];

  assessment?: CourseAssessment;

  // SEO/extra (opcional)
  description?: string;
  file_url?: string;
  tags?: string[];
};
