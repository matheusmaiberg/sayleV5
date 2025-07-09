import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Target,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users
} from 'lucide-react';

export function FeaturesRoadmapSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: MessageSquare,
      title: "Centralize as conversas em uma única tela",
      subtitle: "(WhatsApp, chat do site, Instagram, Messenger e Telegram).",
      description: "Gerencie todos os canais de comunicação em um só lugar"
    },
    {
      icon: BarChart3,
      title: "Distribua os atendimentos para as lojas físicas",
      subtitle: "e equipe de vendedores.",
      description: "Organize sua equipe de vendas de forma inteligente"
    },
    {
      icon: Target,
      title: "Envie o link de pagamento e efetive",
      subtitle: "a transação.",
      description: "Converta conversas em vendas automaticamente"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como transformamos seu <span className="bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] bg-clip-text text-transparent">atendimento</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8" data-aos="fade-right">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#008060] font-medium mb-2">
                    {feature.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                size="lg"
                className="bg-[#00D6AB] text-white px-8 py-4 text-lg hover:bg-[#00b898] hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Ver demonstração agora
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-[#00D6AB] text-[#00D6AB] hover:bg-[#00D6AB] hover:text-white px-8 py-4 text-lg transition-all duration-200"
              >
                Conheça o produto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Side - Chat Mockup */}
          <div className="relative" data-aos="fade-left">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 shadow-2xl">
              {/* Chat Interface Mockup */}
              <div className="bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-xl">
                {/* Chat Header */}
                <div className="bg-[#2AE87C] p-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-[#2AE87C]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Chat ao Vivo</p>
                    <p className="text-white/80 text-sm">+300% conversões</p>
                  </div>
                  <div className="ml-auto flex space-x-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 h-80 overflow-y-auto">
                  {/* AI Message */}
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-[#2AE87C] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-600 rounded-2xl p-3 max-w-xs">
                      <p className="text-sm text-slate-700 dark:text-slate-200">
                        Olá! Como posso ajudar você hoje? 😊
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">9:32</p>
                    </div>
                  </div>

                  {/* Customer Message */}
                  <div className="flex items-start space-x-2 justify-end">
                    <div className="bg-[#2AE87C] rounded-2xl p-3 max-w-xs">
                      <p className="text-sm text-white">
                        Preciso de informações sobre seus produtos
                      </p>
                      <p className="text-xs text-white/80 mt-1">9:33</p>
                    </div>
                    <div className="w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    </div>
                  </div>

                  {/* AI Response with Product */}
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-[#2AE87C] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-slate-100 dark:bg-slate-600 rounded-2xl p-3 max-w-xs">
                        <p className="text-sm text-slate-700 dark:text-slate-200">
                          Perfeito! Baseado no seu perfil, recomendo:
                        </p>
                      </div>
                      
                      {/* Product Card */}
                      <div className="bg-white dark:bg-slate-700 rounded-xl p-3 border border-slate-200 dark:border-slate-600 max-w-xs">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] rounded-lg flex items-center justify-center">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">Plano Premium</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Por R$ 497/mês</p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs text-[#2AE87C] font-medium">90% OFF</span>
                          <Button size="sm" className="bg-[#2AE87C] hover:bg-[#2AE87C]/90 text-white text-xs px-3 py-1">
                            Comprar
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-slate-100 dark:bg-slate-600 rounded-2xl p-3 max-w-xs">
                        <p className="text-sm text-slate-700 dark:text-slate-200">
                          Quer que eu configure tudo para você? 🚀
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">9:34</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-center space-x-4 py-2">
                    <div className="flex items-center space-x-1 text-xs text-[#2AE87C]">
                      <TrendingUp className="w-3 h-3" />
                      <span>+127 leads hoje</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-[#2AE87C]">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>43 vendas</span>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-600">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-slate-100 dark:bg-slate-600 rounded-full px-4 py-2">
                      <p className="text-sm text-slate-500 dark:text-slate-400">Digite sua mensagem...</p>
                    </div>
                    <div className="w-8 h-8 bg-[#2AE87C] rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating WhatsApp Button */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}