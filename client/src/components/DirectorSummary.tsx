import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, GitBranch, Database, DollarSign, Shield, Quote } from "lucide-react";

const problemDomains = [
  {
    icon: Zap,
    title: "Engineering Velocity",
    description: "Accelerating delivery through self-service developer systems and platform automation."
  },
  {
    icon: GitBranch,
    title: "Developer Experience",
    description: "Building self-service platforms engineers choose—not ones they're forced to use"
  },
  {
    icon: Database,
    title: "Unified Data Fabric",
    description: "Consolidating enterprise data to enable reliable analytics and AI at scale"
  },
  {
    icon: DollarSign,
    title: "Revenue Systems Acceleration",
    description: "Fixing broken GTM flows caused by fragmented CRM, data, and tooling"
  },
  {
    icon: Shield,
    title: "AI Governance",
    description: "Making AI safe to ship in regulated environments—without slowing teams down"
  }
];

export default function DirectorSummary() {
  return (
    <section className="py-24 md:py-32" id="director-summary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">How I Drive Value</h2>
          <p className="text-white/80 max-w-3xl leading-relaxed">
            Platforms win only when engineers choose them—adoption is earned, not mandated.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {problemDomains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 rounded-lg border border-cyan-500/20 bg-slate-800/30 hover-elevate"
                data-testid={`card-solve-${index}`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-cyan-500/10 flex-shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{domain.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{domain.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div id="impact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">Impact at Scale</h3>
          </motion.div>

          <div className="impact-grid-container mb-8">
            {[
              { value: "100+", label: "Engineers Unlocked" },
              { value: "30+", label: "Orgs Aligned" },
              { value: "20+", label: "Enterprise Systems Consolidated" },
              { value: "$11B+", label: "Revenue Pipeline Impact" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                  <CardContent className="p-6">
                    <div className="text-5xl sm:text-6xl font-bold text-cyan-400 font-mono leading-none mb-2" data-testid={`stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-white/70" data-testid={`stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="impact-quote-band mb-12"
          >
            <div className="impact-quote-inner">
              <div className="impact-quote-icon">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="impact-quote-content">
                <blockquote className="impact-quote-text">
                  "Steven consistently solved cross-organizational constraints that limited velocity—aligning scalable, secure engineering systems, implementing AI and automation responsibly, and bringing execution rigor so teams shipped faster without sacrificing reliability."
                </blockquote>
                <div className="impact-quote-attribution">
                  — Senior Engineering Leader
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
