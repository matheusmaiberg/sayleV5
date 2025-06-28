import { Button } from '@/components/ui/button';
import { useState } from 'react';
import jhonImg from '@assets/Agente Jhon_1750439807344.png';
import camilaImg from '@assets/Agente Camila_1750439807343.png';
import sofiaImg from '@assets/Agente Sofia_1750439807345.png';
import andresImg from '@assets/Agente Andrés_1750439807343.png';
import { Cog, DollarSign, FileText, Handshake, Headphones, Heart, PieChart, RotateCcw, Search } from 'lucide-react';
import tomasImg from '@assets/Agente Tomás_1750439807346.png';
import nicolasImg from '@assets/Agente Nicolas_1750439807345.png';
import claraImg from '@assets/Agente Clara _1750439807344.png';
import gabrielImg from '@assets/Agente Gabriel_1750439807344.png';
import lisImg from '@assets/Agente Lis_1750439807345.png';
import { useTranslation } from '@/hooks/useTranslation';

export function HeroSection() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '' });
  const [submitted, setSubmitted] = useState(false);

  const agents = [
    {
      name: 'Jhon',
      role: t('agent.jhon.role'),
      icon: Search,
      color: 'bg-blue-500',
      description: t('agent.jhon.description'),
      detailedDescription: t('agent.jhon.details'),
      image: jhonImg,
      features: ['Análise de comportamento', 'Scoring de leads', 'Timing otimizado', 'Personalização automática'],
      chat: [
        { from: 'user', text: 'Oi, tudo bem?' },
        { from: 'client', text: 'Oi! Estou procurando tênis para corrida' },
        { from: 'user', text: 'Perfeito! Baseado no seu perfil, encontrei as melhores opções para você:' },
      ],
    },
    {
      name: 'Camila',
      role: t('agent.camila.role'),
      icon: Heart,
      color: 'bg-pink-500',
      description: t('agent.camila.description'),
      detailedDescription: t('agent.camila.details'),
      image: camilaImg,
      features: ['Detecção automática de idioma', 'Segmentação geográfica', 'Mensagens contextuais', 'Campanhas automatizadas'],
      chat: [
        { from: 'user', text: 'Olá! Como posso ajudá-la hoje?' },
        { from: 'client', text: 'Gostaria de saber sobre tratamentos faciais' },
        { from: 'user', text: 'Ótima escolha! Temos tratamentos especiais para você:' },
      ],
    },
    {
      name: 'Sofia',
      role: t('agent.sofia.role'),
      icon: Handshake,
      color: 'bg-green-500',
      description: t('agent.sofia.description'),
      detailedDescription: t('agent.sofia.details'),
      image: sofiaImg,
      features: ['Técnicas de fechamento', 'Tratamento de objeções', 'Gatilhos de urgência', 'Negociação inteligente'],
      chat: [
        { from: 'user', text: 'Bom dia! Em que posso auxiliá-lo?' },
        { from: 'client', text: 'Preciso de ajuda com investimentos' },
        { from: 'user', text: 'Perfeito! Aqui estão as melhores opções para seu perfil:' },
      ],
    },
    {
      name: 'Andrés',
      role: t('agent.andres.role'),
      icon: Headphones,
      color: 'bg-yellow-500',
      description: t('agent.andres.description'),
      detailedDescription: t('agent.andres.details'),
      image: andresImg,
      features: ['Suporte 24/7', 'Integração logística', 'Resolução proativa', 'Escalação inteligente'],
      chat: [
        { from: 'user', text: 'Olá! Como posso resolver seu problema?' },
        { from: 'client', text: 'Meu pedido ainda não chegou' },
        { from: 'user', text: 'Vou verificar seu pedido agora mesmo:' },
      ],
    },
    {
      name: 'Tomás',
      role: t('agent.tomas.role'),
      icon: PieChart,
      color: 'bg-purple-500',
      description: t('agent.tomas.description'),
      detailedDescription: t('agent.tomas.details'),
      image: tomasImg,
      features: ['Análise preditiva', 'Monitoramento em tempo real', 'Insights comportamentais', 'Otimização da jornada'],
      chat: [
        { from: 'user', text: 'Olá! Como posso ajudar na sua experiência?' },
        { from: 'client', text: 'Quero melhorar o atendimento' },
        { from: 'user', text: 'Vamos analisar juntos os pontos de melhoria!' },
      ],
    },
    {
      name: 'Nicolas',
      role: t('agent.nicolas.role'),
      icon: RotateCcw,
      color: 'bg-orange-500',
      description: t('agent.nicolas.description'),
      detailedDescription: t('agent.nicolas.details'),
      image: nicolasImg,
      features: ['Detecção de inatividade', 'Campanhas de win-back', 'Ofertas personalizadas', 'Análise de churn'],
      chat: [
        { from: 'user', text: 'Olá! Notei que você não interage há um tempo.' },
        { from: 'client', text: 'Verdade, estava ocupado.' },
        { from: 'user', text: 'Posso te mostrar novidades e ofertas exclusivas?' },
      ],
    },
    {
      name: 'Clara',
      role: t('agent.clara.role'),
      icon: DollarSign,
      color: 'bg-emerald-500',
      description: t('agent.clara.description'),
      detailedDescription: t('agent.clara.details'),
      image: claraImg,
      features: ['Múltiplos meios de pagamento', 'Cobrança automatizada', 'Reconciliação bancária', 'Relatórios financeiros'],
      chat: [
        { from: 'user', text: 'Olá! Precisa de ajuda com pagamentos?' },
        { from: 'client', text: 'Sim, quero regularizar minha situação.' },
        { from: 'user', text: 'Vamos facilitar isso para você agora mesmo.' },
      ],
    },
    {
      name: 'Gabriel',
      role: t('agent.gabriel.role'),
      icon: Cog,
      color: 'bg-indigo-500',
      description: t('agent.gabriel.description'),
      detailedDescription: t('agent.gabriel.details'),
      image: gabrielImg,
      features: ['Integração de sistemas', 'Fluxos automatizados', 'Sincronização de dados', 'Monitoramento de processos'],
      chat: [
        { from: 'user', text: 'Olá! Precisa automatizar algum processo?' },
        { from: 'client', text: 'Sim, quero integrar meu CRM.' },
        { from: 'user', text: 'Posso criar um fluxo automatizado para você.' },
      ],
    },
    {
      name: 'Lis',
      role: t('agent.lis.role'),
      icon: FileText,
      color: 'bg-rose-500',
      description: t('agent.lis.description'),
      detailedDescription: t('agent.lis.details'),
      image: lisImg,
      features: ['Design de funis', 'Análise comportamental', 'Otimização de conversão', 'Segmentação avançada'],
      chat: [
        { from: 'user', text: 'Olá! Vamos criar um novo processo?' },
        { from: 'client', text: 'Sim, quero melhorar meu funil.' },
        { from: 'user', text: 'Vou desenhar um funil personalizado para você.' },
      ],
    },
  ];

  const agent = agents[selected];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Conteúdo principal: header, imagem, chat, controle de agentes */}
        <div className="flex-1 flex flex-col">
          <HeaderHeroSection agentName={agent.name} />
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Imagem do agente */}
            <div className="flex-1 flex flex-col items-center">
              <img
                src={agent.image}
                alt={`Agente ${agent.name}`}
                className="w-64 h-64 rounded-2xl object-cover border-0 shadow-xl mb-4"
              />
            </div>
            {/* Exemplo Chat */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-full max-w-xs bg-white border border-gray-200 rounded-2xl p-8 min-h-[320px] flex flex-col justify-center shadow-md">
                <h2 className="text-2xl text-gray-900 text-center mb-4 font-semibold">Exemplo Chat</h2>
                <div className="space-y-3">
                  {agent.chat.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-start' : 'justify-end'}`}>
                      <div className={`px-4 py-2 rounded-lg shadow-sm ${msg.from === 'user' ? 'bg-gray-100 text-gray-900' : 'bg-primary text-white'}`}>{msg.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Controle circular de troca de agentes */}
          <div className="flex justify-center mt-10 space-x-3">
            {agents.map((a, idx) => (
              <button
                key={a.name}
                onClick={() => setSelected(idx)}
                className={`w-3 h-3 rounded-full border ${selected === idx ? 'bg-primary border-primary' : 'bg-gray-200 border-gray-300'} transition`}
                aria-label={`Selecionar agente ${a.name}`}
              />
            ))}
          </div>
        </div>
        {/* Formulário destacado lateral */}
        <div className="flex-1 w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 min-h-[500px] flex flex-col justify-center self-stretch mx-auto lg:mx-0">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Formulário</h2>
          <form className="space-y-6 flex-1 flex flex-col justify-center" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Nome Completo"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="E-mail corporativo"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <input
                type="tel"
                name="whatsapp"
                required
                placeholder="WhatsApp"
                value={form.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-primary/80 transition">
              Enviar
            </Button>
            {submitted && (
              <p className="text-primary text-sm mt-2">Solicitação enviada! Entraremos em contato em breve.</p>
            )}
          </form>
        </div>
      </div>
      {/* Cards de métricas ponta a ponta */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl font-bold text-primary mb-1">3x</span>
          <span className="text-gray-700 text-center">Leads mais qualificados</span>
        </div>
        <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl font-bold text-primary mb-1">75%</span>
          <span className="text-gray-700 text-center">De suas conversas resolvidas com clientes.</span>
        </div>
        <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl font-bold text-primary mb-1">{'<5 seg'}</span>
          <span className="text-gray-700 text-center">Ao responder às mensagens de seus clientes.</span>
        </div>
      </div>
    </section>
  );
}

function HeaderHeroSection({ agentName }: { agentName: string }) {
  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight" style={{fontFamily: 'Inter, sans-serif'}}>Feche Mais Vendas Hoje com {agentName}</h1>
      <p className="text-lg text-gray-700 mb-10 max-w-2xl" style={{fontFamily: 'Inter, sans-serif'}}>Aplica técnicas persuasivas no momento certo, eliminando objeções e dobrando sua taxa de conversão</p>
    </>
  );
}
