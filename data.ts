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
      "Architected and delivered cloud-native applications using .NET 8, ASP.NET Core, and React, powering scalable REST APIs on Azure.",
      "Built microservices on Azure Kubernetes Service (AKS) with Docker and Helm, improving scalability and deployment consistency.",
      "Modernized legacy ASP.NET applications to .NET 8 and Azure PaaS for simpler management and better scalability.",
      "Implemented secure auth with Microsoft Entra ID, Azure AD B2C, JWT, and RBAC, and event-driven integration via Azure Service Bus.",
      "Drove DDD, CQRS, and Clean Architecture practices with end-to-end observability using OpenTelemetry and Application Insights.",
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
      "Led architecture of cloud-native enterprise applications using .NET 8, ASP.NET Core, and React 19.",
      "Migrated 12 legacy Classic ASP/Web Forms applications to .NET 8 on Azure PaaS, enabling independent deployments.",
      "Built microservices on AKS with event-driven integration via Azure Service Bus, Event Grid, and API Management.",
      "Automated CI/CD with Azure DevOps, Terraform, and GitHub Actions, and added observability with OpenTelemetry and Application Insights.",
      "Mentored engineers and championed DDD, CQRS, Clean Architecture, and Zero Trust security practices.",
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
      "Partnered with stakeholders to translate business requirements into scalable architecture (HLDs/LLDs).",
      "Built cloud-native microservices with .NET Core, Azure Service Bus, and Event Grid on App Service and AKS.",
      "Established CI/CD pipelines with Azure DevOps and GitHub Actions for consistent, reliable releases.",
      "Led front-end development with React, TypeScript, and RxJS, building reusable, integrated UI components.",
      "Optimized Azure SQL performance and mentored the team on Clean Architecture and SOLID principles.",
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
      "Led design and development of enterprise apps using ASP.NET MVC, C#, and N-tier architecture, modernizing legacy Classic ASP systems.",
      "Developed RESTful APIs and WCF services for secure integration between legacy and modern systems.",
      "Built responsive UIs with React, JavaScript, HTML5, CSS3, and Bootstrap.",
      "Deployed and monitored applications on AKS using Azure Monitor and Application Insights.",
      "Optimized Azure SQL and MongoDB data layers, and automated CI/CD with Azure DevOps.",
    ],
    technologies: ["ASP.NET MVC", "C#", "WCF", "AKS", "Azure SQL", "React"],
  },
  {
    id: "amfam",
    company: "AmFam Insurance",
    location: "Mysore, India",
    role: "Software Engineer",
    period: "Jun 2012 – Sep 2014",
    responsibilities: [
      "Participated in full SDLC — requirements analysis, design, development, testing, and deployment — for enterprise web apps.",
      "Built ASP.NET Web Forms applications with C# and SQL Server using N-tier architecture.",
      "Developed data access components with ADO.NET, stored procedures, and reusable data modules.",
      "Implemented RBAC, server-side validation, and authentication for secure application access.",
      "Enhanced performance and UX with AJAX and reusable user controls; integrated external systems via ASP.NET Web Services.",
    ],
    technologies: ["ASP.NET Web Forms", "C#", "SQL Server", "ADO.NET", "AJAX"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google AI Professional Certificate",
    number: "Google AI",
    year: "2026",
  },
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
