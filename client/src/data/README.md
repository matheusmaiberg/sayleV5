# Estrutura de Dados Centralizada

Esta pasta contém todos os dados estáticos da aplicação, organizados de forma centralizada para facilitar a manutenção e evitar duplicação.

## Estrutura

```
data/
├── agents.ts          # Dados dos agents (especialistas)
├── index.ts           # Exportações centralizadas
└── README.md          # Esta documentação
```

## Agents

O arquivo `agents.ts` contém:

- **Interface `Agent`**: Define a estrutura de dados de um agente
- **Função `getAgents(t)`**: Retorna o array de agents com traduções aplicadas

### Uso

```typescript
import { getAgents } from '@/data';
import { useTranslation } from '@/hooks/useTranslation';

function MyComponent() {
  const { t } = useTranslation();
  const agents = getAgents(t);
  
  // Usar os agents...
}
```

### Estrutura do Agent

```typescript
interface Agent {
  name: string;                    // Nome do agente
  role: string;                    // Função/título (traduzido)
  icon: LucideIcon;               // Ícone do Lucide React
  color: string;                   // Classe CSS de cor
  description: string;             // Descrição curta (traduzida)
  detailedDescription: string;     // Descrição detalhada (traduzida)
  image: string;                   // URL da imagem
  features: string[];              // Lista de funcionalidades
  chat: AgentMessage[];            // Mensagens de exemplo do chat
}
```

## Benefícios

1. **DRY (Don't Repeat Yourself)**: Dados centralizados, sem duplicação
2. **Manutenibilidade**: Alterações em um só lugar
3. **Consistência**: Garantia de dados iguais em todos os componentes
4. **Tradução**: Suporte integrado para internacionalização
5. **Type Safety**: Tipos TypeScript bem definidos

## Adicionando Novos Dados

Para adicionar novos dados estáticos:

1. Crie um novo arquivo em `data/` (ex: `metrics.ts`)
2. Defina as interfaces TypeScript
3. Exporte as funções/constantes
4. Adicione as exportações no `index.ts`
5. Documente no README 