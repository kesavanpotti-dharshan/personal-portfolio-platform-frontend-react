import React, { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  Code2,
  GraduationCap,
  Mail,
  ChevronRight,
  Award,
  ExternalLink,
  Github,
  Linkedin,
  Terminal,
  Cloud,
  Layers,
  Cpu,
  Download,
  Globe,
  ArrowUp,
  FileText,
  Calendar,
  Database,
  Layout,
  Send,
  Menu,
  X,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  PERSONAL_INFO,
  SKILL_CATEGORIES,
  EXPERIENCES,
  PROJECTS,
  CERTIFICATIONS,
  EDUCATION,
} from "./data";

// Set this in a .env file: VITE_CONTACT_API_URL=https://personal-portfolio-contact-function-gseaezhbataxhves.canadacentral-01.azurewebsites.net/api/SubmitContactForm?code=<your-function-key>
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL as string;

type FormStatus = "idle" | "submitting" | "success" | "error";

const App: React.FC = () => {
  // Tailwind's JIT scanner only picks up class names that appear literally
  // in the source, so `delay-${idx * 100}` produces no CSS in a production
  // build. These lookups keep the staggered-reveal effect using classes
  // that are guaranteed to be generated.
  const CARD_DELAYS = ["delay-100", "delay-200", "delay-300"] as const;
  const CERT_DELAYS = [
    "delay-150",
    "delay-300",
    "delay-500",
    "delay-700",
  ] as const;

  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Update Active Section
      const sections = [
        "home",
        "experience",
        "skills",
        "projects",
        "certifications",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Update Scroll Progress
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Back to Top Visibility
      setShowBackToTop(winScroll > 500);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToExperience = (id: string) => {
    const element = document.getElementById(`exp-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!CONTACT_API_URL) {
      setFormStatus("error");
      setFormErrorMessage(
        "Contact form is not configured. Please email me directly instead.",
      );
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: (formData.get("from_name") as string) ?? "",
      email: (formData.get("from_email") as string) ?? "",
      subject: (formData.get("subject") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
    };

    setFormStatus("submitting");
    setFormErrorMessage(null);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(
          text || `Request failed with status ${response.status}`,
        );
      }

      setFormStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setFormStatus("error");
      setFormErrorMessage(
        "Something went wrong sending your message. Please try again or email me directly.",
      );
    }
  };

  const getSkillIcon = (category: string) => {
    const lowerCat = category.toLowerCase();
    if (lowerCat.includes(".net")) return <Cpu size={24} />;
    if (lowerCat.includes("cloud")) return <Cloud size={24} />;
    if (lowerCat.includes("frontend")) return <Layout size={24} />;
    if (lowerCat.includes("databases")) return <Database size={24} />;
    return <Terminal size={24} />;
  };

  const getProjectIcon = (icon: string) => {
    switch (icon) {
      case "cloud":
        return <Cloud size={28} />;
      case "layers":
        return <Layers size={28} />;
      case "cpu":
        return <Cpu size={28} />;
      case "code":
      default:
        return <Code2 size={28} />;
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <div
          className="h-full bg-blue-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs uppercase tracking-tighter">
                  DKP
                </span>
              </div>
              <span className="text-lg font-bold tracking-tight hidden lg:block text-slate-900">
                Dharshan Kesavan Potti
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-500 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/resume/Dharshan_Kesavan_Potti_Resume.pdf"
                download="Dharshan_Kesavan_Potti_Resume.pdf"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-md active:scale-95"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Resume</span>
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-all"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out border-t border-slate-100 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-1 bg-white/95 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:text-blue-500 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10"></div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-8 animate-fade-in shadow-sm shadow-blue-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              Actively seeking leadership opportunities
            </div>
            <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-8 leading-[1.05] animate-fade-in [animation-delay:200ms]">
              Lead .NET Developer & <br />
              <span className="text-blue-600">Cloud Architect</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl animate-fade-in [animation-delay:400ms]">
              With 13+ years of enterprise engineering, I bridge the gap between
              complex business logic and scalable cloud-native architectures.
            </p>
            <div className="flex flex-wrap gap-5 items-center animate-fade-in [animation-delay:600ms]">
              <a
                href="#experience"
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all active:scale-[0.98]"
              >
                View Career Path
              </a>
            </div>

            {/* View Resume Secondary CTA & Hire Me Tertiary CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-6 animate-fade-in [animation-delay:750ms]">
              <a
                href="/resume/Dharshan_Kesavan_Potti_Resume.pdf"
                download="Dharshan_Kesavan_Potti_Resume.pdf"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-sm transition-all group px-2 py-1"
              >
                <FileText
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
                <span>View Full Resume (PDF)</span>
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-bold text-sm transition-all group px-2 py-1"
              >
                <Send
                  size={18}
                  className="group-hover:rotate-12 transition-transform"
                />
                <span>Hire Me</span>
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <div className="mt-20 grid grid-cols-2 sm:grid-cols-6 gap-8 border-t border-slate-100 pt-12 animate-fade-in [animation-delay:800ms]">
              <div>
                <p className="text-4xl font-extrabold text-slate-900 tracking-tighter">
                  13+
                </p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                  Years Exp
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-slate-900 tracking-tighter">
                  .NET Core
                </p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                  Backend
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-slate-900 tracking-tighter">
                  Azure
                </p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                  Cloud Native
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-slate-900 tracking-tighter">
                  SQL & NoSQL
                </p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                  Database
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-slate-900 tracking-tighter">
                  React
                </p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                  Modern Frontend
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-slate-900 tracking-tighter">
                  Artificial Intelligence
                </p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                  AI Exposure
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 reveal">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
                The Journey
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Professional Experience
              </h3>
            </div>
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
              A timeline of engineering excellence across banking, insurance,
              and fintech domains, delivering scalable solutions for global
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Career Timeline Visualization */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32 space-y-12 reveal">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200"></div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
                    Quick Navigation
                  </h4>
                  <div className="space-y-10">
                    {EXPERIENCES.map((exp, idx) => (
                      <button
                        key={exp.id}
                        onClick={() => scrollToExperience(exp.id)}
                        className="relative block text-left group w-full"
                      >
                        <div
                          className={`absolute -left-10 top-1.5 w-4 h-4 rounded-full border-4 border-slate-50 transition-all duration-300 ${idx === 0 ? "bg-blue-600 scale-125 shadow-lg shadow-blue-200" : "bg-slate-300 group-hover:bg-blue-400"}`}
                        ></div>
                        <p className="text-xs font-black text-blue-600 uppercase tracking-tighter mb-1">
                          {exp.period}
                        </p>
                        <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                          {exp.company}
                        </h5>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                          {exp.role}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Cards */}
            <div className="lg:col-span-9 space-y-10">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  id={`exp-${exp.id}`}
                  key={exp.id}
                  className={`reveal ${CARD_DELAYS[idx % 3]} group relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 hover:scale-[1.01] transition-all duration-500`}
                >
                  <div className="lg:col-span-4">
                    <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                      {exp.period}
                    </span>
                    <h4 className="text-3xl font-bold text-slate-900 mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-xl font-bold text-blue-600 mb-3">
                      {exp.role}
                    </p>
                    <p className="text-slate-400 flex items-center gap-2 text-sm mb-8 font-medium">
                      <Briefcase size={16} />
                      {exp.location}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-slate-50 text-slate-500 border border-slate-100 rounded-lg text-xs font-bold transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-12">
                    <ul className="space-y-5">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 text-slate-600 text-lg leading-relaxed"
                        >
                          <div className="mt-1.5 bg-blue-100 rounded-full p-1 group-hover:bg-blue-600 transition-colors">
                            <ChevronRight
                              size={14}
                              className="text-blue-600 group-hover:text-white transition-colors shrink-0"
                            />
                          </div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 reveal">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
              Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Technical Mastery
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.category}
                className={`reveal ${CARD_DELAYS[idx % 3]} p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 group h-full`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 animate-subtle-bounce">
                    {getSkillIcon(cat.category)}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">
                    {cat.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-50 border border-slate-100 text-slate-700 rounded-xl text-xs font-bold hover:border-blue-400 hover:text-blue-600 hover:bg-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
              Selected Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Featured Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className={`reveal ${CARD_DELAYS[idx % 3]} group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:bg-white transition-all duration-500 flex flex-col`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {getProjectIcon(project.icon)}
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {project.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white text-slate-500 border border-slate-100 rounded-lg text-xs font-bold group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section
        id="certifications"
        className="py-24 bg-slate-900 text-white overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Certifications */}
            <div className="reveal">
              <div className="flex items-center gap-5 mb-12">
                <div className="p-4 bg-blue-600 rounded-[1.5rem] shadow-xl shadow-blue-900/40">
                  <Award size={36} />
                </div>
                <h3 className="text-4xl font-bold tracking-tight">
                  Certifications
                </h3>
              </div>
              <div className="space-y-8">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={cert.number}
                    className={`reveal ${CERT_DELAYS[idx % CERT_DELAYS.length]} p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all duration-300 group`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                        {cert.name}
                      </h4>
                      <span className="text-sm font-bold text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                      Credential: {cert.number}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="reveal delay-300">
              <div className="flex items-center gap-5 mb-12">
                <div className="p-4 bg-indigo-600 rounded-[1.5rem] shadow-xl shadow-indigo-900/40">
                  <GraduationCap size={36} />
                </div>
                <h3 className="text-4xl font-bold tracking-tight">Education</h3>
              </div>
              <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap size={180} />
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-indigo-400 mb-2 leading-tight">
                        {EDUCATION.course}
                      </h4>
                      <p className="text-xl text-slate-100 font-semibold">
                        {EDUCATION.university}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-slate-500 bg-white/5 px-4 py-1.5 rounded-full">
                      {EDUCATION.year}
                    </span>
                  </div>
                  <p className="text-slate-400 text-lg mb-10 font-medium">
                    {EDUCATION.location}
                  </p>
                  <div className="pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3 text-blue-400 text-sm font-black uppercase tracking-widest">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <Code2 size={20} />
                      </div>
                      Computer Science and Information Technology
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal bg-slate-900 rounded-[4rem] p-10 md:p-20 lg:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 opacity-40"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-[1.1] tracking-tighter">
                  Let's build the{" "}
                  <span className="text-blue-500 underline decoration-indigo-500 underline-offset-8">
                    next big thing
                  </span>{" "}
                  together.
                </h2>
                <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
                  Looking for a technical leader to navigate your next digital
                  transformation? My inbox is always open.
                </p>

                <div className="space-y-8">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-6 group max-w-fit"
                  >
                    <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 group-hover:-translate-y-1">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-1">
                        Email
                      </p>
                      <p className="text-2xl font-bold tracking-tight">
                        {PERSONAL_INFO.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 text-slate-900 shadow-2xl reveal delay-300">
                {formStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-3xl flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} className="text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      Message sent!
                    </h4>
                    <p className="text-slate-500 mb-8">
                      Thanks for reaching out — I'll get back to you soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormStatus("idle")}
                      className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleContactSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                          Name
                        </label>
                        <input
                          name="from_name"
                          type="text"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:scale-[1.02] focus:shadow-lg focus:shadow-blue-500/10 outline-none transition-all duration-300 font-semibold disabled:opacity-60"
                          placeholder="John Doe"
                          required
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                          Email
                        </label>
                        <input
                          name="from_email"
                          type="email"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:scale-[1.02] focus:shadow-lg focus:shadow-blue-500/10 outline-none transition-all duration-300 font-semibold disabled:opacity-60"
                          placeholder="john@company.com"
                          required
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                        Subject
                      </label>
                      <input
                        name="subject"
                        type="text"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:scale-[1.02] focus:shadow-lg focus:shadow-blue-500/10 outline-none transition-all duration-300 font-semibold disabled:opacity-60"
                        placeholder="Project Opportunity"
                        required
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:scale-[1.02] focus:shadow-lg focus:shadow-blue-500/10 outline-none transition-all duration-300 resize-none font-semibold disabled:opacity-60"
                        placeholder="How can I help you?"
                        required
                        disabled={formStatus === "submitting"}
                      ></textarea>
                    </div>

                    {formStatus === "error" && (
                      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-700 text-sm font-semibold">
                        <AlertCircle size={18} className="shrink-0 mt-0.5" />
                        <span>
                          {formErrorMessage ??
                            "Something went wrong. Please try again."}
                        </span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full bg-slate-900 text-white font-black uppercase tracking-widest py-5 rounded-[1.5rem] hover:bg-blue-600 transition-all shadow-xl shadow-slate-100 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-slate-900"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <ChevronRight size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm tracking-tighter">
                  DKP
                </span>
              </div>
              <div>
                <p className="text-slate-900 font-black tracking-tight text-lg">
                  Dharshan Kesavan Potti
                </p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                  Lead .NET Developer
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/kesavanpotti-dharshan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all hover:-translate-y-1"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/dharshankesavan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all hover:-translate-y-1"
                aria-label="External Link"
              >
                <ExternalLink size={24} />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-slate-900 font-bold text-sm mb-1">
                &copy; {new Date().getFullYear()} Dharshan Kesavan Potti
              </p>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.2em]">
                Built with .NET Core Precision & React Fluidity
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-900 shadow-2xl transition-all duration-500 z-50 hover:bg-slate-900 hover:text-white group ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp
          size={24}
          className="group-hover:-translate-y-1 transition-transform"
        />
      </button>
    </div>
  );
};

export default App;
