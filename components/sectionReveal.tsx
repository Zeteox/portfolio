"use client";

import { useState, useEffect, ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  id?: string;
}

export function SectionReveal({ children, delay = 0, id }: SectionRevealProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const visible = rect.top <= window.innerHeight * 0.75;

        if (visible && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <section
      id={id}
      className={`p-5 sm:p-10 md:p-15 lg:p-20 pb-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}