
import { Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ImplementationStep } from './data/implementationSteps';
import { useTranslation } from '@/hooks/useTranslation';

interface MobileCardGridProps {
  steps: ImplementationStep[];
}

export function MobileCardGrid({ steps }: MobileCardGridProps) {
  const { t } = useTranslation();

  return (
    <div className="lg:hidden grid sm:grid-cols-2 gap-6 mb-12">
      {steps.map((step, index) => (
        <Card key={index} className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center shadow-md`}>
              <step.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-xs font-bold text-white bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] px-2 py-1 rounded-full">
              {step.step}
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-foreground mb-2">{t(step.title)}</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t(step.description)}</p>
          
          <div className="space-y-1 mb-4">
            {step.tasks.map((task, taskIndex) => (
              <div key={taskIndex} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-[#2AE87C] rounded-full"></div>
                <span className="text-xs text-muted-foreground">{t(task)}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-[#2AE87C]" />
            <span className="text-xs font-medium text-[#2AE87C]">{t(step.timeframe)}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
