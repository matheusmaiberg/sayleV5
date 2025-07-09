export interface AgentMessage {
  from: "user" | "client";
  text: string;
}

// Re-export the Agent type from the centralized data
export type { Agent } from '@/data';

export interface ContactForm {
  name: string;
  email: string;
  whatsapp: string;
}
