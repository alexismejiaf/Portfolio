export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  featured: boolean;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "mkt-by-rita",
    title: "MKT by Rita",
    description:
      "Production B2B marketplace connecting small businesses with customers. Business discovery, category/location filtering, collections, events, and role-based access control for customers and owners. Serving real users.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "Serverless"],
    category: "Full-Stack",
    featured: true,
    link: "https://mkt.ritaxyz.com",
  },
  {
    id: "trucklog",
    title: "TruckLog",
    description:
      "Electronic Logging Device (ELD) and route-planning platform for logistics. Trip planning, distance calculation, geocoding, and PDF report generation with a PostgreSQL backend. Production deployment.",
    tech: ["TypeScript", "React", "Python", "Django", "PostgreSQL", "Geopy"],
    category: "Full-Stack",
    featured: true,
    link: "https://github.com/alexismejiaf/TruckLog",
  },
  {
    id: "data-extractor",
    title: "Data Extractor",
    description:
      "Production-grade document extraction engine in C#/.NET 8 using Playwright, HtmlAgilityPack, PdfPig, and Regex. Supports web scraping, OCR, and structured data output.",
    tech: ["C#", ".NET 8", "Playwright", "HtmlAgilityPack", "PdfPig", "OCR"],
    category: "Automation",
    featured: true,
    link: "https://github.com/alexismejiaf/Data-Extractor",
  },
  {
    id: "aws-serverless-chatbot",
    title: "AWS Serverless Chatbot",
    description:
      "Composable chatbot infrastructure on AWS Lambda with API Gateway, DynamoDB, Chatbase, and Twilio for multi-channel conversations.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "Chatbase", "Twilio"],
    category: "Cloud",
    featured: false,
  },
  {
    id: "data-cleaner",
    title: "Data Cleaner",
    description:
      "Python pipeline that extracts and cleans raw data into analysis-ready datasets for Power BI reporting.",
    tech: ["Python", "Pandas", "Power BI"],
    category: "Automation",
    featured: false,
    link: "https://github.com/alexismejiaf/Data-Cleaner",
  },
  {
    id: "ai-tetris-cv",
    title: "AI Tetris with Computer Vision",
    description:
      "Gesture-controlled Tetris using Python and OpenCV with real-time hand tracking to drive gameplay.",
    tech: ["Python", "OpenCV", "Computer Vision"],
    category: "AI & CV",
    featured: false,
  },
  {
    id: "snack-identifier",
    title: "Snack Identifier",
    description:
      "Real-time product classification system using camera input and object recognition over custom datasets.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    category: "AI & CV",
    featured: false,
  },
  {
    id: "bookstall-inventory",
    title: "Bookstall Inventory App",
    description:
      "Full CRUD inventory and sales dashboard for book vendors with real-time sync and a responsive UI.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    category: "Full-Stack",
    featured: false,
  },
  {
    id: "secret-friend",
    title: "Secret-Friend Gift Exchange",
    description:
      "Web app for organizing Secret Santa events with participant management and a random selection algorithm.",
    tech: ["JavaScript", "HTML", "CSS"],
    category: "Web App",
    featured: false,
    link: "https://github.com/alexismejiaf/Secret-Friend",
  },
  {
    id: "mini-c-compiler",
    title: "Mini-C Compiler",
    description:
      "Compiler for a subset of C demonstrating lexical analysis, parsing, and code generation.",
    tech: ["Java", "Lex"],
    category: "Academic",
    featured: false,
    link: "https://github.com/alexismejiaf/Mini-C",
  },
  {
    id: "pokedex-v2",
    title: "Pokédex V2",
    description:
      "Java GUI application for managing Pokémon data with transfer and modification features and an object-oriented design.",
    tech: ["Java", "Swing"],
    category: "Academic",
    featured: false,
    link: "https://github.com/alexismejiaf/Pokedex-V2",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const gridProjects = projects.filter((p) => !p.featured);
export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
