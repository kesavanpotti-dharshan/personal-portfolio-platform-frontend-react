import React from "react";

interface ScrollProgressBarProps {
  progress: number;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  progress,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none bg-line/30">
      <div
        className="h-full bg-accent transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
