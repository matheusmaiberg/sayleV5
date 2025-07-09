import React from 'react';
import { ImplementationStep } from './data/implementationSteps';

interface DesktopTimelineProps {
  steps: ImplementationStep[];
  currentStep: number;
  onStepClick: (index: number) => void;
}

export function DesktopTimeline({ steps, currentStep, onStepClick }: DesktopTimelineProps) {
  return (
    <div className="hidden lg:block mb-16">
      <div className="relative">
        {/* Steps */}
        <div className="relative flex justify-between items-start">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                index <= currentStep ? 'opacity-100' : 'opacity-60 hover:opacity-80'
              } relative z-10`}
              onClick={() => onStepClick(index)}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg mb-6 ${
                index === currentStep ? 'scale-110 ring-4 ring-[#2AE87C]/30' : 'hover:scale-105'
              } transition-all duration-300`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-center max-w-xs">
                <div className="font-bold text-lg text-foreground mb-2">{step.title}</div>
                <div className="text-sm text-muted-foreground mb-3">{step.timeframe}</div>
                <div className="text-xs text-[#2AE87C] bg-[#2AE87C]/10 px-2 py-1 rounded-full">
                  Etapa {step.step}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress Line - positioned behind the icons */}
        <div className="absolute top-8 left-8 right-8 h-1 bg-slate-200 dark:bg-slate-700 rounded-full -z-0">
          <div 
            className="h-full bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] rounded-full transition-all duration-1000"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
