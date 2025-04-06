"use client";

import { useState, useEffect } from "react";

export function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if any scroll has happened
      const mainElement = document.querySelector("main");
      if (mainElement) {
        setIsScrolled(mainElement.scrollTop > 0);
      }
    };

    // Attach the scroll event listener to the main element
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);

      // Initial check in case page is already scrolled
      handleScroll();
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <footer className="fixed bottom-0 z-50 min-w-screen border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 width-container">
      <div className="flex items-center justify-between md:h-16 h-10 flex-row">
        <div className="flex items-center flex-row gap-2 px-0 pt-0">
          <p
            className={`text-sm leading-loose text-muted-foreground text-left transition-opacity duration-300 ${
              isScrolled
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <a
              href="#top"
              className="text-sm font-medium text-muted-foreground"
            >
              Back to top
            </a>
          </p>
        </div>
        <div className="flex gap-4 md:pr-4">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
