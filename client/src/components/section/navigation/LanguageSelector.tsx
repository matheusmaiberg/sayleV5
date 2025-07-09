import { useTranslation } from '@/hooks/useTranslation';
import { languages } from '@/lib/i18n';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';

export function LanguageSelector() {
  const { language, changeLanguage } = useTranslation();

  return (
    <Select value={language} onValueChange={changeLanguage}>
      <SelectTrigger
        aria-label="Select language"
        className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-md border border-none bg-background px-0 py-0 justify-center"
      >
        <SelectValue aria-label={language} />
      </SelectTrigger>
      <SelectContent>
        {languages.map(lang => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.code.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
