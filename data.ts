import {
  Experience,
  SkillCategory,
  Certification,
  Education,
  Project,
} from "./types";

export const PERSONAL_INFO = {
  name: "Dharshan Kesavan Potti",
  title: "Lead .NET Developer",
  visa: "H1B – i140 Approved",
  email: "kesavanpotti.dharshan@gmail.com",
  summary:
    "Professional Software Developer with over 13 years of extensive experience in all phases of the Software Development Life Cycle (SDLC). Expert in designing, developing, and deploying enterprise-grade web applications using Microsoft technologies, Cloud-native architectures (Azure/Kubernetes), and modern frontend frameworks like React.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: ".NET Ecosystem",
    skills: [
      ".NET 8",
      ".NET Core",
      "ASP.NET MVC",
      "Web API",
      "C#",
      "Entity Framework",
      "WCF",
      "WPF",
      "LINQ",
      "ADO.NET",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Azure",
      "Kubernetes (AKS)",
      "Docker",
      "Helm",
      "Azure Service Bus",
      "CI/CD",
      "GitHub Actions",
      "Azure DevOps",
      "Azure Monitor",
      "Microservices",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React v19",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "RxJS",
      "Blazor",
      "Kendo UI",
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      "SQL Server",
      "Azure SQL",
      "PostgreSQL",
      "Oracle",
      "MongoDB",
      "GIT",
      "TFS",
      "SSIS",
      "Jira",
      "Swagger/OpenAPI",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "azure-migrator",
    title: "Enterprise Cloud Migrator",
    description:
      "Architected a toolkit for migrating legacy on-premise .NET Framework applications to Azure App Services and Functions. Reduced manual migration assessment time by 40%.",
    technologies: ["C#", "Azure SDK", ".NET 8", "Azure DevOps"],
    githubUrl: "https://github.com",
    icon: "cloud",
  },
  {
    id: "micro-hub",
    title: "Microservices Blueprint",
    description:
      "A standardized reference architecture for high-scale microservices using AKS, Azure Service Bus, and Key Vault with managed identities.",
    technologies: ["AKS", "Terraform", "Docker", "Helm"],
    liveUrl: "https://example.com",
    icon: "layers",
  },
  {
    id: "fin-dashboard",
    title: "Real-time Fin Dashboard",
    description:
      "High-performance React dashboard displaying real-time financial metrics for wealth management advisors, using WebSocket integration.",
    technologies: ["React", "TypeScript", "RxJS", "SignalR"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    icon: "code",
  },
  {
    id: "cicd-engine",
    title: "DevOps Automation Engine",
    description:
      "Centralized GitHub Actions workflow templates for enterprise-wide usage, enforcing security scans and automated deployment patterns.",
    technologies: ["GitHub Actions", "Shell", "Azure CLI"],
    githubUrl: "https://github.com",
    icon: "cpu",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "usb",
    company: "US Bank",
    location: "Brookfield, Wisconsin, USA",
    role: "Lead .Net Developer",
    period: "Oct 2025 – Till Date",
    responsibilities: [
      "Led end-to-end design and delivery of cloud-ready enterprise web applications using .NET 8 / ASP.NET Core, C#, and React.",
      "Architected and delivered scalable enterprise web platforms using React 19 and high-performance RESTful APIs.",
      "Designed cloud-native microservices architectures deployed on Azure Kubernetes Service (AKS) using Docker and Helm.",
      "Modernized legacy IaaS workloads to Azure PaaS, migrating applications to Azure App Service and Azure Functions.",
      "Implemented enterprise security and identity solutions using Microsoft Entra ID (Azure AD) and JWT-based authentication.",
    ],
    technologies: [
      "C#",
      ".Net 8",
      "Azure",
      "React",
      "AKS",
      "Docker",
      "Microservices",
    ],
  },
  {
    id: "nm-us",
    company: "Northwestern Mutual",
    location: "Milwaukee, Wisconsin, USA",
    role: "Lead .Net Developer",
    period: "Sep 2021 – Sep 2025",
    responsibilities: [
      "Led architecture of scalable enterprise web applications using ASP.NET Core (.NET 8) and React 19.",
      "Automated CI/CD pipelines using Azure DevOps and GitHub Actions, reducing release cycle time.",
      "Optimized relational data solutions on Azure Database for PostgreSQL, implementing indexing strategies and query tuning.",
      "Directed Agile delivery processes (Scrum/Kanban), ensuring alignment with stakeholders and predictable delivery velocity.",
      "Developed responsive UI components with React, delivering pixel-perfect UX across mobile and desktop platforms.",
    ],
    technologies: [
      "ASP.NET Core",
      "React",
      "Azure DevOps",
      "PostgreSQL",
      "GitHub Actions",
    ],
  },
  {
    id: "nm-in",
    company: "Northwestern Mutual",
    location: "Bangalore, India",
    role: "Lead .Net Developer",
    period: "Oct 2019 – Aug 2021",
    responsibilities: [
      "Collaborated with business stakeholders to gather requirements and author Technical Design Documents (TDD).",
      "Led front-end development of dynamic web portals using HTML5, CSS3, TypeScript, and RxJS.",
      "Engineered RESTful and SOAP-based services using ASP.NET Core and C#.",
      "Integrated .NET Core services with Azure Event Grid and Azure Service Bus for event-driven architecture.",
    ],
    technologies: ["TypeScript", "RxJS", "ASP.NET Core", "Azure Service Bus"],
  },
  {
    id: "st",
    company: "SunTrust Bank",
    location: "Mysore, India",
    role: "Senior .Net Developer",
    period: "Oct 2014 – Sep 2019",
    responsibilities: [
      "Major role in development of web applications using ASP.NET MVC 5.0, C#, and React.",
      "Managed and maintained Kubernetes clusters, ensuring high availability and fault tolerance.",
      "Developed WCF Services to expose functionality to web users through SOAP and WSDL.",
      "Created SSIS DTS Packages to import data from Flat Files into SQL Server Databases.",
    ],
    technologies: ["ASP.NET MVC 5", "SQL Server", "WCF", "SSIS", "React"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    number: "AI-900",
    year: "2026",
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    number: "AZ-204",
    year: "2026",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    number: "AZ-900",
    year: "2021",
  },
  {
    name: "Microsoft Certified: Programming in HTML5 with JavaScript and CSS3",
    number: "70-480",
    year: "2013",
  },
];

export const EDUCATION: Education = {
  university: "Vinayaka Missions University",
  location: "Salem, India",
  year: "2008 – 2012",
  course: "Bachelor of Engineering – Computer Science",
};
