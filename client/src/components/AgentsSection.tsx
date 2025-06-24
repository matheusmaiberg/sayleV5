import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { Search, Heart, Handshake, Headphones, PieChart, RotateCcw, DollarSign, Cog, FileText, ChevronLeft, ChevronRight, Users, CheckCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import jhonImg from '@assets/Agente Jhon_1750439807344.png';
import camilaImg from '@assets/Agente Camila_1750439807343.png';
import sofiaImg from '@assets/Agente Sofia_1750439807345.png';
import andresImg from '@assets/Agente Andrés_1750439807343.png';
import tomasImg from '@assets/Agente Tomás_1750439807346.png';
import nicolasImg from '@assets/Agente Nicolas_1750439807345.png';
import claraImg from '@assets/Agente Clara _1750439807344.png';
import gabrielImg from '@assets/Agente Gabriel_1750439807344.png';
import lisImg from '@assets/Agente Lis_1750439807345.png';

interface AgentsSectionProps {
  selectedAgent: number;
  onAgentChange: (index: number) => void;
}

export function AgentsSection({ selectedAgent, onAgentChange }: AgentsSectionProps) {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const agents = [
    {
      name: 'Jhon',
      role: t('prospecting'),
      icon: Search,
      color: 'bg-blue-500',
      description: t('jhonDesc'),
      detailedDescription: t('jhonDetailed'),
      image: jhonImg,
      features: ['Análise de comportamento', 'Scoring de leads', 'Timing otimizado', 'Personalização automática']
    },
    {
      name: 'Camila',
      role: t('presales'),
      icon: Heart,
      color: 'bg-pink-500',
      description: t('camilaDesc'),
      detailedDescription: t('camilaDetailed'),
      image: camilaImg,
      features: ['Detecção automática de idioma', 'Segmentação geográfica', 'Mensagens contextuais', 'Campanhas automatizadas']
    },
    {
      name: 'Sofía',
      role: t('salesClosing'),
      icon: Handshake,
      color: 'bg-green-500',
      description: t('sofiaDesc'),
      detailedDescription: t('sofiaDetailed'),
      image: sofiaImg,
      features: ['Técnicas de fechamento', 'Tratamento de objeções', 'Gatilhos de urgência', 'Negociação inteligente']
    },
    {
      name: 'Andrés',
      role: t('support'),
      icon: Headphones,
      color: 'bg-yellow-500',
      description: t('andresDesc'),
      detailedDescription: t('andresDetailed'),
      image: andresImg,
      features: ['Suporte 24/7', 'Integração logística', 'Resolução proativa', 'Escalação inteligente']
    },
    {
      name: 'Tomás',
      role: t('cx'),
      icon: PieChart,
      color: 'bg-purple-500',
      description: t('tomasDesc'),
      detailedDescription: t('tomasDetailed'),
      image: tomasImg,
      features: ['Análise preditiva', 'Monitoramento em tempo real', 'Insights comportamentais', 'Otimização da jornada']
    },
    {
      name: 'Nicolas',
      role: t('reactivation'),
      icon: RotateCcw,
      color: 'bg-orange-500',
      description: t('nicolasDesc'),
      detailedDescription: t('nicolasDetailed'),
      image: nicolasImg,
      features: ['Detecção de inatividade', 'Campanhas de win-back', 'Ofertas personalizadas', 'Análise de churn']
    },
    {
      name: 'Clara',
      role: t('billing'),
      icon: DollarSign,
      color: 'bg-emerald-500',
      description: t('claraDesc'),
      detailedDescription: t('claraDetailed'),
      image: claraImg,
      features: ['Múltiplos meios de pagamento', 'Cobrança automatizada', 'Reconciliação bancária', 'Relatórios financeiros']
    },
    {
      name: 'Gabriel',
      role: t('automation'),
      icon: Cog,
      color: 'bg-indigo-500',
      description: t('gabrielDesc'),
      detailedDescription: t('gabrielDetailed'),
      image: gabrielImg,
      features: ['Integração de sistemas', 'Fluxos automatizados', 'Sincronização de dados', 'Monitoramento de processos']
    },
    {
      name: 'Lis',
      role: t('processCreation'),
      icon: FileText,
      color: 'bg-rose-500',
      description: t('lisDesc'),
      detailedDescription: t('lisDetailed'),
      image: lisImg,
      features: ['Design de funis', 'Análise comportamental', 'Otimização de conversão', 'Segmentação avançada']
    }
  ];

  const currentAgent = agents[selectedAgent] || agents[0];

  const scrollToCenter = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 160; // width + gap
      const containerWidth = carouselRef.current.clientWidth;
      const scrollPosition = (index * cardWidth) - (containerWidth / 2) + (cardWidth / 2);
      
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -160,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 160,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm font-medium text-[#2AE87C] bg-[#2AE87C]/10 px-3 py-1 rounded-full">
              9 Especialistas
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('specializedAgents')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('agentsDesc')}
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex flex-row gap-10 items-stretch">
            {/* Left Side - Featured Agent */}
            <div className="flex-1 flex flex-col justify-center">
              <Card className="bg-white dark:bg-slate-800 border-0 shadow-xl transition-all duration-300 px-8 py-10 rounded-3xl flex flex-col h-full">
                <div className="flex flex-row gap-10 items-start">
                  {/* Agent Image */}
                  <div className="relative w-52 h-56 flex-shrink-0">
                    <img
                      src={agents[selectedAgent].image}
                      alt={agents[selectedAgent].name}
                      className="w-full h-full object-cover object-center rounded-2xl shadow-lg"
                      loading="lazy"
                    />
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                      {React.createElement(agents[selectedAgent].icon, { className: "w-7 h-7 text-white" })}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="flex-1 flex flex-col gap-1 justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{agents[selectedAgent].name}</h3>
                    <p className="text-lg text-[#2AE87C] font-semibold mb-2">{agents[selectedAgent].role}</p>
                    <div className="flex flex-col gap-1 mb-1">
                      {agents[selectedAgent].features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#2AE87C] flex-shrink-0" />
                          <span className="text-base text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Description */}
                <div className="w-full flex flex-col items-center justify-center mt-10 mb-6">
                  <p className="text-muted-foreground leading-relaxed text-center text-base max-w-md">
                    {agents[selectedAgent].detailedDescription}
                  </p>
                </div>
                {/* CTA Button */}
                <div className="w-full flex justify-center mt-4 mb-2">
                  <Button className="bg-[#00D6AB] text-white hover:bg-[#00b898] hover:scale-105 transition-all duration-200 text-lg font-semibold px-8 py-3 w-auto mx-auto">
                    Quero esse especialista no meu time
                  </Button>
                </div>
              </Card>
            </div>
            {/* Right Side - Agent Grid */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-3 gap-4">
                {agents.map((agent, index) => {
                  const IconComponent = agent.icon;
                  return (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all duration-300 text-center py-4 px-2 rounded-xl border-2 flex flex-col items-center gap-2 shadow-none hover:shadow-md bg-white dark:bg-slate-800
                        ${index === selectedAgent ? 'border-[#2AE87C] ring-2 ring-[#2AE87C] scale-105 bg-[#2AE87C]/10 dark:bg-[#2AE87C]/10 shadow-lg' : 'border-transparent hover:border-[#2AE87C]/50'}
                      `}
                      onClick={() => onAgentChange(index)}
                      style={{ minHeight: '120px' }}
                    >
                      <div className={`w-10 h-10 ${agent.color} rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 mb-1
                        ${index === selectedAgent ? 'scale-110' : 'hover:scale-105'}`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h4 className={`font-bold text-base transition-colors duration-300 mb-0 ${index === selectedAgent ? 'text-[#2AE87C]' : 'text-foreground'}`}>{agent.name}</h4>
                      <p className="text-xs text-muted-foreground mb-0">{agent.role}</p>
                      {index === selectedAgent && (
                        <div className="w-2 h-2 bg-[#2AE87C] rounded-full animate-pulse mt-1"></div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Improved Card Layout */}
        <div className="lg:hidden space-y-6 mb-16">
          {/* Agent Selector Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {agents.map((agent, index) => (
              <button
                key={index}
                onClick={() => onAgentChange(index)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedAgent === index 
                    ? 'border-[#2AE87C] bg-[#2AE87C]/10 shadow-lg' 
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[#2AE87C]/50'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`w-12 h-12 ${agent.color} rounded-xl flex items-center justify-center shadow-md ${
                    selectedAgent === index ? 'scale-110' : ''
                  } transition-transform duration-300`}>
                    <agent.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className={`font-semibold text-sm ${
                      selectedAgent === index ? 'text-[#2AE87C]' : 'text-foreground'
                    }`}>
                      {agent.name}
                    </div>
                    <div className="text-xs text-muted-foreground line-clamp-2 px-1">
                      {agent.role}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Agent Details */}
          <Card className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg">
            <div className="space-y-4">
              <div className="relative">
                <img 
                  src={currentAgent.image} 
                  alt={currentAgent.name}
                  className="w-full h-40 object-cover rounded-xl agent-image"
                  loading="lazy"
                  decoding="async"
                  style={{ 
                    objectPosition: currentAgent.name === 'Jhon' ? 'center 15%' :
                                   currentAgent.name === 'Camila' ? 'center 25%' :
                                   currentAgent.name === 'Sofía' ? 'center 20%' :
                                   currentAgent.name === 'Andrés' ? 'center 15%' :
                                   currentAgent.name === 'Tomás' ? 'center 20%' :
                                   currentAgent.name === 'Nicolas' ? 'center 25%' :
                                   currentAgent.name === 'Clara' ? 'center 15%' :
                                   currentAgent.name === 'Gabriel' ? 'center 20%' :
                                   'center 15%' // Lis default
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="flex items-center space-x-1 mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">{t('onlineNow')}</span>
                  </div>
                  <h3 className="text-base font-bold">{currentAgent.name}</h3>
                  <p className="text-xs opacity-90">{currentAgent.role}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {currentAgent.detailedDescription}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">{t('mainFeatures')}</h4>
                  <div className="space-y-1">
                    {currentAgent.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2AE87C] rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Toda essa equipe trabalhando 24/7 para seu negócio
            </h3>
            <p className="text-muted-foreground">
              {t('agentsWork')}
            </p>
          </div>
          <Button
            size="lg"
            className="bg-[#00D6AB] text-white hover:bg-[#00b898] hover:scale-105 transition-all duration-200 shadow-lg px-8 py-4 text-lg font-semibold w-full sm:w-auto"
          >
            {t('talkTeam')}
          </Button>
        </div>
      </div>
    </section>
  );
}
