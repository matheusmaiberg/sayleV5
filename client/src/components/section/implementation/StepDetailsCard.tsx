import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ImplementationStep } from './data/implementationSteps';
import { useTranslation } from '@/hooks/useTranslation';

interface StepDetailsCardProps {
  step: ImplementationStep;
}

export function StepDetailsCard({ step }: StepDetailsCardProps) {
  const { t } = useTranslation();

  return (
    <Card className="mt-12 p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center`}>
              {React.createElement(step.icon, { className: "w-6 h-6 text-white" })}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{t(step.title)}</h3>
              <p className="text-[#2AE87C] font-medium">{t(step.timeframe)}</p>
            </div>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {t(step.description)}
          </p>
          <div className="space-y-2">
            {step.tasks.map((task, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#2AE87C]" />
                <span className="text-sm text-muted-foreground">{t(task)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-[#2AE87C]/20 to-[#0AD4CA]/20 rounded-full flex items-center justify-center mb-4">
            <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center`}>
              {React.createElement(step.icon, { className: "w-10 h-10 text-white" })}
            </div>
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">Etapa {step.step}</div>
          <div className="text-sm text-muted-foreground">de 4 etapas</div>
        </div>
      </div>
    </Card>
  );
}
