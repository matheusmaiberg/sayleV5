import { Card } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { Monitor, Users, TrendingUp, DollarSign, Activity, Clock, CheckCircle } from 'lucide-react';

export function DashboardSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] flex items-center justify-center shadow-lg">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm font-medium text-[#2AE87C] bg-[#2AE87C]/10 px-3 py-1 rounded-full">
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
        <Card className="p-4 sm:p-8 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 space-y-4 sm:space-y-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Dashboard Sayle.ai</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Visão geral em tempo real</p>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 dark:text-green-400 text-sm font-medium">{t('allAgentsOnline')}</span>
            </div>
          </div>
          
          {/* Stats Grid - Mobile Responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
            <Card className="p-3 sm:p-6 bg-gradient-to-br from-[#2AE87C]/10 to-[#0AD4CA]/5 border border-[#2AE87C]/20">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-[#2AE87C]" />
                <div className="text-lg sm:text-3xl font-bold text-[#2AE87C]">1,247</div>
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">Conversas Ativas</div>
            </Card>
            
            <Card className="p-3 sm:p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <div className="text-lg sm:text-3xl font-bold text-blue-500">89</div>
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">Leads Qualificados</div>
            </Card>
            
            <Card className="p-3 sm:p-6 bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <div className="text-lg sm:text-3xl font-bold text-green-500">43</div>
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">Negociações</div>
            </Card>
            
            <Card className="p-3 sm:p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-purple-500">R$ 127k</div>
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
