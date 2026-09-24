import React from "react";
import { Cpu, Cloud, Layout, Database, Terminal } from "lucide-react";
import { SKILL_CATEGORIES } from "../data";
import { CARD_DELAYS } from "../constants";

const getSkillIcon = (category: string) => {
  const lowerCat = category.toLowerCase();
  if (lowerCat.includes(".net")) return <Cpu size={24} />;
  if (lowerCat.includes("cloud")) return <Cloud size={24} />;
  if (lowerCat.includes("frontend")) return <Layout size={24} />;
  if (lowerCat.includes("databases")) return <Database size={24} />;
  return <Terminal size={24} />;
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-blueprint-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-cool mb-4">
            // Expertise
          </h2>
          <h3 className="font-mono uppercase text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Technical Mastery
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.category}
              className={`reveal ${CARD_DELAYS[idx % 3]} p-10 bg-raised border border-line rounded-lg hover:border-cool transition-colors duration-300 group h-full`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 border border-accent/40 text-accent rounded-md flex items-center justify-center group-hover:bg-accent group-hover:text-accent-ink transition-all duration-500 animate-subtle-bounce">
                  {getSkillIcon(cat.category)}
                </div>
                <h4 className="text-xl font-bold text-ink tracking-tight leading-tight font-sans">
                  {cat.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 border border-cool/50 text-cool rounded-sm font-mono text-xs uppercase tracking-wide hover:bg-cool/10 hover:border-cool transition-all cursor-default"
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
  );
};

export default SkillsSection;
