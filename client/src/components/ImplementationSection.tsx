import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Rocket, BarChart, Clock, CheckCircle } from 'lucide-react';

export function ImplementationSection() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: Calendar,
      step: "1",
      title: t('strategicBriefing'),
      description: t('briefingImplementation'),
      timeframe: t('timeframe1'),
      color: 'from-blue-500 to-blue-600',
      tasks: ['Análise do negócio', 'Definição de personas', 'Mapeamento do funil']
    },
    {
      icon: Users,
      step: "2", 
      title: t('aiConfiguration'),
      description: t('configurationImplementation'),
      timeframe: t('timeframe2'),
      color: 'from-purple-500 to-purple-600',
      tasks: ['Treinamento da IA', 'Configuração de scripts', 'Personalização da marca']
    },
    {
      icon: Rocket,
      step: "3",
      title: t('integrationTesting'),
      description: t('integrationImplementation'),
      timeframe: t('timeframe3'),
      color: 'from-orange-500 to-orange-600',
      tasks: ['Integração multicanal', 'Testes de qualidade', 'Simulações reais']
    },
    {
      icon: BarChart,
      step: "4",
      title: t('goLiveOptimization'),
      description: t('optimizationImplementation'),
      timeframe: t('timeframe4'),
      color: 'from-green-500 to-green-600',
      tasks: ['Go-live supervisionado', 'Monitoramento ativo', 'Otimização contínua']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Desktop: Modern Timeline */}
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
                  onClick={() => setCurrentStep(index)}
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

          {/* Step Details */}
          <Card className="mt-12 p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${steps[currentStep].color} flex items-center justify-center`}>
                    {React.createElement(steps[currentStep].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{steps[currentStep].title}</h3>
                    <p className="text-[#2AE87C] font-medium">{steps[currentStep].timeframe}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {steps[currentStep].description}
                </p>
                <div className="space-y-2">
                  {steps[currentStep].tasks.map((task, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#2AE87C]" />
                      <span className="text-sm text-muted-foreground">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-[#2AE87C]/20 to-[#0AD4CA]/20 rounded-full flex items-center justify-center mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-r ${steps[currentStep].color} rounded-full flex items-center justify-center`}>
                    {React.createElement(steps[currentStep].icon, { className: "w-10 h-10 text-white" })}
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">Etapa {steps[currentStep].step}</div>
                <div className="text-sm text-muted-foreground">de 4 etapas</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Mobile: Card Grid */}
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
              
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
              
              <div className="space-y-1 mb-4">
                {step.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#2AE87C] rounded-full"></div>
                    <span className="text-xs text-muted-foreground">{task}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#2AE87C]" />
                <span className="text-xs font-medium text-[#2AE87C]">{step.timeframe}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
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
      </div>
    </section>
  );
}