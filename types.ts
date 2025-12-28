// types.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    links: {
      demo?: string;
      github?: string;
      video?: string;
    };
  }
  
  export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
  }
  
  export interface ResearchPaper {
    id: string;
    title: string;
    venue: string;
    summary: string;
    date: string;
    url: string;
    tags: string[];
  }