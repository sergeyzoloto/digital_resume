"use client";
import { useState } from "react";

import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";

export function NavigationBar() {
  const { language } = useLanguage();
  const t = translations[language];
  const navigationObject = t.navigation;
  // From object to array
  const navItems = Object.entries(navigationObject).map(([key, value]) => ({
    key: key,
    name: value,
  }));
  console.log(navItems);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center bg-gray-800 text-white max-w-min"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {isExpanded ? (
        <div className="flex flex-col items-start p-4 bg-gray-800 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="my-1 text-lg hover:text-gray-400"
            >
              {item.name}
            </a>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center p-2 space-y-1">
          {navItems.map((_, index) => (
            <div key={index} className="w-8 h-1 bg-white rounded-sm"></div>
          ))}
        </div>
      )}
    </div>
  );
}
