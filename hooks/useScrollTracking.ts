import { useEffect, useState } from "react";

const SECTIONS = [
  "home",
  "experience",
  "skills",
  "projects",
  "certifications",
  "contact",
];

export function useScrollTracking() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update Active Section
      const current = SECTIONS.find((section) => {
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

  return { activeSection, scrollProgress, showBackToTop };
}
