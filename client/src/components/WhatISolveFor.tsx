import { motion } from "framer-motion";
import { Zap, Shield, Layers, GitBranch, Database } from "lucide-react";

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

export default function WhatISolveFor() {
  return (
    <section className="py-16 bg-card/30" id="solve">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Solve For</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The category of problems I own—where platform leadership meets business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {problemDomains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg border border-border/50 bg-background/50 hover-elevate"
                data-testid={`card-solve-${index}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm mb-2">{domain.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{domain.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
