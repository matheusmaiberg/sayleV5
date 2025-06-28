import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { getLocalIP } from "./utils";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = parseInt(process.env.BACKEND_PORT || "5000");
  const host = process.env.SERVER_HOST || "0.0.0.0";
  const domain = process.env.DOMAIN;
  
  server.listen(
    {
      port,
      host,
    },
    () => {
      const localIP = getLocalIP();
      
      log("🚀 Servidor Sayle.ai iniciado com sucesso!");
      
      if (domain) {
        log(`🌐 Domínio customizado: https://${domain}`);
      }
      
      log(`📍 Local: http://localhost:${port}`);
      log(`🌍 Rede: http://${localIP}:${port}`);
      log(`⚡ Modo: ${app.get("env")}`);
      
      if (process.env.FACEBOOK_API_KEY) {
        log("📱 Facebook Conversion API: Configurada");
      } else {
        log("⚠️  Facebook Conversion API: Não configurada (defina FACEBOOK_API_KEY)");
      }
    }
  );
})();
