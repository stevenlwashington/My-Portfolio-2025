import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const valueProps = [
  {
    title: "Platform Modernization That Drives Adoption",
    description: "I don't just build platforms—I build platforms that engineers actually want to use. By treating infrastructure as a product, I create developer experiences that eliminate friction, automate repetitive work, and become the obvious choice. The result: organic adoption, faster delivery, and measurable velocity gains."
  },
  {
    title: "GTM Velocity Through Unified Systems",
    description: "Fragmented systems kill go-to-market speed. I unify Salesforce orgs, integrate telemetry, and consolidate data sources into a single source of truth. Sales and service teams get instant access to reliable information, managers get better insights, and the business moves faster with confidence."
  },
  {
    title: "Responsible AI Governance at Scale",
    description: "AI innovation needs trust. I design governance frameworks where compliance isn't a bottleneck—it's built into the platform. Clean data pipelines, automated audit trails, and policy-as-code enable teams to ship AI features quickly while staying compliant with TCPA, CPRA, and responsible AI standards."
  },
  {
    title: "Developer Experience as a Force Multiplier",
    description: "When engineers spend less time fighting tools and more time building features, velocity compounds. I obsess over DevEx: clear APIs, fast CI/CD, reliable testing, and self-service capabilities. Happy engineers ship faster, with fewer bugs, and with greater confidence."
  },
  {
    title: "Data as the Foundation for Everything",
    description: "Models, insights, and automation are only as good as the data behind them. I specialize in unifying fragmented systems into clean, trustworthy datasets that power AI training, predictive analytics, and operational automation. Better data means better decisions and faster outcomes."
  }
];

export default function WhyHireSteven() {
  return (
    <section className="py-20 md:py-24 bg-card/30" id="why-hire">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Hire Steven</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            What you get: A leader who turns platform complexity into organizational velocity—with proven 
            results across enterprise GTM systems, AI governance, and developer productivity.
          </p>
        </div>

        <div className="space-y-6">
          {valueProps.map((prop, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
              <CardContent className="p-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{prop.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supporting Evidence */}
        <Card className="mt-12 border-primary/20 bg-primary/5">
          <CardContent className="p-8">
            <p className="text-center text-muted-foreground">
              These capabilities are backed by proven results: $1.6B+ platforms supported, 80% velocity improvements, 
              $5M+ in cost savings, and 15k+ users enabled across Zillow, T-Mobile, and AWS.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
