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
│   ├── src/
│   ├── public/            # Arquivos estáticos
│   └── index.html
├── server/                # Backend Express
│   ├── index.ts
│   ├── routes.ts
│   ├── utils.ts
│   └── vite.ts           # Configuração Vite para servidor
├── shared/                # Código compartilhado
├── attached_assets/       # Assets do projeto
└── env.example           # Exemplo de variáveis
```

## 🔧 Solução de Problemas

### Erro de Porta em Uso
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

### Erro de Dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de TypeScript
```bash
npm run check
```

## 🌐 Deploy

### Coolify (Recomendado)
1. Conecte seu repositório no Coolify
2. Configure as variáveis de ambiente
3. Deploy automático

### Vercel/Netlify
1. Configure build command: `npm run build`
2. Configure output directory: `dist/public`
3. Configure as variáveis de ambiente

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
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

## 📞 Suporte

Para dúvidas ou problemas:
- Abra uma issue no repositório
- Consulte a documentação do Facebook Conversion API
- Verifique os logs do servidor

---

**Sayle.ai** - Transformando atendimento com IA conversacional 🤖 