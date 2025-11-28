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
    impact: "Successfully unified fragmented Salesforce infrastructure into a single platform supporting $1.5B+ in GTM revenue. Embedded compliance controls directly into platform, automating TCPA/CPRA requirements and mitigating $1B+ in regulatory risk. Platform telemetry enabled data-informed decisions."
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
    impact: "Designed and implemented on-demand CI/CD platform for Salesforce engineering with automated testing pipelines and self-service deployment. Simultaneously architected enterprise data consolidation pipelines unifying 16 years of history into clean, AI-ready format. Reduced data storage costs by $450K annually while enabling new AI/ML initiatives."
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
    impact: "Built governance into the platform itself—policy-as-code frameworks, automated audit trails, and compliance controls enable teams to ship AI features quickly while staying compliant. Designed systems where governance is invisible infrastructure, allowing innovation to accelerate without increasing risk."
  }
];

function CapabilityCard({ capability, index }: { capability: Capability; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const Icon = capability.icon;

  // Animations driven by scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3, 1], [100, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 1]);

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const descOpacity = useTransform(scrollYProgress, [0.1, 0.4, 1], [0, 1, 1]);
  const metricsOpacity = useTransform(scrollYProgress, [0.2, 0.5, 1], [0, 1, 1]);
  const impactOpacity = useTransform(scrollYProgress, [0.3, 0.6, 1], [0, 1, 1]);

  return (
    <div ref={ref} className="relative h-[500px] md:h-screen flex items-center justify-center py-20">
      <motion.div
        style={{ opacity, y, scale }}
        className="sticky top-1/2 -translate-y-1/2 w-full max-w-4xl px-6"
      >
        <Card
          className="hover-elevate transition-all"
          data-testid={`card-capability-${index}`}
        >
          <CardContent className="p-8 md:p-12">
            {/* Header */}
            <motion.div style={{ opacity: headerOpacity }} className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{capability.title}</h3>
                  {capability.company && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {capability.company} • {capability.period}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              style={{ opacity: descOpacity }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              {capability.description}
            </motion.p>

            {/* Metrics Grid */}
            <motion.div
              style={{ opacity: metricsOpacity }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 rounded-lg bg-card/50 border border-border"
            >
              {capability.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-2"
                >
                  <div className="text-2xl font-bold text-primary font-mono">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Impact Story */}
            <motion.div
              style={{ opacity: impactOpacity }}
              className="pt-6 border-t"
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Impact: </span>
                {capability.impact}
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default function StrategicCapabilities() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gradient-to-b from-transparent via-primary/5 to-transparent" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Platform Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scroll through proven capabilities across enterprise consolidation, deployment acceleration, and AI governance—each revealing impact as you explore.
          </p>
        </motion.div>
      </div>

      {/* Scroll-Driven Cards */}
      <div className="relative">
        {capabilities.map((capability, index) => (
          <CapabilityCard key={index} capability={capability} index={index} />
        ))}
      </div>

      {/* Breathing Room */}
      <div className="h-12" />
    </section>
  );
}
