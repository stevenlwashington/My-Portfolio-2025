import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, GitBranch, Database, DollarSign, Shield, Users, Building2, Layers, Quote } from "lucide-react";

const problemDomains = [
  {
    icon: Zap,
    title: "Engineering Velocity",
    description: "Accelerating delivery through self-service CI/CD and platform automation"
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

const peopleOrgMetrics = [
  {
    icon: Users,
    value: "100+",
    label: "Engineers Unlocked"
  },
  {
    icon: Building2,
    value: "15+",
    label: "Engineering Orgs Aligned"
  }
];

const systemsBusinessMetrics = [
  {
    icon: Layers,
    value: "20+",
    label: "Enterprise Systems Consolidated"
  },
  {
    icon: DollarSign,
    value: "$11B+",
    label: "Revenue Pipeline Impact"
  }
];

export default function DirectorSummary() {
  return (
    <section className="py-24 md:py-32" id="director-summary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-cyan-400">How I Drive Value</h2>
          <p className="text-white/80 max-w-3xl leading-relaxed">
            I build capabilities that reduce toil, accelerate delivery, and turn complex systems into leverage.
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-cyan-400">Impact at Scale</h3>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            The scope and outcomes I've been accountable for across platform, data, and revenue systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.1)] h-full">
              <CardContent className="p-6">
                <h4 className="text-sm font-bold uppercase tracking-wide text-cyan-400 mb-5">
                  People & Orgs
                </h4>
                <div className="space-y-4">
                  {peopleOrgMetrics.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-3" data-testid={`scope-people-${index}`}>
                        <div className="p-2 rounded-md bg-cyan-500/10 flex-shrink-0">
                          <Icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-cyan-400 font-mono leading-tight">
                            {item.value}
                          </div>
                          <div className="text-xs text-white/70">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.1)] h-full">
              <CardContent className="p-6">
                <h4 className="text-sm font-bold uppercase tracking-wide text-cyan-400 mb-5">
                  Systems & Business Impact
                </h4>
                <div className="space-y-4">
                  {systemsBusinessMetrics.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-3" data-testid={`scope-systems-${index}`}>
                        <div className="p-2 rounded-md bg-cyan-500/10 flex-shrink-0">
                          <Icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-cyan-400 font-mono leading-tight">
                            {item.value}
                          </div>
                          <div className="text-xs text-white/70">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative px-6 py-8 rounded-lg bg-slate-800/30 border border-cyan-500/10">
            <Quote className="w-8 h-8 text-cyan-500/30 absolute top-4 left-4" />
            <blockquote className="pl-8">
              <p className="text-white/90 italic text-base md:text-lg leading-relaxed mb-4">
                "Steven consistently took ownership of the hardest cross-org problems—especially where platform decisions directly impacted velocity and revenue outcomes."
              </p>
              <footer className="text-sm text-white/50">
                — Senior Engineering Leader
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
