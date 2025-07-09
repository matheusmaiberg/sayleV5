import { Badge } from "@/components/ui/badge";

interface Agent {
  name: string;
  role: string;
  image: string;
  features: string[];
  color: string;
}

interface AgentImageProps {
  agent: Agent;
}

export function AgentImage({ agent }: AgentImageProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-96 h-80 rounded-xl overflow-hidden shadow-2xl mb-4 transition-all duration-300 group">
        <img
          src={agent.image}
          alt={`Agente ${agent.name}`}
          className="w-full h-full object-cover object-top"
        />

        {/* Agent Information Overlay - Always visible, bottom 40% only */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 flex flex-col justify-end">
          <div className="space-y-3">
            {/* Agent Name and Role */}
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">{agent.name}</h3>
              <p className="text-sm font-medium text-gray-200">{agent.role}</p>
            </div>

            {/* Features */}
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {agent.features.slice(0, 2).map((feature, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-2 py-1 bg-white/20 text-white border-white/30 font-extralight hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    {feature}
                  </Badge>
                ))}
                {agent.features.length > 3 && (
                  <Badge
                    variant="outline"
                    className="text-xs px-2 py-1 bg-white/20 text-white border-white/30 backdrop-blur-sm"
                  >
                    +{agent.features.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
