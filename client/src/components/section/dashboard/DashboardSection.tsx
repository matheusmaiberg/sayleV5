import { Card } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { Monitor, Users, TrendingUp, DollarSign, Activity, Clock, CheckCircle } from 'lucide-react';

export function DashboardSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
              <Monitor className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Em tempo real
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('dashboardExperience')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('dashboardSubtitle')}
          </p>
        </div>
        
        {/* Dashboard Preview */}
        <Card className="p-4 sm:p-8 shadow-2xl bg-card/80 backdrop-blur-sm border border-border/50">
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 space-y-4 sm:space-y-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Dashboard Sayle.ai</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Visão geral em tempo real</p>
            </div>
            <div className="flex items-center space-x-2 bg-accent/30 px-3 py-2 rounded-full">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary text-sm font-medium">{t('allAgentsOnline')}</span>
            </div>
          </div>
          
          {/* Stats Grid - Mobile Responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
            <Card className="p-3 sm:p-6 bg-accent/10 border border-accent/20">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <div className="text-lg sm:text-3xl font-bold text-accent">1,247</div>
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">Conversas Ativas</div>
            </Card>
            
            <Card className="p-3 sm:p-6 bg-primary/10 border border-primary/20">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <div className="text-lg sm:text-3xl font-bold text-primary">89</div>
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">Leads Qualificados</div>
            </Card>
            
            <Card className="p-3 sm:p-6 bg-green-500/10 border border-green-500/20">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <div className="text-lg sm:text-3xl font-bold text-green-500">43</div>
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">Negociações</div>
            </Card>
            
            <Card className="p-3 sm:p-6 bg-secondary/10 border border-secondary/20">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-secondary">R$ 127k</div>
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">Receita Gerada</div>
            </Card>
          </div>
          
          {/* Recent Conversations - Mobile Optimized */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="w-5 h-5 text-[#2AE87C]" />
              <h4 className="text-lg font-semibold text-foreground">{t('recentConversations')}</h4>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <Card className="p-3 sm:p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">A</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground text-sm sm:text-base truncate">Ana - Vendas</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{t('convertedLead')}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-green-500 text-sm sm:text-base">R$ 8.999</div>
                    <div className="text-xs text-muted-foreground">2 min atrás</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-3 sm:p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">P</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground text-sm sm:text-base truncate">Paulo - Suporte</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{t('resolvedDoubt')}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#2AE87C]" />
                      <span className="font-bold text-[#2AE87C] text-sm sm:text-base">{t('resolved')}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">5 min atrás</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-3 sm:p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">M</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground text-sm sm:text-base truncate">Maria - Cobrança</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{t('negotiatedInstallment')}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-orange-500 text-sm sm:text-base">{t('agreementMade')}</div>
                    <div className="text-xs text-muted-foreground">8 min atrás</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Performance Indicators */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#2AE87C]">95%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Taxa de Resposta</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-blue-500">2.3s</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Tempo Médio</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-green-500">78%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Conversão</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-purple-500">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Disponibilidade</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
