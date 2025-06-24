import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  Instagram,
  Globe,
  Phone,
  Mail,
  ArrowRight,
  Check
} from 'lucide-react';

export function OmnichannelSection() {
  const { t } = useTranslation();

  const channels = [
    {
      name: "WhatsApp",
      icon: MessageSquare,
      color: "bg-green-500",
      description: "Atendimento direto no app favorito dos brasileiros"
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "bg-pink-500",
      description: "Direct e comentários convertidos em vendas"
    },
    {
      name: "Website",
      icon: Globe,
      color: "bg-blue-500",
      description: "Chat integrado que nunca para de vender"
    },
    {
      name: "Telegram",
      icon: MessageSquare,
      color: "bg-sky-500",
      description: "Alcance global com atendimento local"
    },
    {
      name: "E-mail",
      icon: Mail,
      color: "bg-red-500",
      description: "Respostas inteligentes para toda caixa de entrada"
    },
    {
      name: "Telefone",
      icon: Phone,
      color: "bg-yellow-500",
      description: "Integração com discadores e centrais telefônicas"
    }
  ];

  const benefits = [
    "Centralize todas as conversas em um só lugar",
    "Conecte-se com todas as APIs disponíveis", 
    "Gerencie leads de forma inteligente"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Mockup */}
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl relative">
              {/* Lead List Interface */}
              <div className="bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] rounded-2xl p-4 mb-6">
                <h3 className="text-white font-bold text-lg">Lead List - Sayle.ai</h3>
              </div>

              {/* Lead Items */}
              <div className="space-y-4 mb-8">
                {[1, 2, 3].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-slate-50 dark:bg-slate-700 rounded-xl">
                    <div className="w-10 h-10 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-slate-300 dark:bg-slate-600 rounded mb-2"></div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
                    </div>
                    <div className="w-8 h-8 bg-[#2AE87C] rounded-lg flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Channel Icons */}
              <div className="absolute -left-4 top-1/4 space-y-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-100">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute -left-4 bottom-1/4 space-y-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-200">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-300">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute -right-4 top-1/3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-400">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Connection Lines */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="w-full h-full">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2AE87C" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0AD4CA" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <path d="M50,100 Q200,50 350,150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                  <path d="M50,200 Q200,150 350,250" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-100" />
                  <path d="M50,300 Q200,250 350,350" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-200" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 order-1 lg:order-2" data-aos="fade-left">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Esteja onde seu <span className="bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] bg-clip-text text-transparent">cliente está</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Integração completa com todas as plataformas que seus clientes já usam. Uma única IA, múltiplos canais, experiência unificada.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#2AE87C] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Channel Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-8">
              {channels.map((channel, index) => (
                <div key={index} className="group">
                  <div className={`${channel.color} rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                    <channel.icon className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">{channel.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-[#00D6AB] text-white px-8 py-4 text-lg hover:bg-[#00b898] hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Quero atendimento omnichannel
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}