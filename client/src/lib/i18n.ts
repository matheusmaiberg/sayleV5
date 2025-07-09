import { pt } from "@/languages/pt";
import { es } from "@/languages/es";
import { en } from "@/languages/en";

export interface Translation {
  [key: string]: string;
}

export interface Translations {
  pt: Translation;
  es: Translation;
  en: Translation;
}

export const translations: Translations = {
  pt,
  es,
  en,
};

export type Language = keyof Translations;

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇺🇸" },
];
