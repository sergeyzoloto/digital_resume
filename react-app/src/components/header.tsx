"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed min-w-screen top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-8">
      <div className="flex h-10 md:h-16 items-center justify-between w-full">
        <a href="/" className="font-bold text-xl">
          Sergey Zolotko
        </a>

        {/* Mobile menu button */}
        <DropdownMenu onOpenChange={(open) => setIsMenuOpen(open)}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
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
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-background/95 backdrop-blur-3xl supports-[backdrop-filter]:bg-background/60">
            <DropdownMenuItem asChild>
              <a href="#experience" onClick={() => setIsMenuOpen(false)}>
                Experience
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#education" onClick={() => setIsMenuOpen(false)}>
                Education
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ModeToggle />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#experience"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </a>
          <a
            href="#education"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Education
          </a>
          <a
            href="#skills"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
