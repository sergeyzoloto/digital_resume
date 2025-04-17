"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { LanguageSwitcher } from "./language-switcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="fixed min-w-screen top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-10 md:h-16 items-center justify-between width-container mx-auto">
        <a href="/" className="font-bold">
          {t.profile.name}
        </a>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme toggle and language switcher for mobile - moved outside the dropdown */}
          <LanguageSwitcher />
          <ModeToggle />

          <DropdownMenu
            open={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
          >
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-background/95 backdrop-blur-3xl supports-[backdrop-filter]:bg-background/60">
              <DropdownMenuItem asChild>
                <a
                  href="#experience"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.navigation.experience}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#education" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.navigation.education}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.navigation.skills}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.navigation.about}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.navigation.contact}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#experience"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.navigation.experience}
          </a>
          <a
            href="#education"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.navigation.education}
          </a>
          <a
            href="#skills"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.navigation.skills}
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.navigation.about}
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.navigation.contact}
          </a>
          <LanguageSwitcher />
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
