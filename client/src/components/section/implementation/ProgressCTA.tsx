
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

export function ProgressCTA() {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <div className="max-w-md mx-auto mb-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span className="font-medium">Início</span>
          <span className="font-medium">Conclusão</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 shadow-inner">
          <div className="h-full rounded-full bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] shadow-sm relative">
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-[#2AE87C]"></div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2 mt-3">
          <CheckCircle className="w-4 h-4 text-[#2AE87C]" />
          <span className="text-sm font-medium text-[#2AE87C]">15 dias para ir ao ar</span>
        </div>
      </div>
      
      <Button
        size="lg"
        className="text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
        style={{ backgroundColor: 'hsl(168, 100%, 42%)' }}
      >
        {t('startImplementation')}
      </Button>
    </div>
  );
}
