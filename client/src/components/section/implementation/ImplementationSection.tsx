import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { implementationSteps } from './data/implementationSteps';
import { ImplementationHeader } from './ImplementationHeader';
import { DesktopTimeline } from './DesktopTimeline';
import { StepDetailsCard } from './StepDetailsCard';
import { MobileCardGrid } from './MobileCardGrid';
import { ProgressCTA } from './ProgressCTA';

export function ImplementationSection() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);

  // Create steps with translated titles, descriptions, and timeframes
  const steps = implementationSteps.map(step => ({
    ...step,
    title: t(step.title),
    description: t(step.description),
    timeframe: t(step.timeframe)
  }));

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ImplementationHeader />

        {/* Desktop: Modern Timeline */}
        <DesktopTimeline 
          steps={steps} 
          currentStep={currentStep} 
          onStepClick={setCurrentStep} 
        />

        {/* Step Details */}
        <div className="hidden lg:block">
          <StepDetailsCard step={steps[currentStep]} />
        </div>

        {/* Mobile: Card Grid */}
        <MobileCardGrid steps={steps} />

        {/* CTA */}
        <ProgressCTA />
      </div>
    </section>
  );
}