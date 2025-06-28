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
           {/* Left Side - Placeholder for Custom Art */}
           <div className="relative order-2 lg:order-1 flex items-center justify-center min-h-[340px] bg-transparent" data-aos="fade-right">
             {/* Espaço reservado para futura arte/ilustração personalizada */}
             <div className="w-full h-[320px] flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl bg-white/30 dark:bg-slate-800/30">
               <span className="text-slate-400 dark:text-slate-500 text-lg">Sua arte aqui</span>
             </div>
           </div>

          {/* Right Side - Content */}
          <div className="space-y-8 order-1 lg:order-2" data-aos="fade-left">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 break-words">
                Esteja onde seu <span className="bg-brand-gradient text-transparent">cliente está</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                Integração completa com todas as plataformas que seus clientes já usam. Uma única IA, múltiplos canais, experiência unificada.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-[#2AE87C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground break-words leading-snug">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 pb-2 sm:pb-0">
              <Button 
                size="lg"
                className="bg-[#00D6AB] text-white px-4 py-3 sm:px-8 sm:py-4 text-base sm:text-lg hover:bg-[#00b898] hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto"
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