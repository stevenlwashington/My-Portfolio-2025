import { Resend } from "resend";
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { GoogleGenAI } from "@google/genai";

const resend = new Resend(process.env.RESEND_API_KEY);

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

      // 1) Notify you (lands in your inbox)
      await resend.emails.send({
        from: `Steven Washington <${process.env.CONTACT_FROM_EMAIL}>`,
        to: process.env.CONTACT_TO_EMAIL!,
        replyTo: email,
        subject: `New message from stevenwa.com — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      // 2) Auto-reply to the sender
      await resend.emails.send({
        from: `Steven Washington <${process.env.CONTACT_FROM_EMAIL}>`,
        to: email,
        replyTo: process.env.CONTACT_TO_EMAIL!,
        subject: `Thank you for your message`,
        text: `Hi ${name},\n\nThanks for reaching out. I received your message and will follow up within 48 hours.\n\n If there’s anything else you’d like to add, feel free to reply directly to this email — it’ll come straight to me.\n\n— Steven`,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Failed to send message" });
    }
  });

  // Company industry/context lookup for tailored value propositions
  const companyContextMap: Record<string, { industry: string; focus: string; challenges: string }> = {
    "amazon": { industry: "E-commerce & Cloud", focus: "marketplace velocity, seller experience, AWS enterprise sales", challenges: "scale, operational efficiency, platform reliability at massive volume" },
    "zillow": { industry: "Residential Real Estate", focus: "GTM velocity, agent/customer platforms, real estate data", challenges: "market fluctuations, regulatory compliance, data unification across listings" },
    "anthropic": { industry: "AI Safety & Research", focus: "responsible AI, governance frameworks, developer platforms", challenges: "AI governance at scale, safety-first development, enterprise AI adoption" },
    "openai": { industry: "AI & ML Platforms", focus: "AI product development, developer experience, enterprise APIs", challenges: "responsible AI deployment, platform scalability, governance frameworks" },
    "google": { industry: "Technology & Advertising", focus: "ads platforms, cloud infrastructure, developer tools", challenges: "platform modernization, cross-product data unification, GTM velocity" },
    "microsoft": { industry: "Enterprise Software & Cloud", focus: "enterprise productivity, Azure, developer platforms", challenges: "legacy modernization, enterprise data governance, platform consolidation" },
    "salesforce": { industry: "CRM & Enterprise Platforms", focus: "customer data platforms, GTM tooling, integration ecosystems", challenges: "multi-org consolidation, release velocity, AppExchange governance" },
    "stripe": { industry: "Fintech & Payments", focus: "payment infrastructure, developer experience, compliance", challenges: "regulatory compliance (PCI, AML), platform reliability, global expansion" },
    "toast": { industry: "Restaurant Technology", focus: "restaurant operations, POS systems, merchant growth", challenges: "scaling merchant platforms, operational efficiency, data-driven insights" },
    "meta": { industry: "Social Media & Advertising", focus: "ads platforms, creator tools, enterprise infrastructure", challenges: "platform governance, data privacy compliance, velocity at scale" },
    "netflix": { industry: "Streaming & Entertainment", focus: "content delivery, personalization, studio operations", challenges: "platform performance, data infrastructure, global scaling" },
    "uber": { industry: "Mobility & Delivery", focus: "marketplace platforms, driver/rider experience, logistics", challenges: "real-time systems, regulatory compliance, platform reliability" },
    "airbnb": { industry: "Travel & Hospitality", focus: "host/guest platforms, trust & safety, marketplace velocity", challenges: "regulatory compliance, platform trust, cross-region data governance" },
    "shopify": { industry: "E-commerce Platforms", focus: "merchant tools, checkout experience, partner ecosystems", challenges: "platform scalability, merchant data insights, velocity for SMBs" },
    "t-mobile": { industry: "Telecommunications", focus: "frontline productivity, customer service, sales operations", challenges: "legacy platform modernization, user experience at scale, TCO optimization" },
    "verizon": { industry: "Telecommunications", focus: "enterprise GTM, network services, customer platforms", challenges: "digital transformation, platform consolidation, operational efficiency" },
    "boeing": { industry: "Aerospace & Defense", focus: "manufacturing systems, supply chain, engineering platforms", challenges: "compliance, data governance, legacy system modernization" },
    "nvidia": { industry: "Semiconductors & AI", focus: "AI/ML platforms, developer ecosystems, enterprise compute", challenges: "platform scaling, developer experience, enterprise AI enablement" },
  };

  // Value proposition generator endpoint
  app.post("/api/generate-value-prop", async (req, res) => {
    try {
      const { companyName } = req.body;

      if (!companyName || typeof companyName !== "string" || !companyName.trim()) {
        return res.status(400).json({ error: "Company name is required" });
      }

      // Look up company context (case-insensitive)
      const normalizedName = companyName.trim().toLowerCase();
      const companyContext = companyContextMap[normalizedName];
      
      let industryContext = "";
      if (companyContext) {
        industryContext = `
Known Context for ${companyName}:
- Industry: ${companyContext.industry}
- Key Focus Areas: ${companyContext.focus}
- Common Challenges: ${companyContext.challenges}

Use this context to make the value proposition highly relevant to their specific industry and challenges.`;
      } else {
        industryContext = `
Note: ${companyName} is not in our known database. Infer their likely industry and challenges based on the company name. If it's clearly a tech company, focus on platform engineering and velocity. If it's a traditional enterprise, focus on modernization and efficiency. If unsure, keep it general but strategic.`;
      }

      const prompt = `You are writing a concise, executive-level value proposition for Steven Washington, a Principal/Director-level Platform & AI Product Leader, tailored specifically to ${companyName}.

Steven's Background:
- 16+ years delivering technology, data, and platform solutions
- Platform engineering + AI + GTM/RevOps expertise
- Key metrics: $11B+ cumulative revenue supported, 80% deployment velocity acceleration
- Experience at Zillow ($1.6B+ revenue platform) and T-Mobile (15k+ users)
- Specializes in: platform modernization, AI governance, velocity improvements, GTM tooling, data unification
${industryContext}

Requirements:
1. Write a 2-4 sentence value proposition in a senior, strategic, executive tone
2. Opening alignment statement that directly references ${companyName}'s industry or known focus areas (e.g., "For ${companyName}'s [specific domain]...")
3. Connect Steven's relevant strengths to their specific challenges
4. Include 1-2 quantified credibility anchors (80% velocity lift, $1.6B+ revenue platform, 15k+ users, $11B+ cumulative revenue)
5. Closing strategic outcome tied to their business goals
6. Match Steven's brand: senior, clear, strategic, no tangents, no verbosity, no filler
7. Tone should read like a VP-to-C-suite briefing
8. DO NOT hallucinate specific internal ${companyName} projects or initiatives
9. Make the connection to their industry feel authentic and informed

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
