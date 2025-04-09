export type Language = "en" | "ru" | "nl";

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag?: string;
}

export const languages: LanguageOption[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
  },
  {
    code: "nl",
    name: "Dutch",
    nativeName: "Nederlands",
  },
];
