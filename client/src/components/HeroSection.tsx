import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { Bot, ChevronLeft, ChevronRight } from 'lucide-react';
import jhonImg from '@assets/Agente Jhon_1750439807344.png';
import camilaImg from '@assets/Agente Camila_1750439807343.png';
import sofiaImg from '@assets/Agente Sofia_1750439807345.png';
import andresImg from '@assets/Agente Andrés_1750439807343.png';

interface HeroSectionProps {
  selectedAgent: number;
  onAgentChange: (index: number) => void;
}

export function HeroSection({ selectedAgent, onAgentChange }: HeroSectionProps) {
  const { t } = useTranslation();

  const casesData = [
    {
      id: 0,
      agentName: 'Jhon',
      agentImage: jhonImg,
      clientName: 'João Silva',
      clientImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      businessType: 'E-commerce de Calçados',
      subtitle: 'IA Especialista em Prospecção',
      headline: 'Capture Mais Leads Qualificados com Jhon',
      description: 'Identifica visitantes com potencial de compra e os transforma em leads quentes 24/7, aumentando suas vendas em até 300%',
      conversation: {
        greeting: 'Oi, tudo bem?',
        response: 'Oi! Estou procurando tênis para corrida',
        recommendation: 'Perfeito! Baseado no seu perfil, encontrei as melhores opções para você:'
      },
      products: [
        { name: 'NIKE Air Zoom Pegasus 40', price: 'De R$ 699 por R$ 559 - 20% OFF' },
        { name: 'ADIDAS Ultraboost 23', price: 'De R$ 899 por R$ 719 - Frete Grátis' }
      ],
      stats: { leads: '+127', sales: '43', satisfaction: '98%' }
    },
    {
      id: 1,
      agentName: 'Camila',
      agentImage: camilaImg,
      clientName: 'Maria Santos',
      clientImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      businessType: 'Clínica de Estética',
      subtitle: 'IA Especialista em Nutrição de Leads',
      headline: 'Transforme Visitantes em Clientes com Camila',
      description: 'Educa prospects e os prepara para a compra, criando relacionamentos genuínos que convertem',
      conversation: {
        greeting: 'Olá! Como posso ajudá-la hoje?',
        response: 'Gostaria de saber sobre tratamentos faciais',
        recommendation: 'Ótima escolha! Temos tratamentos especiais para você:'
      },
      products: [
        { name: 'Limpeza de Pele Profunda', price: 'R$ 180 - Desconto de 25%' },
        { name: 'Hidratação Facial Premium', price: 'R$ 220 - Primeira sessão grátis' }
      ],
      stats: { leads: '+89', sales: '31', satisfaction: '96%' }
    },
    {
      id: 2,
      agentName: 'Sofia',
      agentImage: sofiaImg,
      clientName: 'Pedro Costa',
      clientImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      businessType: 'Consultoria Financeira',
      subtitle: 'IA Especialista em Fechamento',
      headline: 'Feche Mais Vendas Hoje com Sofia',
      description: 'Aplica técnicas persuasivas no momento certo, eliminando objeções e dobrando sua taxa de conversão',
      conversation: {
        greeting: 'Bom dia! Em que posso auxiliá-lo?',
        response: 'Preciso de ajuda com investimentos',
        recommendation: 'Perfeito! Aqui estão as melhores opções para seu perfil:'
      },
      products: [
        { name: 'Consultoria de Investimentos', price: 'R$ 350 - Primeira consulta gratuita' },
        { name: 'Planejamento Financeiro', price: 'R$ 500 - Desconto especial 30%' }
      ],
      stats: { leads: '+64', sales: '28', satisfaction: '99%' }
    },
    {
      id: 3,
      agentName: 'Andrés',
      agentImage: andresImg,
      clientName: 'Ana Oliveira',
      clientImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      businessType: 'Suporte Técnico',
      subtitle: 'IA Especialista em Suporte',
      headline: 'Mantenha Seus Clientes Satisfeitos com Andrés',
      description: 'Resolve problemas instantaneamente, mantém clientes felizes e transforma reclamações em oportunidades de venda',
      conversation: {
        greeting: 'Olá! Como posso resolver seu problema?',
        response: 'Meu pedido ainda não chegou',
        recommendation: 'Vou verificar seu pedido agora mesmo:'
      },
      products: [
        { name: 'Pedido #12345', price: 'Status: Em transporte - Chegada prevista: Amanhã' },
        { name: 'Rastreamento', price: 'Código: BR123456789 - Atualizado há 2h' }
      ],
      stats: { leads: '+45', sales: '52', satisfaction: '97%' }
    }
  ];

  const currentCase = casesData[selectedAgent] || casesData[0];

  const nextCase = () => {
    const newIndex = (selectedAgent + 1) % casesData.length;
    onAgentChange(newIndex);
  };

  const prevCase = () => {
    const newIndex = selectedAgent === 0 ? casesData.length - 1 : selectedAgent - 1;
    onAgentChange(newIndex);
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in" data-aos="fade-right">
            <p className="text-lg text-muted-foreground mb-4 font-medium" data-aos="fade-up" data-aos-delay="200">
              {currentCase.subtitle}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight" data-aos="fade-up" data-aos-delay="400">
              {currentCase.headline.split(' ').map((word, index) => {
                const agentKeywords = ['Jhon', 'Camila', 'Sofia', 'Andrés'];
                const highlightKeywords = ['Leads', 'Clientes', 'Vendas', 'Satisfeitos'];
                
                if (agentKeywords.includes(word)) {
                  return <span key={index} className="gradient-text">{word} </span>;
                } else if (highlightKeywords.includes(word)) {
                  return <span key={index} className="gradient-text">{word} </span>;
                } else {
                  return <span key={index}>{word} </span>;
                }
              })}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
              {currentCase.description}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg w-full sm:w-auto hover:opacity-90 hover:scale-105 transition-all duration-200"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Quero a {currentCase.agentName} na Minha Equipe
            </Button>
          </div>
          
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white"
              onClick={prevCase}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white"
              onClick={nextCase}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Case Study Card */}
            <Card className="p-4 sm:p-6 shadow-2xl floating-animation min-h-[500px] sm:min-h-[600px] flex flex-col touch-scroll">
              {/* Header with Client Info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground text-sm ml-4">Chat ao Vivo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img 
                    src={currentCase.clientImage} 
                    alt={currentCase.clientName}
                    className="w-6 h-6 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="text-sm text-muted-foreground">{currentCase.clientName}</span>
                </div>
              </div>
              
              {/* Chat Conversation */}
              <div className="space-y-4 flex-1">
                <div className="flex items-start space-x-3">
                  <img 
                    src={currentCase.agentImage} 
                    alt={currentCase.agentName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {currentCase.agentName} - {currentCase.businessType}
                    </div>
                    <div className="bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] text-white p-3 rounded-lg rounded-tl-none max-w-xs chat-bubble">
                      {currentCase.conversation.greeting}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-lg rounded-tr-none max-w-xs">
                    {currentCase.conversation.response}
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <img 
                    src={currentCase.agentImage} 
                    alt={currentCase.agentName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div 
                      className="text-white p-3 rounded-lg rounded-tl-none max-w-xs"
                      style={{ backgroundColor: 'hsl(168, 100%, 42%)' }}
                    >
                      {currentCase.conversation.recommendation}
                      <div className="mt-3 space-y-2">
                        {currentCase.products.map((product, index) => (
                          <div key={index} className="bg-white text-gray-800 p-2 rounded text-sm">
                            <div className="font-semibold">{product.name}</div>
                            <div className="text-green-600">{product.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'hsl(168, 100%, 42%)' }}>
                    {currentCase.stats.leads}
                  </div>
                  <div className="text-xs text-muted-foreground">{t('leadsToday')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'hsl(168, 100%, 42%)' }}>
                    {currentCase.stats.sales}
                  </div>
                  <div className="text-xs text-muted-foreground">{t('sales')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'hsl(168, 100%, 42%)' }}>
                    {currentCase.stats.satisfaction}
                  </div>
                  <div className="text-xs text-muted-foreground">{t('satisfaction')}</div>
                </div>
              </div>
            </Card>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 space-x-3">
              {casesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onAgentChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedAgent 
                      ? 'bg-[hsl(168,100%,42%)] scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
