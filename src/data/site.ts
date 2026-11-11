export const site = {
  name: "Deepti Shukla",
  title: "Full-Stack Product Developer | Python Backend Engineer | Data & AI/ML Developer",
  shortTitle: "Full-Stack Product Developer",
  location: "New Delhi, India",
  status: "Independent Freelance Developer",
  email: "deeptishukla515@gmail.com",
  phone: "9205340673",
  phoneHref: "+919205340673",
  linkedin: "https://linkedin.com/in/deepti-shukla-8457b5264",
  resume: "/Deepti_Shukla_Resume.pdf",
  photo: "/assets/deepti.png",
  headline: "Building Intelligent Applications, Scalable Backend Systems & AI-Powered Products.",
  intro:
    "I am Deepti Shukla, an independent freelance developer specializing in Python backend engineering, data engineering, AI/ML integration, and full-stack product development.",
  intro2:
    "I enjoy transforming ideas into working software products — from backend architecture and APIs to modern user interfaces, AI integrations, and cloud deployments.",
};

export interface SkillGroup {
  label: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    icon: "⌘",
    skills: ["Python", "JavaScript", "TypeScript", "FastAPI", "Django", "Django REST Framework", "Node.js"],
  },
  {
    label: "Frontend & Desktop",
    icon: "◫",
    skills: ["React", "Next.js", "Vite", "Monaco Editor", "Electron"],
  },
  {
    label: "Data & Databases",
    icon: "◈",
    skills: ["PostgreSQL", "SQL", "Pandas", "NumPy", "ETL Pipelines", "Query Optimization"],
  },
  {
    label: "AI, ML & LLM",
    icon: "✦",
    skills: ["OpenAI API", "Gemini Live API", "LLM Integration", "RAG", "WebSockets", "TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    label: "Cloud & DevOps",
    icon: "▲",
    skills: ["Docker", "AWS (EC2, S3)", "Render", "Heroku", "GitHub Actions", "CI/CD"],
  },
  {
    label: "Tools & Platforms",
    icon: "⚒",
    skills: ["Git", "GitHub", "Bitbucket", "Keycloak", "Swagger / OpenAPI", "Postman", "pgAdmin"],
  },
];

export interface ExperienceItem {
  period: string;
  org: string;
  role: string;
  location?: string;
  points: string[];
  tags: string[];
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    period: "2023 — Present",
    org: "Independent Freelance Developer",
    role: "Full-Stack Product Developer · Python Backend · Data & AI/ML",
    location: "New Delhi, India (Remote)",
    current: true,
    points: [
      "Design and build production software independently across education technology, e-commerce, retail, and AI-driven products.",
      "Backend & API engineering with Python, FastAPI and Django — REST APIs, authentication, role-based access, async processing.",
      "Data engineering — PostgreSQL schema design, ETL workflows, query optimization, reporting pipelines with Pandas.",
      "AI/ML integration — LLM-powered features, RAG over domain content, real-time voice pipelines, ML inference APIs.",
      "End-to-end delivery — React/Next.js frontends, Electron desktop builds, Docker containerization, Render/Heroku/AWS deployment, CI/CD.",
    ],
    tags: ["Python", "FastAPI", "Django", "React", "PostgreSQL", "LLM/RAG", "Docker", "AWS"],
  },
  {
    period: "Oct 2009 — May 2010",
    org: "Symantec",
    role: "Backend Developer",
    location: "Chennai, India",
    points: [
      "Developed backend modules using Java and PHP.",
      "Designed database workflows and optimized SQL queries.",
      "Contributed to backend architecture and performance improvements.",
    ],
    tags: ["Java", "PHP", "SQL"],
  },
];

export const education = [
  { degree: "Master of Computer Applications (MCA)", years: "2006 — 2009" },
  { degree: "Bachelor of Science (B.Sc) — Mathematics", years: "2003 — 2006" },
];

export interface Capability {
  title: string;
  desc: string;
  icon: string; // key into icon map
}

export const capabilities: Capability[] = [
  {
    title: "Backend API Engineering",
    desc: "FastAPI and Django REST services — clean endpoint design, validation, async processing, Swagger/OpenAPI documentation.",
    icon: "api",
  },
  {
    title: "Database Design & Optimization",
    desc: "PostgreSQL schema modeling, indexing, query tuning, and data pipelines built for reporting and production workloads.",
    icon: "db",
  },
  {
    title: "Authentication & RBAC",
    desc: "Keycloak, Google and GitHub OAuth, organization and role management, and permission-aware application flows.",
    icon: "lock",
  },
  {
    title: "AI & LLM Integration",
    desc: "OpenAI and Gemini integrations, structured LLM outputs, evaluation workflows, and AI-assisted product features.",
    icon: "ai",
  },
  {
    title: "RAG & Voice Applications",
    desc: "Chapter-grounded retrieval, real-time voice pipelines over WebSockets, speech transcription and interruption handling.",
    icon: "mic",
  },
  {
    title: "Data Processing & ETL",
    desc: "Pandas/NumPy data processing, web scraping with BeautifulSoup and Scrapy, and automated data pipelines.",
    icon: "etl",
  },
  {
    title: "Docker & Deployment",
    desc: "Containerized services, Render and Heroku deployments, AWS EC2/S3, CI/CD with GitHub Actions.",
    icon: "ship",
  },
  {
    title: "Frontend & Desktop",
    desc: "React/Next.js product interfaces, TypeScript, Monaco-based playgrounds, and Electron desktop integration.",
    icon: "ui",
  },
];
