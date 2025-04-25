"use client";
import { useState } from "react";

import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";
import navigationLinks from "@/data/links";

type NavigationKeys = keyof typeof navigationLinks; // Define type for navigation keys

export function NavigationBar() {
  const { language } = useLanguage();
  const t = translations[language];
  // From object to array
  const navItems = Object.entries(navigationLinks).map(([key, link]) => ({
    key: key as NavigationKeys, // Explicitly cast key to NavigationKeys
    name: t.navigation[key as NavigationKeys], // Use translation for the name
    link, // Use the link directly
  }));

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="z-100 fixed right-4 bottom-12 md:bottom-18 lg:bottom-1/2 lg:translate-y-1/2 flex flex-col items-center text-white max-w-min rounded-lg"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {isExpanded ? (
        <div className="flex flex-col items-start w-64 p-4 rounded-lg bg-background">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="px-2 m-1 w-full rounded-sm text-sm hover:bg-muted-foreground text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center p-4 space-y-1 bg-background">
          {navItems.map((_, index) => (
            <div key={index} className="w-8 h-1 bg-primary/50 rounded-sm"></div>
          ))}
        </div>
      )}
    </div>
  );
}
