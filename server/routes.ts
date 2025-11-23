import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body with zod schema
      const validationResult = contactFormSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Validation failed", 
          details: validationResult.error.errors 
        });
      }

      const { name, email, message } = validationResult.data;

      // TODO: Integrate with Resend to send email
      // For now, just log the contact form submission
      console.log("Contact form submission:", { name, email, message });

      // In production, this would send an email to stevenlwashington@gmail.com
      // Example:
      // await resend.emails.send({
      //   from: 'portfolio@yourdomain.com',
      //   to: 'stevenlwashington@gmail.com',
      //   subject: `Portfolio Contact from ${name}`,
      //   html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong><br/>${message}</p>`
      // });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
