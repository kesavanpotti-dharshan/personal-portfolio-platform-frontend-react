import React from "react";
import { Cloud, Layers, Cpu, Code2, Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../data";
import { CARD_DELAYS } from "../constants";

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

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-ground relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-cool mb-4">
            // Selected Work
          </h2>
          <h3 className="font-mono uppercase text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Featured Projects
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={`reveal ${CARD_DELAYS[idx % 3]} group p-10 bg-raised border border-line border-l-4 border-l-accent rounded-lg hover:border-cool transition-colors duration-300 flex flex-col`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 border border-accent/40 rounded-md flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-ink transition-all duration-300">
                  {getProjectIcon(project.icon)}
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="w-10 h-10 flex items-center justify-center border border-line rounded-md text-muted-3 hover:text-cool hover:border-cool transition-all"
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
                      className="w-10 h-10 flex items-center justify-center border border-line rounded-md text-muted-3 hover:text-cool hover:border-cool transition-all"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-2xl font-bold text-ink mb-3 tracking-tight font-sans">
                {project.title}
              </h4>
              <p className="text-muted-1 leading-relaxed mb-8 flex-grow font-sans">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 border border-cool/50 text-cool rounded-sm font-mono text-xs uppercase tracking-wide hover:bg-cool/10 transition-colors"
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
  );
};

export default ProjectsSection;
