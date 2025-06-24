import { useTranslation } from '@/hooks/useTranslation';
import { Play } from 'lucide-react';

export function VideoSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Veja a Sayle em Ação
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Descubra como nossa IA conversa naturalmente com seus clientes, 
              qualifica leads automaticamente e aumenta suas vendas 24/7. 
              Em menos de 3 minutos, você verá por que centenas de empresas 
              escolheram a Sayle para revolucionar seu atendimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Demonstração em tempo real</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Resultados reais de clientes</span>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative" data-aos="fade-left">
            <div className="relative aspect-video bg-secondary rounded-2xl overflow-hidden shadow-2xl">
              {/* Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(168,100%,42%)] to-blue-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-white/30 transition-colors cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white font-medium">Clique para assistir</p>
                </div>
              </div>
              
              {/* YouTube iframe - hidden by default, shown when thumbnail is clicked */}
              <iframe
                className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Sayle AI Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[hsl(168,100%,42%)] rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}