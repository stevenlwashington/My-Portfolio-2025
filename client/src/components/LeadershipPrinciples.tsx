import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Layers, Database } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Responsible AI & Governance",
    description: "AI innovation must scale with trust. I design governance layers, audit trails, and data pipelines that make LLM development safe and compliant—so teams can ship AI features faster without increasing risk or operational overhead."
  },
  {
    icon: Layers,
    title: "Platform as a Product",
    description: "A platform succeeds when it becomes the obvious choice. I design systems that remove friction, automate the repetitive work, and enable engineers focus on high-value delivery. By treating platform engineering like a true product—clear roadmaps, strong DevEx, measurable outcomes—I enable faster releases and smoother execution."
  },
  {
    icon: Database,
    title: "Data as a Strategic Asset",
    description: "Models are only as good as the data behind them. I unify fragmented systems (Salesforce, Gong, telemetry, data lakes) into clean, trustworthy, AI-ready datasets—the foundation for predictive insights, automation, and improved revenue operations."
  }
];

export default function LeadershipPrinciples() {
  return (
    <section className="py-20 md:py-24" id="principles">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Leadership Principles</h2>
          <p className="text-lg text-muted-foreground">
            I build platforms that accelerate engineering velocity and deliver measurable 
            business impact. My focus is responsible AI, lovable developer experiences, and 
            turning enterprise data into products that unlock revenue, efficiency, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300"
                data-testid={`card-principle-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
