# Sayle.ai - Landing Page

Landing page da Sayle.ai com integração Facebook Conversion API.

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Variáveis de Ambiente
Copie o arquivo `env.example` para `.env` e configure as variáveis:

```bash
cp env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
# Configurações do Servidor
NODE_ENV=development
FRONTEND_PORT=3000
BACKEND_PORT=5000
SERVER_HOST=0.0.0.0

# Facebook Conversion API (opcional)
FACEBOOK_API_KEY=your_facebook_api_key_here
FACEBOOK_PIXEL_ID=your_pixel_id_here
FACEBOOK_ACCESS_TOKEN=your_access_token_here
```

### 3. Executar em Desenvolvimento
```bash
npm run dev
```

O servidor estará disponível em:
- **Aplicação Completa**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

### 4. Executar Apenas Frontend (Desenvolvimento)
```bash
npm run dev:client
```

O frontend estará disponível em:
- **Frontend**: http://localhost:3000

### 5. Build de Produção
```bash
npm run build
npm start
```

## 📱 Facebook Conversion API

### Configuração
1. Crie um app no Facebook Developers
2. Configure o Pixel ID
3. Gere um Access Token
4. Adicione as variáveis no `.env`

### Endpoints Disponíveis
- `POST /api/facebook/conversion` - Envia conversões customizadas
- `POST /api/leads` - Captura leads e envia conversão automaticamente

### Exemplo de Uso
```javascript
// Enviar conversão customizada
fetch('/api/facebook/conversion', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    event_name: 'Purchase',
    event_data: { value: 100, currency: 'BRL' },
    user_data: { em: 'user@email.com' }
  })
});

// Capturar lead
fetch('/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'João Silva',
    email: 'joao@email.com',
    phone: '11999999999',
    company: 'Empresa ABC'
  })
});
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Executa servidor completo (frontend + backend na porta 5000)
- `npm run dev:client` - Executa apenas frontend (porta 3000)
- `npm run build` - Build de produção
- `npm run preview` - Preview do build
- `npm start` - Executa em produção
- `npm run check` - Verifica tipos TypeScript

## 📁 Estrutura do Projeto

```
sayleV5/
├── client/                 # Frontend React
│   ├── src/               # Código-fonte do frontend
│   │   ├── components/    # Componentes React
│   │   ├── hooks/         # Custom hooks
│   │   ├── contexts/      # Contextos React
│   │   └── pages/         # Páginas da aplicação
│   ├── public/            # Arquivos estáticos
│   └── index.html         # Ponto de entrada
├── server/                # Backend Express
│   ├── index.ts           # Configuração do servidor
│   ├── routes.ts          # Definição de rotas
│   ├── utils.ts           # Funções utilitárias
│   └── vite.ts            # Configuração Vite
├── shared/                # Código compartilhado
├── docs/                  # Documentação do projeto
├── attached_assets/       # Assets do projeto
└── env.example           # Exemplo de variáveis
```

## 👥 Como Contribuir

1. **Faça um Fork** do repositório
2. **Crie uma Branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a Branch (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Padrões de Commit

Utilizamos o [Conventional Commits](https://www.conventionalcommits.org/):
- `feat`: Nova funcionalidade
- `fix`: Correção de bugs
- `docs`: Atualização de documentação
- `style`: Formatação, ponto e vírgula, etc. (não altera código)
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Atualização de tarefas, configurações, etc.

Exemplo:
```bash
git commit -m "feat: adiciona integração com Facebook API"
```

## 🔧 Solução de Problemas

### Erros Comuns

#### Porta em Uso
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

#### Problemas de Dependências
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### Erros de TypeScript
```bash
# Verificar erros
tsc --noEmit

# Ou usando o script configurado
npm run check
```

#### Problemas com o Facebook API
- Verifique se as variáveis de ambiente estão corretas
- Confirme se o token de acesso está ativo
- Verifique as permissões do aplicativo no Facebook Developers

#### Build Falhando
```bash
# Limpar cache do Vite
rm -rf node_modules/.vite

# Reinstalar dependências
npm install
```

## 🌐 Deploy

### Pré-requisitos
- Node.js 18+
- npm 8+
- Variáveis de ambiente configuradas

### Opções de Deploy

#### 1. Coolify (Recomendado)
1. Faça login no [Coolify](https://coolify.io/)
2. Conecte seu repositório
3. Configure as variáveis de ambiente:
   ```env
   NODE_ENV=production
   FACEBOOK_API_KEY=seu_token_aqui
   FACEBOOK_PIXEL_ID=seu_pixel_id
   FACEBOOK_ACCESS_TOKEN=seu_token_acesso
   ```
4. Defina o comando de build: `npm run build`
5. Defina o diretório de saída: `dist/public`
6. Habilite o auto-deploy

#### 2. Vercel/Netlify
1. Importe o repositório
2. Configure as variáveis de ambiente
3. Defina as configurações de build:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Node Version**: 18.x

#### 3. Docker
```dockerfile
# Estágio de build
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Estágio de produção
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package*.json ./
RUN npm ci --only=production
COPY --from=build /app/dist ./dist
COPY --from=build /app/server ./server

EXPOSE 5000
CMD ["node", "dist/server/index.js"]
```

#### 4. Deploy Manual
1. Instale as dependências:
   ```bash
   npm ci --only=production
   ```
2. Faça o build da aplicação:
   ```bash
   npm run build
   ```
3. Inicie o servidor:
   ```bash
   NODE_ENV=production node dist/server/index.js
   ```

### Variáveis de Ambiente de Produção
Certifique-se de configurar as seguintes variáveis em produção:
```env
NODE_ENV=production
FRONTEND_PORT=3000
BACKEND_PORT=5000
FACEBOOK_API_KEY=seu_token_aqui
FACEBOOK_PIXEL_ID=seu_pixel_id
FACEBOOK_ACCESS_TOKEN=seu_token_acesso
```

## 📊 Monitoramento

- **Health Check**: `/api/health`
- **Logs**: Console com timestamps
- **Facebook API**: Status no log de inicialização

## 🔒 Segurança

- Variáveis sensíveis em `.env`
- CORS configurado
- Validação de entrada com Zod
- Sanitização de dados do Facebook

## 🐛 Reportando Bugs

1. Verifique se o bug já foi reportado nas [Issues](https://github.com/seu-usuario/sayleV5/issues)
2. Se não encontrar, crie uma nova issue com:
   - Descrição clara do problema
   - Passos para reproduzir
   - Comportamento esperado vs. atual
   - Capturas de tela (se aplicável)
   - Ambiente (navegador, SO, versão do Node)

## 📚 Recursos Adicionais

- [Documentação do React](https://reactjs.org/)
- [Documentação do Vite](https://vitejs.dev/)
- [Facebook Conversion API](https://developers.facebook.com/docs/marketing-api/conversions-api/)
- [Guia de Estilo](https://github.com/airbnb/javascript)

## 📞 Suporte

Para suporte adicional:
- 📧 Email: suporte@sayle.ai
- 📱 [Discord](https://discord.gg/sayle) (comunidade de desenvolvedores)
- 📝 [Fórum](https://github.com/seu-usuario/sayleV5/discussions)

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

**Sayle.ai** - Transformando atendimento com IA conversacional 🤖 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)