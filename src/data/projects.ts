export type ProjectStatus = "live" | "dev" | "proto";
export type Category = "education" | "ai" | "ecommerce" | "business" | "cloud";

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "education", label: "Education" },
  { id: "ai", label: "AI & ML" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "business", label: "Business Applications" },
  { id: "cloud", label: "Cloud & DevOps" },
];

export const categoryLabel: Record<Category, string> = {
  education: "Education Technology",
  ai: "AI & Machine Learning",
  ecommerce: "E-commerce",
  business: "Business Application",
  cloud: "Cloud & DevOps",
};

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  dev: "Development Work",
  proto: "Prototype",
};

export interface ArchLayer {
  label: string;
  nodes: { name: string; sub?: string; accent?: boolean }[];
  conn?: string; // connector label shown below this layer
}

export interface Project {
  slug: string;
  name: string;
  category: Category;
  status: ProjectStatus;
  statusNote?: string;
  liveUrl?: string;
  tagline: string;         // one-liner for cards
  overview: string;        // case study lead
  problem: string;
  contribution: string[];  // my actual contribution bullets
  frontend: string[];
  backend: string[];
  data: string[];          // database & integrations
  features: string[];
  challenges: string[];
  stack: string[];         // compact chips for cards
  shots: { src: string; caption: string }[];
  arch?: ArchLayer[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "infy-voice-tutor",
    name: "Infy — AI Voice Tutor",
    category: "ai",
    status: "live",
    liveUrl: "https://infy-voice.onrender.com/",
    tagline:
      "A real-time bilingual voice tutor — students talk to it in Hindi or English, interrupt it mid-sentence, and get answers grounded in their textbook chapter.",
    overview:
      "Infy is a voice-first AI tutor built for the Varad Learn education platform. A student opens a chapter, taps the mic, and asks questions naturally — in English or Hindi. The tutor retrieves relevant passages from the chapter, answers with citations, and can be paused, stopped, or interrupted by voice alone.",
    problem:
      "Young learners struggle to type precise questions, and generic chatbots answer from the whole internet instead of the chapter in front of the student. Infy needed to feel like a patient tutor sitting beside the student: hands-free, bilingual, interruptible, and strictly grounded in the current chapter.",
    contribution: [
      "Designed the voice pipeline architecture — browser speech capture, WebSocket transport, retrieval, LLM streaming, and sentence-level TTS playback.",
      "Built the FastAPI backend with a WebSocket tutor endpoint (/ws/tutor) plus a provider-agnostic LLM layer supporting local GGUF models, Ollama, and Gemini.",
      "Implemented chapter-context RAG using SQLite FTS5 retrieval over page blocks and curated Q&A — answers cite sources and abstain when the chapter doesn't cover a question.",
      "Built the deterministic voice-command layer shared between backend and frontend — 'Infy start/stop/repeat', 'Infy Hindi/English', 'quiz me' — including Devanagari command forms.",
      "Implemented interruption handling (barge-in), pause/resume/stop controls, and per-sentence audio streaming for low perceived latency.",
      "Added latency instrumentation — /api/metrics reports first-token and first-audio p50/p95 for performance tuning.",
    ],
    frontend: ["React", "Vite", "TypeScript", "Web Speech API (STT)", "Browser TTS"],
    backend: ["Python", "FastAPI", "WebSockets", "llama.cpp / Ollama / Gemini providers", "edge-tts"],
    data: ["SQLite (FTS5 full-text retrieval)", "Chapter content store (varad.db)", "Gemini Live API (optional realtime path)"],
    features: [
      "Real-time voice Q&A in Hindi and English",
      "Wake-word voice commands: start, stop, repeat, switch language, quiz me",
      "Chapter-grounded answers with source citations (RAG)",
      "Talk-over interruption and pause/resume/stop",
      "Sentence-level audio streaming for fast first response",
      "Latency metrics endpoint (first-token / first-audio p50-p95)",
    ],
    challenges: [
      "Keeping answers strictly grounded in chapter content — solved with FTS5 retrieval over page blocks rather than prompt-stuffing, with honest abstention on uncovered questions.",
      "Real-time feel on CPU-only hardware — addressed by streaming LLM output sentence-by-sentence to TTS instead of waiting for the full answer.",
      "Reliable voice commands despite imperfect speech recognition — a deterministic command matcher that tolerates dropped wake-words and accepts Devanagari forms.",
    ],
    stack: ["Python", "FastAPI", "WebSockets", "React", "TypeScript", "SQLite FTS5", "Gemini API", "RAG"],
    shots: [
      { src: "/assets/screenshots/infy-home.png", caption: "Chapter view with voice controls — mic, type-a-question, EN/हिं toggle" },
      { src: "/assets/screenshots/infy-scroll.png", caption: "Voice tutor session inside a Grade 8 Science chapter" },
    ],
    arch: [
      {
        label: "Client",
        nodes: [
          { name: "React + TypeScript UI", sub: "chapter view, mic controls" },
          { name: "Web Speech API", sub: "STT en-IN / hi-IN" },
          { name: "Audio playback", sub: "per-sentence mp3 frames" },
        ],
        conn: "transcripts · WebSocket /ws/tutor",
      },
      {
        label: "Backend",
        nodes: [
          { name: "FastAPI tutor service", sub: "session + turn handling", accent: true },
          { name: "Command layer", sub: "start · stop · repeat · language" },
          { name: "FTS5 retrieval (RAG)", sub: "chapter blocks + curated Q&A", accent: true },
          { name: "LLM providers", sub: "llamacpp · ollama · gemini" },
          { name: "TTS", sub: "edge-tts · browser" },
        ],
        conn: "mp3 sentence frames + text",
      },
      {
        label: "Data",
        nodes: [{ name: "SQLite — varad.db", sub: "chapter content + FTS5 index" }],
      },
    ],
    featured: true,
  },
  {
    slug: "varad-learn",
    name: "Varad Learn",
    category: "education",
    status: "live",
    liveUrl: "https://varad-web.onrender.com/",
    tagline:
      "A K-12 learning platform for classes 6–12 — chapter content, quizzes, flashcards, fun facts, and the Infy voice tutor built in.",
    overview:
      "Varad Learn is a student-facing learning platform covering classes 6–12. It organizes content chapter-wise — reading pages, key points, Q&A, quizzes, flashcards and fun facts — and integrates the Infy AI voice tutor so students can ask questions about what they're reading. It also ships as a desktop app via Electron.",
    problem:
      "School content is scattered across PDFs, books and notes. Varad Learn brings the full class 6–12 journey into one experience: structured chapters to read, ways to practice, and a tutor a student can simply talk to.",
    contribution: [
      "Built the React + Vite + TypeScript frontend — home dashboard, chapter reader, quizzes, flashcards, fun facts, and parent views.",
      "Integrated the Infy AI voice tutor into the chapter reading experience.",
      "Worked on the Python backend serving chapter content, quizzes and voice tutoring.",
      "Integrated Electron for a desktop application build of the platform.",
      "Deployed the application to Render.",
    ],
    frontend: ["React", "Vite", "TypeScript", "Electron (desktop build)"],
    backend: ["Python", "FastAPI", "REST APIs", "WebSocket (voice tutor)"],
    data: ["Chapter content store", "Quiz & flashcard data", "AI tutor integration"],
    features: [
      "Class 6–12 chapter-wise learning content",
      "Chapter reader with key points, Q&A and fun facts",
      "Quizzes and flashcards for practice",
      "Infy AI voice tutor integration (voice Q&A in Hindi & English)",
      "Learning progress tracking",
      "Desktop application via Electron",
    ],
    challenges: [
      "Structuring a large volume of class-wise content into a consistent chapter model that powers reading, quizzing and flashcards.",
      "Embedding a real-time voice tutor inside the reading flow without breaking the learning experience.",
    ],
    stack: ["React", "TypeScript", "Vite", "Python", "FastAPI", "Electron"],
    shots: [
      { src: "/assets/screenshots/varad-home.png", caption: "Student dashboard — continue learning, study picks, practice" },
      { src: "/assets/screenshots/varad-scroll.png", caption: "Chapter-wise study cards and practice modes" },
    ],
    featured: true,
  },
  {
    slug: "ncrt",
    name: "NCRT",
    category: "education",
    status: "live",
    liveUrl: "https://ncrt-web.onrender.com/",
    tagline:
      "An NCERT learning platform covering classes 6–12 — class-wise books, chapter notes, quizzes and progress tracking for school students.",
    overview:
      "NCRT is an educational web platform that organizes NCERT content for classes 6–12. Students pick a class, browse subjects, read chapters with notes, practice with quizzes and flashcards, and track learning progress — all in a clean, student-friendly interface.",
    problem:
      "NCERT material is freely available but not easy to navigate for a 12-year-old. NCRT turns it into a guided, trackable learning experience organized by class and subject.",
    contribution: [
      "Developed the student-facing frontend — class and subject browsing, chapter reading, quizzes, flashcards and notes.",
      "Built the learning-progress experience (goals, recently added chapters, continue learning).",
      "Handled frontend deployment to Render.",
    ],
    frontend: ["React", "Vite", "TypeScript"],
    backend: ["REST API integration", "Content service"],
    data: ["NCERT chapter content", "Class & subject catalog"],
    features: [
      "Class 6–12 browsing with chapter counts",
      "Subject-wise exploration (Science, Maths, Hindi, English, Sanskrit, Social)",
      "Chapter reading with PDF-derived notes",
      "Quizzes, flashcards and an 'Ask a Tutor' entry point",
      "My Learning progress and goals",
    ],
    challenges: [
      "Presenting hundreds of chapters across 7 classes in a browsable, non-overwhelming layout.",
    ],
    stack: ["React", "TypeScript", "Vite", "REST APIs"],
    shots: [
      { src: "/assets/screenshots/ncrt-home.png", caption: "Home — class picker, subjects and learning progress" },
      { src: "/assets/screenshots/ncrt-scroll.png", caption: "Class and subject exploration" },
    ],
    featured: true,
  },
  {
    slug: "nishify",
    name: "Nishify / Pioneer Wholesale",
    category: "ecommerce",
    status: "live",
    liveUrl: "https://nishify-web.onrender.com/",
    tagline:
      "A full-stack commerce and learning platform — Next.js/React frontend, FastAPI backend, authentication with role-based access, and organization management.",
    overview:
      "Nishify is a full-stack web application built around a Next.js/React frontend and a Python FastAPI backend. The work spans API development, authentication and role-based access control, organization and user management, database integration, and developer services including desktop integration.",
    problem:
      "The platform needed a secure multi-user foundation — organizations, members, roles and permissions — on top of which product features could be built, along with developer-facing services and a desktop footprint.",
    contribution: [
      "Backend API development with Python and FastAPI — REST endpoints for core entities and workflows.",
      "Authentication and role-based access control — organization, user and role management.",
      "Database integration and entity modeling.",
      "Frontend development with Next.js/React.",
      "Developer services and desktop integration work.",
    ],
    frontend: ["Next.js", "React", "TypeScript"],
    backend: ["Python", "FastAPI", "REST APIs", "Auth & RBAC"],
    data: ["PostgreSQL", "Organization & role management"],
    features: [
      "Authentication with role-based access control",
      "Organization and user management",
      "Course/learning content delivery (deployed build)",
      "Developer services & desktop integration",
      "Deployed on Render",
    ],
    challenges: [
      "Designing organization-scoped access so users, roles and data stay cleanly separated.",
      "Keeping the FastAPI backend and Next.js frontend contract consistent across features.",
    ],
    stack: ["Next.js", "React", "Python", "FastAPI", "PostgreSQL", "RBAC"],
    shots: [
      { src: "/assets/screenshots/nishify-home.png", caption: "Live deployment — learning paths home" },
      { src: "/assets/screenshots/nishify-scroll.png", caption: "Catalog of learning paths" },
    ],
    featured: true,
  },
  {
    slug: "mobi",
    name: "MOBI — Mobile Shop Management",
    category: "business",
    status: "live",
    liveUrl: "https://mobi-web.onrender.com/",
    tagline:
      "A retail management system for mobile shops — inventory, POS billing, purchases, suppliers, customers and reports in one place.",
    overview:
      "MOBI is a shop-management system built for mobile phone retailers. It covers the full retail loop: product and accessory inventory, IMEI-level tracking, purchases from suppliers, POS billing with GST, customer records, and sales/profit reports — behind Google sign-in.",
    problem:
      "Small mobile shops juggle stock, IMEI numbers, suppliers and billing across notebooks and spreadsheets. MOBI centralizes it: what's in stock, what was bought from whom, what was sold to whom, and whether the business is making money.",
    contribution: [
      "Built the React frontend — dashboard, POS billing, inventory, purchases, customers, suppliers and reports screens.",
      "Built the Python FastAPI backend with a JSON-based entity architecture.",
      "Implemented authentication configuration (Google sign-in) and deployment setup.",
      "Designed the domain model — products, variants, IMEI tracking, purchases, sales and reports.",
    ],
    frontend: ["React", "TypeScript", "Chart views for sales reports"],
    backend: ["Python", "FastAPI", "REST APIs", "JSON-based entity architecture"],
    data: ["JSON entity store", "Google OAuth", "GST billing model"],
    features: [
      "POS billing with cart, discounts and GST invoice generation",
      "Inventory with categories, brands, low-stock and IMEI tracking",
      "Purchase entries and supplier management",
      "Customer records with purchase history",
      "Sales, purchases, profit & loss and top-product reports",
      "Google sign-in authentication",
    ],
    challenges: [
      "Modeling retail entities (variants, IMEIs, purchases, bills) in a flexible JSON-based architecture without losing reporting ability.",
      "Designing a POS flow fast enough for counter billing — quick add, discounts, payment modes, invoice in one screen.",
    ],
    stack: ["React", "TypeScript", "Python", "FastAPI", "Google OAuth"],
    shots: [
      { src: "/assets/screenshots/mobi-home.png", caption: "Live app — sign-in and product pitch" },
      { src: "/assets/mobi-dashboard.png", caption: "MOBI product UI — dashboard, POS billing, inventory, customers, reports" },
      { src: "/assets/mobi-mobile-flow.jpeg", caption: "Mobile flow — AI-assisted product add by photo or link" },
    ],
    featured: true,
  },
  {
    slug: "skillom",
    name: "SkillOM.ai",
    category: "ai",
    status: "dev",
    statusNote: "Project delivered — domain currently unreachable",
    liveUrl: "https://www.skillom.ai/",
    tagline:
      "An AI-powered skill assessment and job-readiness platform — FastAPI backend, PostgreSQL, and LLM-driven evaluation workflows.",
    overview:
      "SkillOM.ai is an AI-powered platform for skill assessment and job-readiness analysis. I built backend services with FastAPI — APIs for user management, skill evaluation and AI-based recommendations — backed by PostgreSQL and integrated LLM workflows that analyze user input and produce structured evaluations.",
    problem:
      "Job-seekers don't know which skills they're actually missing. SkillOM assesses a user's capabilities, evaluates answers with AI, and produces structured feedback on job readiness.",
    contribution: [
      "Architected and developed the backend system with FastAPI — APIs for student management, assessments and analytics.",
      "Designed the PostgreSQL schema with indexing and query optimization.",
      "Implemented authentication and role-based access control.",
      "Integrated AI/LLM-based evaluation workflows that generate structured outputs from user responses.",
      "Containerized the application with Docker and prepared Heroku deployment.",
    ],
    frontend: ["Web frontend (integrated)"],
    backend: ["Python", "FastAPI", "REST APIs", "AI/LLM evaluation workflows"],
    data: ["PostgreSQL", "Docker", "Heroku (deployment target)"],
    features: [
      "Skill assessment and evaluation APIs",
      "AI/LLM-powered analysis of user responses",
      "Job-readiness scoring and recommendations",
      "User management with RBAC",
      "Structured logging, validation and error handling",
    ],
    challenges: [
      "Turning free-form user answers into structured, consistent evaluation output using LLMs.",
      "Keeping API response times fast while running AI evaluation in the request path.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "AI/LLM", "Docker"],
    shots: [],
    featured: true,
  },
  {
    slug: "auradocs",
    name: "AuraDocs",
    category: "education",
    status: "dev",
    tagline:
      "A documentation and programming-learning portal with an interactive code playground, quizzes, and a gamified CodeAdventure module.",
    overview:
      "AuraDocs is a documentation and learning portal for programming topics. It combines reading material with a Monaco-powered code playground, quizzes, and CodeAdventure — a gamified learning module.",
    problem:
      "Reading documentation is passive. AuraDocs makes it active: read a concept, try it in the embedded editor, then test yourself.",
    contribution: [
      "Built the React + Vite frontend for the documentation portal.",
      "Integrated the Monaco editor for an interactive in-browser code playground.",
      "Implemented quizzes and the CodeAdventure learning module.",
    ],
    frontend: ["React", "Vite", "Monaco Editor", "TypeScript"],
    backend: ["Static content & client-side evaluation"],
    data: ["Documentation content"],
    features: [
      "Programming documentation portal",
      "Monaco-based interactive code playground",
      "Quizzes for each topic",
      "CodeAdventure gamified learning module",
    ],
    challenges: [
      "Embedding a full editor experience (Monaco) into a documentation reading flow.",
    ],
    stack: ["React", "Vite", "Monaco", "TypeScript"],
    shots: [],
  },
  {
    slug: "pioneer-fresh",
    name: "Pioneer Fresh",
    category: "ecommerce",
    status: "dev",
    tagline:
      "An AI-driven e-commerce and wholesale product platform — Django backend, web-scraped product data, PostgreSQL, and recommendation concepts.",
    overview:
      "Pioneer Fresh is an e-commerce platform for product management and ordering, with a data side: Python scrapers collect product information from external sources into PostgreSQL, where it's processed for analytics and ML-based recommendations.",
    problem:
      "A wholesale product platform needs a large, current product catalog. Rather than manual entry, Pioneer Fresh collects product data by scraping and feeds it into search, analytics and recommendation features.",
    contribution: [
      "Built the Django backend — product management, user interactions and order processing.",
      "Developed web scraping modules (BeautifulSoup, Scrapy) collecting product data from multiple sources.",
      "Designed the PostgreSQL schema and managed it via pgAdmin.",
      "Worked on product search, analytics and recommendation concepts built on the collected data.",
    ],
    frontend: ["Django templates / web frontend"],
    backend: ["Python", "Django", "BeautifulSoup", "Scrapy", "REST APIs"],
    data: ["PostgreSQL", "pgAdmin", "Scraped product datasets"],
    features: [
      "Product catalog and order management",
      "Automated product data collection via web scraping",
      "Analytics over collected product data",
      "ML-based product recommendation concepts",
      "Product search",
    ],
    challenges: [
      "Normalizing scraped data from heterogeneous sources into one consistent product schema.",
      "Designing the schema to serve both transactional (orders) and analytical (recommendations) workloads.",
    ],
    stack: ["Python", "Django", "Scrapy", "BeautifulSoup", "PostgreSQL"],
    shots: [],
  },
  {
    slug: "smartvision",
    name: "SmartVision",
    category: "ai",
    status: "dev",
    tagline:
      "A deep-learning image classification system — CNN models trained with TensorFlow/PyTorch and served through FastAPI inference APIs.",
    overview:
      "SmartVision is a deep-learning image classification system covering the full pipeline: dataset preprocessing and augmentation, CNN model training and evaluation, and serving predictions through FastAPI inference endpoints. Applied to medical X-ray image prediction, the same pipeline extends to retail product recognition and quality inspection.",
    problem:
      "Image classification work usually stops at a notebook. SmartVision carries it through to a deployed model behind an API that other applications can call — upload an image, get a prediction.",
    contribution: [
      "Built the ML pipeline — image preprocessing and augmentation with ImageDataGenerator, CNN model training in TensorFlow and PyTorch.",
      "Evaluated models with Scikit-learn metrics and Matplotlib visualizations.",
      "Developed FastAPI inference endpoints for real-time prediction (upload image → prediction).",
      "Worked on the medical X-ray image classification use case.",
    ],
    frontend: ["API-first (consumable by any client)"],
    backend: ["Python", "FastAPI", "TensorFlow", "PyTorch", "Scikit-learn"],
    data: ["Image datasets", "Matplotlib evaluation reports"],
    features: [
      "CNN-based image classification",
      "Medical X-ray image prediction",
      "Image preprocessing & augmentation pipeline",
      "FastAPI inference endpoints",
      "Model evaluation metrics & plots",
    ],
    challenges: [
      "Getting consistent preprocessing between training (ImageDataGenerator) and inference so predictions match validation behaviour.",
      "Serving model inference inside a lightweight FastAPI service.",
    ],
    stack: ["Python", "TensorFlow", "PyTorch", "FastAPI", "Scikit-learn"],
    shots: [],
  },
  {
    slug: "aws-playground",
    name: "AWS Playground",
    category: "cloud",
    status: "proto",
    tagline:
      "A local AWS experimentation environment — Floci-based emulation behind a provider-abstraction layer that can switch to real AWS.",
    overview:
      "AWS Playground is a local development environment for AWS services. It runs against Floci (a local AWS emulator) behind a provider-abstraction architecture — FlociProvider for local emulation, MockProvider for tests, and RealAWSProvider for actual AWS — so the same code path runs locally and in the cloud.",
    problem:
      "Developing against real AWS is slow, costly, and needs credentials. A local emulator with a clean provider abstraction lets you build and test AWS-integrated features entirely offline, then switch providers for real deployment.",
    contribution: [
      "Designed the provider-abstraction architecture — FlociProvider, MockProvider, RealAWSProvider behind one interface.",
      "Set up the Floci local AWS emulation environment in Docker.",
      "Built experimentation workflows for AWS service behaviour without cloud costs.",
    ],
    frontend: ["CLI / service-level"],
    backend: ["Python", "Provider abstraction (Floci/Mock/RealAWS)"],
    data: ["Floci local AWS emulator", "Docker"],
    features: [
      "Local AWS service emulation with Floci",
      "Swappable providers: local emulator, mock, real AWS",
      "Docker-based cloud development environment",
      "Offline development & testing of AWS-integrated code",
    ],
    challenges: [
      "Keeping behaviour consistent across three providers so code never knows which AWS it's talking to.",
    ],
    stack: ["Python", "Floci", "Docker", "AWS"],
    shots: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
