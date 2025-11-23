import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Zillow",
    role: "Platform Product Lead, Revenue & AI",
    period: "2023-Present",
    outcomes: [
      "Architected enterprise data pipelines consolidating 16 years of history for AI training, saving $450k/yr",
      "Built the on-demand CI/CD platform for Salesforce engineering—reducing release cycles from days to minutes",
      "Increased GTM delivery velocity by 80%"
    ]
  },
  {
    company: "Zillow",
    role: "Sr. Salesforce Product Manager, Frontline Engineering",
    period: "2020-2023",
    outcomes: [
      "Modernized Zillow's Salesforce architecture and unified 4 orgs into a single GTM platform supporting $1.6B+ in annual revenue",
      "Added product analytics and platform telemetry to drive data-informed roadmap decisions",
      "Embedded TCPA/CPRA controls mitigating $1B+ in regulatory risk"
    ]
  },
  {
    company: "T-Mobile",
    role: "Sr. Product Manager, Product & Tech",
    period: "2019-2020",
    outcomes: [
      "Modernized T-Mobile's Salesforce Sales and Service Clouds for 15k+ frontline users",
      "Cut page load times by 50%",
      "Eliminated $5M+ in annual operational costs"
    ]
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "Product Manager, Global Business Operations",
    period: "2016-2019",
    outcomes: [
      "Owned global pricing and billing infrastructure for AWS's $120B+ Enterprise Discount Program",
      "Modernized quote-to-cash systems",
      "Expanded seller-of-record capabilities into 18 EU markets"
    ]
  },
  {
    company: "LivingSocial, Microsoft (Merkle), San Diego Padres",
    role: "Career Foundations",
    period: "2008–2015",
    outcomes: [
      "Roles across product analytics, sales operations, and customer experience",
      "Provided early experience in revenue operations, data insights, forecasting, and frontline customer engagement",
      "Foundational context I draw on when building platforms for sellers and service teams"
    ]
  }
];

export default function ImpactTimeline() {
  return (
    <section className="py-20 md:py-24" id="impact">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Impact History</h2>
          <p className="text-lg text-muted-foreground">
            A track record of building platforms that accelerate teams and deliver measurable results.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20" data-testid={`card-experience-${index}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <Card className="hover-elevate transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div>
                        <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-semibold text-primary">{exp.company}</span>
                          <Badge variant="secondary">{exp.period}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        Key Outcomes
                      </p>
                      <ul className="space-y-2">
                        {exp.outcomes.map((outcome, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground">
                            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
