"use client";

import { useEffect, useState } from "react";
import type { Language } from "@/types/language";

/**
 * Hook to detect the user's browser language
 * Returns a supported language code or falls back to default
 */
export function useBrowserLanguage(defaultLang: Language = "en"): Language {
  const [detectedLanguage, setDetectedLanguage] =
    useState<Language>(defaultLang);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    try {
      // Get browser language
      const browserLang = navigator.language.split("-")[0].toLowerCase();

      // Check if it's one of our supported languages
      if (["en", "ru", "nl"].includes(browserLang)) {
        setDetectedLanguage(browserLang as Language);
      }
    } catch (error) {
      console.error("Error detecting browser language:", error);
    }
  }, []);

  return detectedLanguage;
}
