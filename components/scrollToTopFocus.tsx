"use client";

import { useEffect } from "react";

export function ScrollToTopOnFocus() {
  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      const profileSection = document.querySelector('.fixed.top-0');

      if (profileSection?.contains(target)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('focusin', handleFocus);
    return () => document.removeEventListener('focusin', handleFocus);
  }, []);

  return null;
}