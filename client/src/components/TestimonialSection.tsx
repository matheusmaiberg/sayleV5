import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

export function TestimonialSection() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      text: t('testimonial1'),
      author: t('testimonial1Author'),
      role: t('testimonial1Role'),
      rating: 5,
      gradient: 'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/30'
    },
    {
      text: t('testimonial2'),
      author: t('testimonial2Author'),
      role: t('testimonial2Role'),
      rating: 5,
      gradient: 'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30'
    },
    {
      text: t('testimonial3'),
      author: t('testimonial3Author'),
      role: t('testimonial3Role'),
      rating: 5,
      gradient: 'from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/30'
    },
    {
      text: t('testimonial4'),
      author: t('testimonial4Author'),
      role: t('testimonial4Role'),
      rating: 5,
      gradient: 'from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/30'
    },
    {
      text: t('testimonial5'),
      author: t('testimonial5Author'),
      role: t('testimonial5Role'),
      rating: 5,
      gradient: 'from-teal-50 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/30'
    },
    {
      text: t('testimonial6'),
      author: t('testimonial6Author'),
      role: t('testimonial6Role'),
      rating: 5,
      gradient: 'from-orange-50 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/30'
    },
    {
      text: t('testimonial7'),
      author: t('testimonial7Author'),
      role: t('testimonial7Role'),
      rating: 5,
      gradient: 'from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/30'
    },
    {
      text: t('testimonial8'),
      author: t('testimonial8Author'),
      role: t('testimonial8Role'),
      rating: 5,
      gradient: 'from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/30'
    },
    {
      text: t('testimonial9'),
      author: t('testimonial9Author'),
      role: t('testimonial9Role'),
      rating: 5,
      gradient: 'from-indigo-50 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/30'
    }
  ];

  // Auto-slide with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  const totalSlides = Math.ceil(testimonials.length / 3);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50/80 to-blue-50/80 dark:from-slate-900/80 dark:to-blue-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            {t('whatClientsSay')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Container */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          </button>

          {/* Mobile: Single testimonial */}
          <div className="block lg:hidden">
            <div className="px-8">
              {testimonials.slice(currentIndex, currentIndex + 1).map((testimonial, idx) => (
                <div
                  key={currentIndex}
                  className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl"
                >
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <blockquote className="text-slate-700 dark:text-slate-300 mb-8 text-lg leading-relaxed italic text-center">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="text-center border-t border-slate-200 dark:border-slate-600 pt-6">
                    <div className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Three testimonials always visible */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 px-8">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div
                key={`${currentIndex}-${idx}`}
                className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-slate-700 dark:text-slate-300 mb-8 text-lg leading-relaxed italic text-center min-h-[120px] flex items-center">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="text-center border-t border-slate-200 dark:border-slate-600 pt-6">
                  <div className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                    {testimonial.author}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`transition-all duration-300 hover:scale-125 disabled:cursor-not-allowed ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] rounded-full shadow-lg shadow-[#2AE87C]/30' 
                    : 'w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}