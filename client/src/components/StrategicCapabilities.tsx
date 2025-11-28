import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

export default function StrategicCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const cards = section.querySelectorAll("[data-capability-card]");
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const triggerPoint = window.innerHeight * 0.3;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top <= triggerPoint) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Platform Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven capabilities across enterprise consolidation, deployment acceleration, and AI governance—delivered at scale.
          </p>
        </div>

        {/* Sticky Cards */}
        <div className="relative space-y-12 md:space-y-48">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isActive = index <= activeIndex;

            return (
              <div
                key={index}
                data-capability-card
                className="relative"
              >
                <div className="md:sticky md:top-24 md:h-96">
                  <Card
                    className={`h-full transition-all duration-500 transform ${
                      isActive
                        ? "opacity-100 scale-100 hover-elevate"
                        : "opacity-60 scale-95"
                    }`}
                    data-testid={`card-capability-${index}`}
                  >
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{capability.title}</h3>
                            {capability.company && (
                              <p className="text-sm text-muted-foreground">
                                {capability.company} • {capability.period}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {capability.description}
                      </p>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {capability.metrics.map((metric, i) => (
                          <div key={i} className="space-y-1">
                            <div className="text-lg font-bold text-primary font-mono">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Impact Story */}
                      <div className="mt-auto pt-6 border-t">
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                          {capability.impact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="mt-20 flex justify-center gap-2">
          {capabilities.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const cards = sectionRef.current?.querySelectorAll("[data-capability-card]");
                if (cards?.[index]) {
                  (cards[index] as HTMLElement).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                }
              }}
              className={`h-2 rounded-full transition-all ${
                index <= activeIndex
                  ? "bg-primary w-8"
                  : "bg-muted w-2 hover:bg-muted-foreground"
              }`}
              data-testid={`button-capability-progress-${index}`}
              aria-label={`Go to ${capabilities[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
