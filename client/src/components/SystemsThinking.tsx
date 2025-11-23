import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Database, Layers, Shield, Bot, Zap, ArrowRight } from "lucide-react";

const systemNodes = [
  {
    id: "data",
    icon: Database,
    title: "Data",
    description: "Unified enterprise data from fragmented systems (Salesforce, Gong, telemetry, data lakes) into clean, trustworthy datasets ready for AI and analytics."
  },
  {
    id: "platform",
    icon: Layers,
    title: "Platform",
    description: "Developer-friendly infrastructure that removes friction, automates repetitive work, and makes the right thing the easy thing through strong DevEx and clear APIs."
  },
  {
    id: "governance",
    icon: Shield,
    title: "Governance",
    description: "Policy-as-code frameworks, audit trails, and compliance controls (TCPA, CPRA, Responsible AI) that enable teams to move fast without increasing risk."
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI",
    description: "LLM development, model training, and AI features built on clean data pipelines with built-in governance—allowing safe, fast innovation at scale."
  },
  {
    id: "gtm",
    icon: Zap,
    title: "GTM",
    description: "Go-to-market teams empowered by unified systems, automated workflows, and reliable platforms that enable faster execution with confidence and trust."
  }
];

export default function SystemsThinking() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-24" id="systems">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Systems Thinking</h2>
          <p className="text-lg text-muted-foreground">
            How platform components connect to create organizational velocity and business impact.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {systemNodes.map((node, index) => {
              const Icon = node.icon;
              const isHovered = hoveredNode === node.id;
              
              return (
                <div key={node.id} className="flex items-center gap-2 md:gap-4">
                  <Card
                    className={`w-full md:w-32 transition-all duration-300 cursor-pointer ${
                      isHovered ? 'border-primary shadow-lg scale-105' : 'hover-elevate'
                    }`}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    data-testid={`card-system-${node.id}`}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                      <div className={`p-3 rounded-lg ${isHovered ? 'bg-primary' : 'bg-primary/10'} transition-colors`}>
                        <Icon className={`h-6 w-6 ${isHovered ? 'text-primary-foreground' : 'text-primary'}`} />
                      </div>
                      <div className="font-semibold text-sm">{node.title}</div>
                    </CardContent>
                  </Card>
                  {index < systemNodes.length - 1 && (
                    <ArrowRight className="hidden md:block h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Node Descriptions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemNodes.map((node) => {
            const Icon = node.icon;
            return (
              <Card
                key={node.id}
                className={`transition-all duration-300 ${
                  hoveredNode === node.id ? 'border-primary shadow-lg' : ''
                }`}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{node.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {node.description}
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
