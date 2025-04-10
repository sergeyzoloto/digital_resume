"use client";

import { useLanguage } from "@/context/language-context";
import { languages } from "@/types/language";
import { Badge } from "./ui/badge";

export function LanguageIndicator() {
  const { language } = useLanguage();

  // Find the current language option
  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  return (
    <Badge variant="outline" className="text-xs">
      {currentLanguage.nativeName}
    </Badge>
  );
}
