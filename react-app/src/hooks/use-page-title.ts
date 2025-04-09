"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";

/**
 * Hook to update the page title based on the current language
 */
export function usePageTitle() {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Update the page title when language changes
    document.title = `${t.profile.name} | ${t.profile.title}`;
  }, [language, t.profile.name, t.profile.title]);
}
