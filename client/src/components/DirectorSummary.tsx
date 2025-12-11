import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Layers, GitBranch, Database, Users, DollarSign, Building2 } from "lucide-react";

const problemDomains = [
  {
    icon: Zap,
    title: "Engineering Velocity",
    description: "Accelerating delivery through self-service CI/CD and platform automation"
  },
  {
    icon: Shield,
    title: "AI Governance",
    description: "Enabling compliant AI adoption with policy-as-code and data pipelines"
  },
  {
    icon: Layers,
    title: "GTM Modernization",
    description: "Unifying fragmented systems into single sources of truth"
  },
  {
    icon: GitBranch,
    title: "Developer Experience",
    description: "Building platforms engineers actually want to use"
  },
  {
    icon: Database,
    title: "Data Unification",
    description: "Consolidating enterprise data to enable AI and analytics at scale"
  }
];

const scopeItems = [
  {
    icon: Users,
    value: "100+",
    label: "Engineers Supported"
  },
  {
    icon: Layers,
    value: "20+",
    label: "Enterprise Systems"
  },
  {
    icon: DollarSign,
    value: "$11B+",
    label: "GTM Pipeline Exposure"
  },
  {
    icon: Building2,
    value: "15+",
    label: "Engineering Orgs"
  }
];

export default function DirectorSummary() {
  return (
    <section className="py-16 bg-card/30" id="director-summary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - What I Solve For */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Solve For</h2>
              <p className="text-muted-foreground max-w-2xl">
                The category of problems I own—where platform leadership meets business impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {problemDomains.map((domain, index) => {
                const Icon = domain.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-5 rounded-lg border border-border/50 bg-background/50 hover-elevate"
                    data-testid={`card-solve-${index}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
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
          </div>

          {/* Sidebar - Scope of Ownership */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-primary mb-4">
                    Scope of Ownership
                  </h3>
                  <div className="space-y-4">
                    {scopeItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-center gap-3" data-testid={`scope-item-${index}`}>
                          <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <div className="text-xl font-bold text-primary font-mono leading-tight">
                              {item.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
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
        </div>
      </div>
    </section>
  );
}
