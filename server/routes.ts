import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini AI using Replit AI Integrations (no API key required)
const ai = new GoogleGenAI({
  apiKey: process.env.AI_INTEGRATIONS_GEMINI_API_KEY!,
  httpOptions: {
    apiVersion: "",
    baseUrl: process.env.AI_INTEGRATIONS_GEMINI_BASE_URL!,
  },
});

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

  // Value proposition generator endpoint
  app.post("/api/generate-value-prop", async (req, res) => {
    try {
      const { companyName } = req.body;

      if (!companyName || typeof companyName !== "string" || !companyName.trim()) {
        return res.status(400).json({ error: "Company name is required" });
      }

      const prompt = `You are writing a concise, executive-level value proposition for Steven Washington, a Principal/Director-level Platform & AI Product Leader, tailored to ${companyName}.

Steven's Background:
- 16+ years delivering technology, data, and platform solutions
- Platform engineering + AI + GTM/RevOps expertise
- Key metrics: $11B+ cumulative revenue supported, 80% deployment velocity acceleration
- Experience at Zillow ($1.6B+ revenue platform) and T-Mobile (15k+ users)
- Specializes in: platform modernization, AI governance, velocity improvements, GTM tooling, data unification

Requirements:
1. Write a 2-4 sentence value proposition in a senior, strategic, executive tone
2. Opening alignment statement (e.g., "For ${companyName}, I bring...")
3. Include relevant core strengths (platform modernization, AI governance, velocity, GTM tooling, data unification)
4. Include 1-2 quantified credibility anchors (80% velocity lift, $1.6B+ revenue platform, 15k+ users, $11B+ cumulative revenue)
5. Closing strategic outcome (e.g., "helping your teams ship faster, safer, and with clearer insights")
6. Match Steven's brand: senior, clear, strategic, no tangents, no verbosity, no filler
7. Tone should read like a VP-to-C-suite briefing
8. DO NOT hallucinate specifics about ${companyName} - infer strategic alignment themes if company context is unknown
9. Focus on how Steven's expertise aligns with typical challenges in their industry or domain

Generate the value proposition now:`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const valueProp = response.text?.trim() || "";

      return res.status(200).json({ valueProp });
    } catch (error) {
      console.error("Value prop generation error:", error);
      return res.status(500).json({ error: "Failed to generate value proposition" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
