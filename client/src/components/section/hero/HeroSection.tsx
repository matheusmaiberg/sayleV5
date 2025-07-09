import { useState } from "react";
import {
  HeaderHeroSection,
  AgentImage,
  ChatExample,
  AgentSelector,
  ContactFormComponent,
} from "./index";
import { useTranslation } from "@/hooks/useTranslation";
import { getAgents } from "@/data";

export function HeroSection() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);

  const agents = getAgents(t);
  const agent = agents[selected];

  // Métricas pré-definidas


  return (
    <section className="pt-20 pb-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5">
        {/* Conteúdo principal: header, imagem, chat, controle de agentes */}
        <div className="flex-1 flex flex-col lg:pr-6">
          <HeaderHeroSection agentName={agent.name} />
          <div className="flex flex-col md:flex-row items-start grow gap-4 lg:gap-4 mt-4">
            {/* Imagem do agente */}
            <div>
              <AgentImage agent={agent} />
            </div>
            {/* Exemplo Chat */}
            <div className="flex-1 max-w-sm">
              <ChatExample chatMessages={agent.chat} />
            </div>
          </div>
          {/* Controle circular de troca de agentes */}
          <AgentSelector
            agents={agents}
            selected={selected}
            onSelect={setSelected}
          />
        </div>
        {/* Formulário destacado lateral */}
        <ContactFormComponent />
      </div>
    </section>
  );
}
