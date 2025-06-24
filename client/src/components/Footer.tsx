import { useTranslation } from '@/hooks/useTranslation';
import { Bot } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">Sayle</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t('footerDesc')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('solutions')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('ecommerce')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('clinics')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('realEstate')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('retail')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('resources')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('documentation')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('api')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('blog')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('support')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('contact')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Sayle.ai. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
