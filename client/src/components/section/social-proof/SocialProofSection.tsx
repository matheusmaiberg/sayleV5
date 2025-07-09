import { useTranslation } from '@/hooks/useTranslation';

export function SocialProofSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="text-5xl font-bold mb-4" style={{ color: 'hsl(168, 100%, 42%)' }}>+186</div>
            <p className="text-muted-foreground">{t('transformedCompanies')}</p>
            <p className="text-sm text-muted-foreground mt-2">{t('businessesTrust')}</p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="text-5xl font-bold mb-4" style={{ color: 'hsl(168, 100%, 42%)' }}>+280k</div>
            <p className="text-muted-foreground">{t('automatedMessages')}</p>
            <p className="text-sm text-muted-foreground mt-2">{t('smartConversations')}</p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="text-5xl font-bold mb-4" style={{ color: 'hsl(168, 100%, 42%)' }}>+R$ 560k</div>
            <p className="text-muted-foreground">{t('savedService')}</p>
            <p className="text-sm text-muted-foreground mt-2">{t('operationalCostReduction')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
