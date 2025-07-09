import { Agent } from "@/data";

interface AgentSelectorProps {
  agents: Agent[];
  selected: number;
  onSelect: (index: number) => void;
}

export function AgentSelector({
  agents,
  selected,
  onSelect,
}: AgentSelectorProps) {
  return (
    <div className="flex justify-center mt-4 space-x-4">
      {agents.map((agent, idx) => {
        const IconComponent = agent.icon;
        return (
          <button
            key={agent.name}
            onClick={() => onSelect(idx)}
            className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${selected === idx
                ? "bg-brand-gradient text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            aria-label={`Selecionar agente ${agent.name}`}
          >
            <IconComponent size={20} />
          </button>
        );
      })}
    </div>
  );
}
