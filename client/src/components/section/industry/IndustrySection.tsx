import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { ShoppingCart, Stethoscope, Home, Store, ChevronLeft, ChevronRight } from 'lucide-react';

export function IndustrySection() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const industries = [
    {
      title: t('ecommerce'),
      description: t('ecommerceDesc'),
      icon: ShoppingCart,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      accent: 'from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20'
    },
    {
      title: t('clinics'),
      description: t('clinicsDesc'),
      icon: Stethoscope,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      accent: 'from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20'
    },
    {
      title: t('realEstate'),
      description: t('realEstateDesc'),
      icon: Home,
      color: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      accent: 'from-yellow-100 to-yellow-200 dark:from-yellow-900/20 dark:to-yellow-800/20'
    },
    {
      title: t('retail'),
      description: t('retailDesc'),
      icon: Store,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      accent: 'from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-secondary/50 to-secondary/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('infinitePossibilities')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('amplifyOpportunities')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="200">
          {industries.map((industry, index) => (
            <Card key={index} className="p-8 text-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className={`w-20 h-20 ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[#2AE87C] transition-colors">
                {industry.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Mobile: Carousel Layout */}
        <div className="md:hidden relative" data-aos="fade-up" data-aos-delay="200">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {industries.map((industry, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 text-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl mx-2">
                    <div className={`w-24 h-24 ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <industry.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {industry.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          </button>

          {/* Mobile Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 hover:scale-125 ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] rounded-full shadow-lg shadow-[#2AE87C]/30' 
                    : 'w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <Button
            className="text-white px-8 py-4 text-lg font-semibold w-full sm:w-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: 'hsl(168, 100%, 42%)' }}
          >
            {t('wantSolution')}
          </Button>
        </div>
      </div>
    </section>
  );
}
