import { Calendar, Users, Rocket, BarChart } from 'lucide-react';

export interface ImplementationStep {
  icon: React.ComponentType<{ className?: string }>;
  step: string;
  title: string;
  description: string;
  timeframe: string;
  color: string;
  tasks: string[];
}

export const implementationSteps: ImplementationStep[] = [
  {
    icon: Calendar,
    step: "1",
    title: "strategicBriefing", // Translation key
    description: "briefingImplementation", // Translation key
    timeframe: "timeframe1", // Translation key
    color: 'from-blue-500 to-blue-600',
    tasks: ['task1.1', 'task1.2', 'task1.3']
  },
  {
    icon: Users,
    step: "2", 
    title: "aiConfiguration", // Translation key
    description: "configurationImplementation", // Translation key
    timeframe: "timeframe2", // Translation key
    color: 'from-purple-500 to-purple-600',
    tasks: ['task2.1', 'task2.2', 'task2.3']
  },
  {
    icon: Rocket,
    step: "3",
    title: "integrationTesting", // Translation key
    description: "integrationImplementation", // Translation key
    timeframe: "timeframe3", // Translation key
    color: 'from-orange-500 to-orange-600',
    tasks: ['task3.1', 'task3.2', 'task3.3']
  },
  {
    icon: BarChart,
    step: "4",
    title: "goLiveOptimization", // Translation key
    description: "optimizationImplementation", // Translation key
    timeframe: "timeframe4", // Translation key
    color: 'from-green-500 to-green-600',
    tasks: ['task4.1', 'task4.2', 'task4.3']
  }
];
