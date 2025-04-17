"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";

export function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create a new IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // When the hero section is not intersecting (not visible),
        // it means we've scrolled down
        const [entry] = entries;
        setIsScrolled(!entry.isIntersecting);
      },
      {
        // Set a threshold that works well with snap scrolling
        threshold: 0.1,
        // Use the viewport as the root
        root: null,
      }
    );

    // Target the hero section (top of the page)
    const heroSection = document.getElementById("top");

    if (heroSection) {
      observerRef.current.observe(heroSection);
    }

    return () => {
      // Clean up the observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <footer className="fixed bottom-0 z-50 min-w-screen border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="flex items-center justify-between md:h-16 h-10 flex-row width-container mx-auto">
        <div className="flex items-center flex-row gap-2 px-0 pt-0">
          <a
            href="#top"
            className={`text-sm font-medium text-muted-foreground hover:text-primary underline transition-all duration-300 ${
              isScrolled
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={!isScrolled}
          >
            {t.navigation.backToTop}
          </a>
        </div>
        <div className="flex gap-4 md:pr-4">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground underline underline-offset-4"
          >
            {t.navigation.linkedin}
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground underline underline-offset-4"
          >
            {t.navigation.github}
          </a>
        </div>
      </div>
    </footer>
  );
}
