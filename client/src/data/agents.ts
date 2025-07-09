import { Search, Heart, Handshake, Headphones, PieChart, RotateCcw, DollarSign, Cog, FileText } from "lucide-react";
import jhonImg from "@assets/Agente Jhon_1750439807344.png";
import camilaImg from "@assets/Agente Camila_1750439807343.png";
import sofiaImg from "@assets/Agente Sofia_1750439807345.png";
import andresImg from "@assets/Agente Andrés_1750439807343.png";
import tomasImg from "@assets/Agente Tomás_1750439807346.png";
import nicolasImg from "@assets/Agente Nicolas_1750439807345.png";
import claraImg from "@assets/Agente Clara _1750439807344.png";
import gabrielImg from "@assets/Agente Gabriel_1750439807344.png";
import lisImg from "@assets/Agente Lis_1750439807345.png";

export interface Agent {
	name: string;
	role: string;
	icon: any;
	color: string;
	description: string;
	detailedDescription: string;
	image: string;
	features: string[];
	chat: Array<{
		from: "user" | "client";
		text: string;
	}>;
}

export const getAgents = (t: (key: string) => string): Agent[] => [
	{
		name: "Jhon",
		role: t("agent.jhon.role"),
		icon: Search,
		color: "bg-blue-500",
		description: t("agent.jhon.description"),
		detailedDescription: t("agent.jhon.details"),
		image: jhonImg,
		features: ["Disparo", "Agendamento"],
		chat: [
			{ from: "user", text: "Aqui é o Jhon, falo com a Empresa Y?" },
			{ from: "client", text: "Sim!" },
			{ from: "user", text: "Perfeito! Estou entrando em contato por que temos um produto que encaixa bem ai!" },
		],
	},
	{
		name: "Camila",
		role: t("agent.camila.role"),
		icon: Heart,
		color: "bg-pink-500",
		description: t("agent.camila.description"),
		detailedDescription: t("agent.camila.details"),
		image: camilaImg,
		features: ["Detecção de idioma", "Questões de Qualificação"],
		chat: [
			{ from: "user", text: "Olá! Como posso ajudá-la hoje?" },
			{ from: "client", text: "Gostaria de saber sobre tratamentos faciais" },
			{ from: "user", text: "E qual tratamento esta pensando?" },
		],
	},
	{
		name: "Sofía",
		role: t("agent.sofia.role"),
		icon: Handshake,
		color: "bg-green-500",
		description: t("agent.sofia.description"),
		detailedDescription: t("agent.sofia.details"),
		image: sofiaImg,
		features: ["Técnicas de negociação", "Tratamento de objeções"],
		chat: [
			{ from: "user", text: "Vi o orçamento!" },
			{ from: "client", text: "E me diz, de 0 a 10 quanto gostou?" },
			{ from: "user", text: "Perfeito! Quero fechar!" },
		],
	},
	{
		name: "Andrés",
		role: t("agent.andres.role"),
		icon: Headphones,
		color: "bg-yellow-500",
		description: t("agent.andres.description"),
		detailedDescription: t("agent.andres.details"),
		image: andresImg,
		features: ["Suporte 24/7", "Integração logística"],
		chat: [
			{ from: "user", text: "Como posso resolver seu problema?" },
			{ from: "client", text: "Meu pedido ainda não chegou" },
			{ from: "user", text: "Pelo seu  telefone cadastrado achei o rastreio!" },
		],
	},
	{
		name: "Tomás",
		role: t("agent.tomas.role"),
		icon: PieChart,
		color: "bg-purple-500",
		description: t("agent.tomas.description"),
		detailedDescription: t("agent.tomas.details"),
		image: tomasImg,
		features: ["Análise preditiva", "Monitoramento em tempo real"],
		chat: [
			{ from: "user", text: "Olá! Como posso ajudar na sua experiência?" },
			{ from: "client", text: "Quero melhorar o atendimento" },
			{ from: "user", text: "Vamos analisar juntos os pontos de melhoria!" },
		],
	},
	{
		name: "Nicolas",
		role: t("agent.nicolas.role"),
		icon: RotateCcw,
		color: "bg-orange-500",
		description: t("agent.nicolas.description"),
		detailedDescription: t("agent.nicolas.details"),
		image: nicolasImg,
		features: ["Detecção de inatividade", "Campanhas de win-back"],
		chat: [
			{ from: "user", text: "Olá! Notei que você não interage há um tempo." },
			{ from: "client", text: "Verdade, estava ocupado." },
			{ from: "user", text: "Posso te mostrar novidades e ofertas exclusivas?" },
		],
	},
	{
		name: "Clara",
		role: t("agent.clara.role"),
		icon: DollarSign,
		color: "bg-emerald-500",
		description: t("agent.clara.description"),
		detailedDescription: t("agent.clara.details"),
		image: claraImg,
		features: ["Envio de fatura", "Cobrança ativa"],
		chat: [
			{ from: "user", text: "Olá! Precisa de ajuda com pagamentos?" },
			{ from: "client", text: "Sim, quero regularizar minha situação." },
			{ from: "user", text: "Vamos facilitar isso para você agora mesmo." },
		],
	},
	{
		name: "Gabriel",
		role: t("agent.gabriel.role"),
		icon: Cog,
		color: "bg-indigo-500",
		description: t("agent.gabriel.description"),
		detailedDescription: t("agent.gabriel.details"),
		image: gabrielImg,
		features: ["Integração de sistemas", "Sincronização de dados"],
		chat: [
			{ from: "user", text: "Olá! Precisa automatizar algum processo?" },
			{ from: "client", text: "Sim, quero integrar meu CRM." },
			{ from: "user", text: "Posso criar um fluxo automatizado para você." },
		],
	},
	{
		name: "Lis",
		role: t("agent.lis.role"),
		icon: FileText,
		color: "bg-rose-500",
		description: t("agent.lis.description"),
		detailedDescription: t("agent.lis.details"),
		image: lisImg,
		features: ["Design de funis", "Análise comportamental"],
		chat: [
			{ from: "user", text: "Liz! Qual foi o produto mais comprado?" },
			{
				from: "client",
				text: "Foi o da campanha com as influencers!, podemos fazer uma campanha com outros influencers iguais!",
			},
			{ from: "user", text: "Obrigada, liz!" },
		],
	},
];
