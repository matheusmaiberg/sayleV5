import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/card';
import { Shield, Brain, Users, Target } from 'lucide-react';

export function PerformanceSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: t('noHallucinations'),
      subtitle: t('guaranteedAccuracy'),
      description: t('noHallucinationsDesc'),
      color: 'bg-green-500'
    },
    {
      icon: Brain,
      title: t('humanization'),
      subtitle: t('naturalPersonality'),
      description: t('humanizationDesc'),
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: t('humanEscalation'),
      subtitle: t('intelligentTransfer'),
      description: t('humanEscalationDesc'),
      color: 'bg-purple-500'
    },
    {
      icon: Target,
      title: t('continuousLearning'),
      subtitle: t('improvesWithTime'),
      description: t('continuousLearningDesc'),
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t('noHallucinations')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('aiTrainedSpecifically')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center border border-border hover:shadow-lg transition-shadow duration-300">
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">{feature.subtitle}</p>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Demo Chat Example */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'hsl(168, 100%, 42%)' }}
              >
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Sayle.ai</div>
                <div className="text-sm text-muted-foreground">{t('aiNaturalPersonality')}</div>
              </div>
            </div>
            <div 
              className="text-white p-4 rounded-lg rounded-tl-none mb-4"
              style={{ backgroundColor: 'hsl(168, 100%, 42%)' }}
            >
              {t('aiGreetingExample')}
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-lg rounded-tr-none mb-4 ml-8">
              {t('impressiveResponse')}
            </div>
            <div 
              className="text-white p-4 rounded-lg rounded-tl-none"
              style={{ backgroundColor: 'hsl(168, 100%, 42%)' }}
            >
              {t('understandHowWorks')}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}