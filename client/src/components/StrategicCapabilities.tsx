import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Zap, Shield } from "lucide-react";

interface Capability {
  icon: typeof Building2;
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string }>;
  impact: string;
  company?: string;
  period?: string;
}

const capabilities: Capability[] = [
  {
    icon: Building2,
    title: "Salesforce Consolidation",
    company: "Zillow",
    period: "2020-2023",
    description: "Unified 4 production orgs serving 50K+ users, eliminating data silos and reducing integration complexity by 70%",
    metrics: [
      { label: "Orgs Consolidated", value: "4 → 1" },
      { label: "Users Enabled", value: "50K+" },
      { label: "Integration Complexity", value: "-70%" },
      { label: "Revenue Supported", value: "$1.5B+" }
    ],
    impact: "Successfully unified fragmented Salesforce infrastructure into a single platform supporting $1.5B+ in GTM revenue. Embedded compliance controls directly into platform, automating TCPA/CPRA requirements and mitigating $1B+ in regulatory risk."
  },
  {
    icon: Zap,
    title: "CI/CD Acceleration",
    company: "Zillow",
    period: "2023-Present",
    description: "Built on-demand deployment pipelines reducing release cycles from weeks to minutes, enabling 80% faster GTM execution",
    metrics: [
      { label: "Release Cycle", value: "Days → Minutes" },
      { label: "GTM Velocity", value: "+80%" },
      { label: "Engineers Enabled", value: "100+" },
      { label: "Annual Savings", value: "$450K" }
    ],
    impact: "Designed on-demand CI/CD platform with automated testing and self-service deployment. Architected enterprise data consolidation pipelines unifying 16 years of history into clean, AI-ready format. Reduced data storage costs by $450K annually."
  },
  {
    icon: Shield,
    title: "AI Governance at Scale",
    company: "Zillow",
    period: "2023-Present",
    description: "Designed TCPA/CPRA-compliant data pipelines for 16 years of enterprise data, enabling responsible AI innovation",
    metrics: [
      { label: "Data History", value: "16 Years" },
      { label: "Compliance", value: "TCPA/CPRA" },
      { label: "Annual Savings", value: "$450K" },
      { label: "Innovation Speed", value: "No Compromise" }
    ],
    impact: "Built governance into the platform itself with policy-as-code frameworks, automated audit trails, and compliance controls. Teams ship AI features quickly while staying compliant. Governance is invisible infrastructure enabling innovation without risk."
  }
];

function CapabilityCard({ capability, index }: { capability: Capability; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const Icon = capability.icon;

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <div ref={ref} className="relative h-96 flex items-center justify-center">
      <motion.div
        style={{ opacity, scale }}
        className="sticky top-1/2 -translate-y-1/2 w-full max-w-3xl px-6"
      >
        <Card className="hover-elevate" data-testid={`card-capability-${index}`}>
          <CardContent className="p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{capability.title}</h3>
                {capability.company && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {capability.company} • {capability.period}
                  </p>
                )}
              </div>
            </div>

            <p className="text-muted-foreground mb-6">{capability.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 rounded-lg bg-card/50 border border-border/50">
              {capability.metrics.map((metric, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xl font-bold text-primary font-mono">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Impact:</span> {capability.impact}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default function StrategicCapabilities() {
  return (
    <section className="py-12 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Strategic Platform Capabilities</h2>
          <p className="text-muted-foreground">
            Scroll through proven capabilities. Each card reveals as you explore.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {capabilities.map((capability, index) => (
          <CapabilityCard key={index} capability={capability} index={index} />
        ))}
      </div>

      <div className="h-8" />
    </section>
  );
}
