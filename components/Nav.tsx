import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

interface NavProps {
  activeSection: string;
}

const Nav: React.FC<NavProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-ground/90 backdrop-blur-md z-50 border-b border-line shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 font-mono">
            <span className="text-lg font-bold tracking-tight text-ink">
              [<span className="text-accent">DKP</span>]
            </span>
            <span className="text-base font-medium hidden lg:block text-muted-2 [text-shadow:0_0_14px_rgba(232,163,61,0.35),0_2px_5px_rgba(0,0,0,0.5)]">
              Dharshan Kesavan Potti
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1 font-mono">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-2 text-xs uppercase tracking-[0.15em] border-b-2 transition-all ${
                  activeSection === item.id
                    ? "text-accent border-accent"
                    : "text-muted-2 border-transparent hover:text-ink"
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
              className="inline-flex items-center gap-2 border border-accent text-accent px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest hover:bg-accent/10 transition-all active:scale-95"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-md text-ink hover:bg-raised transition-all"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out border-t border-line ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-1 bg-ground/95 backdrop-blur-xl font-mono">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              className={`px-4 py-3 text-xs uppercase tracking-[0.15em] rounded-sm transition-all ${
                activeSection === item.id
                  ? "text-accent bg-accent/10"
                  : "text-muted-2 hover:text-ink hover:bg-raised"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
