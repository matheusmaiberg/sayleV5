import React from 'react';
import { Rocket } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export function ImplementationHeader() {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center space-x-2 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] flex items-center justify-center shadow-lg">
          <Rocket className="w-6 h-6 text-white" />
        </div>
        <div className="text-sm font-medium text-[#2AE87C] bg-[#2AE87C]/10 px-3 py-1 rounded-full">
          15 dias
        </div>
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {t('implementation15DaysComplete')}
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {t('fromBriefingToActivation')}
      </p>
    </div>
  );
}
