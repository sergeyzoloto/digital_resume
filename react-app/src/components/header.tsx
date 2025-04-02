"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./sections/mode-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between w-full">
        <a href="/" className="font-bold text-xl px-4">
          Sergey Zolotko
        </a>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </a>
          <a
            href="#education"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
          <ModeToggle />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4">
              <a
                href="#about"
                className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#experience"
                className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                Experience
              </a>
              <a
                href="#skills"
                className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                href="#education"
                className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                Education
              </a>
              <a
                href="#contact"
                className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="py-2">
                <ModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
