// Export all language files
export { pt } from './pt';
export { es } from './es';
export { en } from './en';

// Language types
export type Language = 'pt' | 'es' | 'en';

// Language configuration
export const languages = {
  pt: { name: 'Português', flag: '🇧🇷' },
  es: { name: 'Español', flag: '🇪🇸' },
  en: { name: 'English', flag: '��🇸' }
} as const; 