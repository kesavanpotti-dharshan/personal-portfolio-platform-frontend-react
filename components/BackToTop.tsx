import React from "react";
import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  visible: boolean;
  onClick: () => void;
}

const BackToTop: React.FC<BackToTopProps> = ({ visible, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 w-14 h-14 bg-raised border border-line rounded-md flex items-center justify-center text-ink shadow-xl transition-all duration-500 z-50 hover:border-accent hover:text-accent group ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp
        size={24}
        className="group-hover:-translate-y-1 transition-transform"
      />
    </button>
  );
};

export default BackToTop;
