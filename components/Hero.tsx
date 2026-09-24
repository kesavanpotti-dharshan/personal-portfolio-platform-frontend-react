import React from "react";
import { ChevronRight, FileText, Send } from "lucide-react";

const STATS = [
  { value: "14", label: "Years Exp" },
  { value: ".NET 10", label: "Backend" },
  { value: "Azure", label: "Cloud Native" },
  { value: "SQL & NoSQL", label: "Database" },
  { value: "React", label: "Modern Frontend" },
  { value: "Artificial Intelligence", label: "AI Exposure" },
];

const Hero: React.FC = () => {
  return (
    <header
      id="home"
      className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-blueprint-grid overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <p className="font-mono text-xs sm:text-sm text-cool mb-8 animate-fade-in">
            $ status = open for leadership roles
            <span className="inline-block w-2 h-4 bg-cool/70 ml-1 align-middle animate-pulse" />
          </p>

          <h1 className="font-mono uppercase text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-ink mb-8 leading-[1.1] text-balance animate-fade-in [animation-delay:200ms]">
            Lead .NET Developer &amp; <br />
            <span className="text-accent">Cloud Architect</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-muted-1 mb-12 leading-relaxed max-w-2xl animate-fade-in [animation-delay:400ms]">
            With 14 years of enterprise engineering, I bridge the gap between
            complex business logic and scalable cloud-native architectures.
          </p>
          <div className="flex flex-wrap gap-5 items-center animate-fade-in [animation-delay:600ms]">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 bg-accent text-accent-ink px-8 py-4 rounded-md font-mono font-bold uppercase tracking-wide text-sm hover:brightness-110 transition-all active:scale-[0.98]"
            >
              View Career Path
            </a>
          </div>

          {/* View Resume Secondary CTA & Hire Me Tertiary CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-6 animate-fade-in [animation-delay:750ms]">
            <a
              href="/resume/Dharshan_Kesavan_Potti_Resume.pdf"
              download="Dharshan_Kesavan_Potti_Resume.pdf"
              className="inline-flex items-center gap-2 text-muted-3 hover:text-cool font-mono text-xs uppercase tracking-widest transition-all group px-2 py-1"
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
              className="inline-flex items-center gap-2 text-muted-3 hover:text-accent font-mono text-xs uppercase tracking-widest transition-all group px-2 py-1"
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
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 border-t border-line pt-12 animate-fade-in [animation-delay:800ms]">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="border border-line rounded-md bg-raised p-4 min-h-[92px] flex flex-col justify-center"
            >
              <p className="font-mono text-base md:text-lg font-bold text-accent tabular-nums leading-snug text-balance">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] text-muted-3 uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
