import { useTranslation } from '@/hooks/useTranslation';
import metaImg from '@assets/meta-png_1750727070690.png';
import hubspotImg from '@assets/hubspot-png_1750727070690.png';
import youtubeImg from '@assets/youtube-png_1750727070691.png';
import rdStationImg from '@assets/rd-station-png_1750727070691.png';
import grokImg from '@assets/grok-png_1750727070681.png';

export function IntegrationSection() {
  const { t } = useTranslation();

  const integrations = [
    { name: 'Meta', image: metaImg },
    { name: 'HubSpot', image: hubspotImg },
    { name: 'YouTube', image: youtubeImg },
    { name: 'RD Station', image: rdStationImg },
    { name: 'Groq', image: grokImg }
  ];

  return (
    <section id="integrations" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-foreground mb-4" data-aos="fade-up" data-aos-delay="200">
            {t('integrateTools')} <span className="bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] bg-clip-text text-transparent">{t('toolsYouUse')}</span>
          </h2>
        </div>
        
        <div className="overflow-hidden" data-aos="fade-up" data-aos-delay="600">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {/* Multiple duplicated sets for seamless infinite loop */}
            {Array.from({ length: 4 }, (_, setIndex) => 
              integrations.map((integration, index) => (
                <div 
                  key={`${setIndex}-${index}`}
                  className="flex items-center justify-center hover:scale-110 transition-transform duration-300 flex-shrink-0 min-w-[180px]"
                >
                  <img 
                    src={integration.image} 
                    alt={integration.name}
                    className="h-40 w-auto object-contain filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* CSS para animação de esteira infinita */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 28s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
