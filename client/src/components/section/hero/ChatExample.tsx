import { AgentMessage } from "./types";

interface ChatExampleProps {
  chatMessages: AgentMessage[];
}

export function ChatExample({ chatMessages }: ChatExampleProps) {
  return (
    <div className="flex flex-col items-center justify-center min-w-md">
      <div className="w-full bg-white border border-gray-200 rounded-xl p-6 lg:p-8 min-h-[320px] flex flex-col justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="space-y-4">
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.from === "user" ? "justify-start" : "justify-end"
                }`}
            >
              <div
                className={`px-4 py-2 rounded-lg shadow-sm text-sm ${msg.from === "user"
                  ? "bg-gray-100 text-gray-900"
                  : "bg-brand-gradient text-white"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
