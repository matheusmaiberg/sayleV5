import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { Check } from 'lucide-react';

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6" data-aos="fade-up">
          {t('readyTransform')}
        </h2>
        <p className="text-xl text-muted-foreground mb-12" data-aos="fade-up" data-aos-delay="200">
          {t('ctaSubtitle')}
        </p>
        
        {/* Video Section */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-12 max-w-2xl mx-auto" data-aos="zoom-in" data-aos-delay="400">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[hsl(168,100%,42%)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-muted-foreground">Vídeo: Como a IA da Sayle Transforma Seu Negócio</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full"
          >
            {t('watchVideo')}
          </Button>
        </div>
        
        <div className="space-y-4 mb-8">
          <Button
            size="lg"
            className="text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg w-full sm:w-auto"
            style={{ backgroundColor: 'hsl(168, 100%, 42%)' }}
          >
            {t('contactUs')}
          </Button>
          <div>
            <Button
              variant="outline"
              size="lg"
              className="px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg w-full sm:w-auto"
            >
              {t('scheduleDemo')}
            </Button>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-8">
          {t('specialistsReady')}
        </p>
        
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: 'hsl(168, 100%, 42%)' }}>15 min</div>
            <div className="text-xs text-muted-foreground">{t('personalizedDemo')}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: 'hsl(168, 100%, 42%)' }}>0 custo</div>
            <div className="text-xs text-muted-foreground">{t('toKnowSolution')}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: 'hsl(168, 100%, 42%)' }}>24h</div>
            <div className="text-xs text-muted-foreground">{t('toReceiveProposal')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
