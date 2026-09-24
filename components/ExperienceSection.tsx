import React from "react";
import { Briefcase, ChevronRight } from "lucide-react";
import { EXPERIENCES } from "../data";
import { CARD_DELAYS } from "../constants";

const scrollToExperience = (id: string) => {
  const element = document.getElementById(`exp-${id}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-ground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 reveal">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-cool mb-4">
              // The Journey
            </h2>
            <h3 className="font-mono uppercase text-4xl md:text-5xl font-bold text-ink tracking-tight">
              Professional Experience
            </h3>
          </div>
          <p className="text-muted-1 max-w-sm text-lg leading-relaxed font-sans">
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
                <div className="absolute left-0 top-0 bottom-0 w-px bg-line"></div>
                <h4 className="font-mono text-xs text-muted-3 uppercase tracking-[0.2em] mb-8">
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
                        className={`absolute -left-10 top-1.5 w-3 h-3 rounded-full border-4 border-ground transition-all duration-300 ${
                          idx === 0
                            ? "bg-accent scale-125"
                            : "bg-line group-hover:bg-cool"
                        }`}
                      ></div>
                      <p className="font-mono text-xs text-accent uppercase tracking-tighter mb-1">
                        {exp.period}
                      </p>
                      <h5 className="text-sm font-bold text-ink group-hover:text-accent transition-colors leading-tight font-sans">
                        {exp.company}
                      </h5>
                      <p className="font-mono text-[10px] text-muted-3 uppercase tracking-widest mt-1">
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
                className={`reveal ${CARD_DELAYS[idx % 3]} group relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 bg-raised border border-line border-l-4 border-l-accent rounded-lg hover:border-cool transition-colors duration-300`}
              >
                <div className="lg:col-span-4">
                  <span className="inline-block px-3 py-1.5 border border-accent/50 text-accent rounded-sm font-mono text-xs uppercase tracking-widest mb-6">
                    {exp.period}
                  </span>
                  <h4 className="text-3xl font-bold text-ink mb-2 font-sans">
                    {exp.company}
                  </h4>
                  <p className="text-xl font-bold text-accent mb-3 font-sans">
                    {exp.role}
                  </p>
                  <p className="text-muted-3 flex items-center gap-2 text-sm mb-8 font-medium font-sans">
                    <Briefcase size={16} />
                    {exp.location}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 border border-cool/50 text-cool rounded-sm font-mono text-xs uppercase tracking-wide hover:bg-cool/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-line pt-8 lg:pt-0 lg:pl-12">
                  <ul className="space-y-5">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-muted-1 text-lg leading-relaxed font-sans"
                      >
                        <div className="mt-1.5 bg-accent/15 rounded-full p-1 group-hover:bg-accent transition-colors">
                          <ChevronRight
                            size={14}
                            className="text-accent group-hover:text-accent-ink transition-colors shrink-0"
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
  );
};

export default ExperienceSection;
