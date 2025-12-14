import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Zap, Shield, Database, DollarSign } from "lucide-react";

interface UseCase {
  icon: typeof Building2;
  title: string;
  headline: string;
  metrics: Array<{ value: string; label: string }>;
  story: string;
  company?: string;
}

const useCases: UseCase[] = [
  {
    icon: Building2,
    title: "Salesforce Consolidation",
    company: "Zillow",
    headline: "Turning fragmented GTM systems into a single source of truth",
    metrics: [
      { value: "4 → 1", label: "Orgs Consolidated" },
      { value: "50K+", label: "Users Enabled" },
      { value: "–70%", label: "Integration Complexity" },
      { value: "$1B+", label: "Regulatory Risk Mitigated" }
    ],
    story: "Unified four Salesforce orgs into a single enterprise platform supporting GTM teams at scale. Embedded compliance and shared data models directly into core workflows. Created a foundation for faster execution, cleaner analytics, and safer AI adoption."
  },
  {
    icon: Zap,
    title: "CI/CD Acceleration",
    company: "Zillow",
    headline: "Release cycles from days to minutes",
    metrics: [
      { value: "Days → Minutes", label: "Release Cycle" },
      { value: "+80%", label: "GTM Velocity" },
      { value: "100+", label: "Engineers Enabled" },
      { value: "$450K", label: "Annual Savings" }
    ],
    story: "Built a self-service CI/CD platform with automated testing and deployment. Removed manual bottlenecks slowing delivery across teams. Velocity increased without sacrificing reliability or control."
  },
  {
    icon: Shield,
    title: "AI Governance at Scale",
    company: "Zillow",
    headline: "Shipping AI safely in regulated environments",
    metrics: [
      { value: "16 Years", label: "Data Unified" },
      { value: "TCPA/CPRA", label: "Compliant by Design" },
      { value: "$450K", label: "Annual Savings" },
      { value: "100%", label: "Audit Coverage" }
    ],
    story: "Embedded governance directly into platform infrastructure using policy-as-code and automated audits. Teams shipped AI features quickly while staying compliant. Governance became invisible infrastructure—not a blocker."
  },
  {
    icon: Database,
    title: "Enterprise Data Archival & AI Enablement",
    company: "Zillow",
    headline: "Unlocking AI and analytics from legacy data",
    metrics: [
      { value: "16+ Years", label: "Archived" },
      { value: "$450K", label: "Annual Cost Reduction" },
      { value: "AI-Ready", label: "Datasets Enabled" },
      { value: "Improved", label: "System Performance" }
    ],
    story: "Led an enterprise data archival strategy separating cold data from operational systems. Reduced cost and complexity while preserving access and governance. Established a clean foundation for analytics and AI use cases."
  },
  {
    icon: DollarSign,
    title: "Enterprise Discount Program Enablement",
    company: "AWS",
    headline: "Operationalizing complex pricing at enterprise scale",
    metrics: [
      { value: "Enterprise", label: "EDP Workflows Enabled" },
      { value: "Reduced", label: "Manual Overhead" },
      { value: "Improved", label: "Deal Accuracy" },
      { value: "Scaled", label: "Contract Compliance" }
    ],
    story: "Implemented Salesforce workflows supporting AWS enterprise discount programs. Aligned sales, finance, and legal around a single operating model. Turned complex pricing into a scalable GTM capability."
  }
];

function UseCaseSection({ useCase, index }: { useCase: UseCase; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const Icon = useCase.icon;

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 1]);
  const metricsOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.9, 1], [0, 1, 1, 1]);
  const storyOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.9, 1], [0, 1, 1, 1]);
  
  const headlineY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const metricsY = useTransform(scrollYProgress, [0.15, 0.35], [40, 0]);
  const storyY = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);

  return (
    <div ref={ref} className="relative min-h-[70vh] flex items-center justify-center py-12" data-testid={`usecase-section-${index}`}>
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <Icon className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-cyan-400">{useCase.company}</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">{useCase.title}</h2>
          </div>
        </motion.div>

        <motion.p
          style={{ opacity: headlineOpacity, y: headlineY }}
          className="text-base sm:text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl"
        >
          {useCase.headline}
        </motion.p>

        <motion.div
          style={{ opacity: metricsOpacity, y: metricsY }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 p-6 md:p-8 rounded-lg bg-slate-800/50 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
        >
          {useCase.metrics.map((metric, i) => (
            <div key={i} className="space-y-2">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-cyan-400 font-mono break-words">{metric.value}</div>
              <div className="text-xs sm:text-sm text-white/70 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          style={{ opacity: storyOpacity, y: storyY }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-base text-muted-foreground leading-relaxed">
            {useCase.story}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function StrategicCapabilities() {
  return (
    <section className="py-24 md:py-32" id="use-cases">
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">Use Cases</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A few representative platform initiatives and the outcomes they enabled.
          </p>
        </motion.div>
      </div>

      {useCases.map((useCase, index) => (
        <UseCaseSection key={index} useCase={useCase} index={index} />
      ))}

      <div className="h-12" />
    </section>
  );
}
