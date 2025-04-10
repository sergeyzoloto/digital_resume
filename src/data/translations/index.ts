import { en } from "./en";
import { ru } from "./ru";
import { nl } from "./nl";
import type { TranslationData } from "./types";
import type { Language } from "@/types/language";

export const translations: Record<Language, TranslationData> = {
  en,
  ru,
  nl,
};

export * from "./types";
