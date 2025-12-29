export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    image?: string;
    video?: string; 
    links: {
      demo?: string;
      github?: string;
      video?: string;
    };
    details: { 
      tagline: string;
      problem: string;
      solution: string;
      features: Array<{ title: string; desc: string }>;
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