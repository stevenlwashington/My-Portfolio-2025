import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Zap, Shield } from "lucide-react";

interface Capability {
  icon: typeof Building2;
  title: string;
  headline: string;
  metrics: Array<{ value: string; label: string }>;
  story: string;
  company?: string;
}

const capabilities: Capability[] = [
  {
    icon: Building2,
    title: "Salesforce Consolidation",
    company: "Zillow",
    headline: "Unified 4 orgs into a single platform supporting $1.5B+ in revenue",
    metrics: [
      { value: "4 → 1", label: "Orgs Consolidated" },
      { value: "50K+", label: "Users Enabled" },
      { value: "-70%", label: "Integration Complexity" },
      { value: "$1B+", label: "Regulatory Risk Mitigated" }
    ],
    story: "Unified fragmented Salesforce infrastructure serving GTM teams. Embedded compliance controls directly into platform, automating TCPA/CPRA requirements. Gained unified customer view enabling better sales efficiency and service quality across 2,500+ users."
  },
  {
    icon: Zap,
    title: "CI/CD Acceleration",
    company: "Zillow",
    headline: "Release cycles from days to minutes. 80% faster GTM execution.",
    metrics: [
      { value: "Days → Minutes", label: "Release Cycle" },
      { value: "+80%", label: "GTM Velocity" },
      { value: "100+", label: "Engineers Enabled" },
      { value: "$450K", label: "Annual Savings" }
    ],
    story: "Built on-demand CI/CD platform with automated testing pipelines and self-service deployment. Architected enterprise data consolidation unifying 16 years of history into clean, AI-ready format. Reduced data storage costs while enabling new AI/ML initiatives at scale."
  },
  {
    icon: Shield,
    title: "AI Governance at Scale",
    company: "Zillow",
    headline: "Policy-as-code governance enabling responsible AI innovation without compromise",
    metrics: [
      { value: "16 Years", label: "Data Unified" },
      { value: "TCPA/CPRA", label: "Compliance" },
      { value: "$450K", label: "Annual Savings" },
      { value: "100%", label: "Audit Coverage" }
    ],
    story: "Built governance into platform infrastructure through policy-as-code frameworks, automated audit trails, and compliance controls. Teams ship AI features quickly while staying compliant. Governance is invisible infrastructure enabling innovation without increasing risk."
  }
];

function CapabilitySection({ capability, index }: { capability: Capability; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const Icon = capability.icon;

  // Smooth opacity transitions
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 1]);
  const metricsOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.9, 1], [0, 1, 1, 1]);
  const storyOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.9, 1], [0, 1, 1, 1]);
  
  const headlineY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const metricsY = useTransform(scrollYProgress, [0.15, 0.35], [40, 0]);
  const storyY = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Icon and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">{capability.company}</h3>
            <h2 className="text-4xl md:text-5xl font-bold">{capability.title}</h2>
          </div>
        </motion.div>

        {/* Headline - reveals first */}
        <motion.p
          style={{ opacity: headlineOpacity, y: headlineY }}
          className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl"
        >
          {capability.headline}
        </motion.p>

        {/* Metrics - reveals second */}
        <motion.div
          style={{ opacity: metricsOpacity, y: metricsY }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 rounded-lg bg-card/50 border border-border/50"
        >
          {capability.metrics.map((metric, i) => (
            <div key={i} className="space-y-2">
              <div className="text-3xl font-bold text-primary font-mono">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Story - reveals last */}
        <motion.div
          style={{ opacity: storyOpacity, y: storyY }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-base text-muted-foreground leading-relaxed">
            {capability.story}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function StrategicCapabilities() {
  return (
    <section className="py-12">
      {/* Section intro - always visible */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Platform Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scroll through proven capabilities. Each story reveals as you explore.
          </p>
        </motion.div>
      </div>

      {/* Scroll-driven sections */}
      {capabilities.map((capability, index) => (
        <CapabilitySection key={index} capability={capability} index={index} />
      ))}

      <div className="h-12" />
    </section>
  );
}
