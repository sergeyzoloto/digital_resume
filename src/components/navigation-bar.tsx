"use client";
import { useState } from "react";
import { useScrollContext } from "@/context/scroll-context"; // Import ScrollContext
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";
import navigationLinks from "@/data/links";

type NavigationKeys = keyof typeof navigationLinks;

export function NavigationBar() {
  const { language } = useLanguage();
  const t = translations[language];
  const { activeSection } = useScrollContext(); // Get active section from context

  const navItems = Object.entries(navigationLinks).map(([key, link]) => ({
    key: key as NavigationKeys,
    name: t.navigation[key as NavigationKeys],
    link,
  }));

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`z-100 fixed right-1/2 translate-x-1/2 lg:translate-x-0 bottom-0 lg:right-6 lg:bottom-1/2 lg:translate-y-1/2 text-white max-w-min rounded-lg ${
        isExpanded ? "opacity-100" : "opacity-70"
      } transition-opacity duration-300`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {isExpanded ? (
        <div className="flex flex-col items-start w-64 p-4 rounded-lg bg-background">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="px-2 m-1 w-full rounded-sm text-sm hover:font-bold text-primary transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      ) : (
        <div className="flex flex-row items-center p-4 space-x-1 lg:space-x-0 lg:space-y-1 lg:flex-col rounded-lg">
          {navItems.map((item) => (
            <div
              key={item.key}
              className={`w-2 rounded-sm bg-primary ${
                activeSection === item.key ? "h-2 lg:h-6" : "h-2 opacity-50"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}
