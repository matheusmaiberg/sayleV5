import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Facebook Conversion API endpoints
  app.post("/api/facebook/conversion", async (req, res) => {
    try {
      const { event_name, event_data, user_data } = req.body;
      
      if (!process.env.FACEBOOK_ACCESS_TOKEN || !process.env.FACEBOOK_PIXEL_ID) {
        return res.status(400).json({ 
          error: "Facebook Conversion API não configurada" 
        });
      }

      const conversionData = {
        data: [{
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: req.headers.referer || "https://sayle.ai",
          user_data,
          custom_data: event_data
        }],
        access_token: process.env.FACEBOOK_ACCESS_TOKEN
      };

      const response = await fetch(
        `https://graph.facebook.com/v18.0/${process.env.FACEBOOK_PIXEL_ID}/events`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(conversionData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        res.json({ success: true, message: "Conversão enviada com sucesso" });
      } else {
        res.status(400).json({ 
          error: "Erro ao enviar conversão", 
          details: result 
        });
      }
    } catch (error) {
      console.error("Erro na Facebook Conversion API:", error);
      res.status(500).json({ 
        error: "Erro interno do servidor" 
      });
    }
  });

  // Lead capture endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const { name, email, phone, company, source } = req.body;
      
      // Aqui você pode implementar o envio para Facebook Conversion API
      if (process.env.FACEBOOK_ACCESS_TOKEN && process.env.FACEBOOK_PIXEL_ID) {
        const conversionData = {
          data: [{
            event_name: "Lead",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: req.headers.referer || "https://sayle.ai",
            user_data: {
              em: email ? Buffer.from(email.toLowerCase()).toString("hex") : undefined,
              ph: phone ? Buffer.from(phone.replace(/\D/g, "")).toString("hex") : undefined,
            },
            custom_data: {
              content_name: "Lead Form",
              content_category: "Contact",
              value: 1,
              currency: "BRL"
            }
          }],
          access_token: process.env.FACEBOOK_ACCESS_TOKEN
        };

        await fetch(
          `https://graph.facebook.com/v18.0/${process.env.FACEBOOK_PIXEL_ID}/events`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(conversionData),
          }
        );
      }

      res.json({ 
        success: true, 
        message: "Lead capturado com sucesso! Entraremos em contato em breve." 
      });
    } catch (error) {
      console.error("Erro ao capturar lead:", error);
      res.status(500).json({ 
        error: "Erro interno do servidor" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      facebook_api: !!process.env.FACEBOOK_ACCESS_TOKEN
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
