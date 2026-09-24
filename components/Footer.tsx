import React from "react";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-line bg-ground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3 font-mono">
            <span className="text-lg font-bold tracking-tight text-ink">
              [<span className="text-accent">DKP</span>]
            </span>
            <div>
              <p className="text-ink font-bold tracking-tight text-lg font-sans">
                Dharshan Kesavan Potti
              </p>
              <p className="text-muted-3 text-xs uppercase tracking-widest">
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
              className="w-12 h-12 flex items-center justify-center border border-line rounded-md text-muted-3 hover:text-cool hover:border-cool transition-all hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dharshankesavan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-12 h-12 flex items-center justify-center border border-line rounded-md text-muted-3 hover:text-cool hover:border-cool transition-all hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center border border-line rounded-md text-muted-3 hover:text-cool hover:border-cool transition-all hover:-translate-y-1"
              aria-label="External Link"
            >
              <ExternalLink size={24} />
            </a>
          </div>

          <div className="text-center md:text-right font-sans">
            <p className="text-ink font-bold text-sm mb-1">
              &copy; {new Date().getFullYear()} Dharshan Kesavan Potti
            </p>
            <p className="font-mono text-muted-3 text-xs uppercase tracking-[0.2em]">
              Built with .NET Core Precision &amp; React Fluidity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
