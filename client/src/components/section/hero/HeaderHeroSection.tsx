import { useTranslation } from '@/hooks/useTranslation';
import { useColorizedBrackets } from '@/hooks/useColorizedBrackets';

interface HeaderHeroSectionProps {
  agentName: string;
}

function removeAccents(str: string) {
  return str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

export function HeaderHeroSection({ agentName }: HeaderHeroSectionProps) {
  const { t } = useTranslation();
  const agentNameLowercase: string = removeAccents(agentName).toLocaleLowerCase();
  const heroKeyPromise = t(`hero.agent.title.${agentNameLowercase}`);
  const heroKeyDescription = t(`agent.${agentNameLowercase}.description`);

  const colorizedTitle = useColorizedBrackets(heroKeyPromise);

  return (
    <>
      <h1 className="text-4xl lg:text-4xl font-semibold mt-2 mb-2 leading-tight tracking-tight font-inter">
        {colorizedTitle}
      </h1>
      <p className="text-base text-gray-700 mb-2 max-w-2xl font-inter">
        {heroKeyDescription}
      </p>
    </>
  );
}

