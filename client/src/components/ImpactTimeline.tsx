import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Users, Building2, TrendingUp, ChevronRight } from "lucide-react";

interface CaseStudy {
  problem: string;
  action: string;
  result: string;
  metrics: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  outcomes: string[];
  scope?: {
    teamSize?: string;
    users?: string;
    revenue?: string;
  };
  caseStudy?: CaseStudy;
}

const experiences: Experience[] = [
  {
    company: "Zillow",
    role: "Platform Product Lead, Revenue Engineering and AI Platforms",
    period: "2023-Present",
    scope: {
      teamSize: "Led cross-functional teams (DevOps, Salesforce, Security)",
      users: "100+ engineers",
      revenue: "GTM Platform Engineering"
    },
    outcomes: [
      "Defined multi-year platform vision and drove architectural shift toward self-service CI/CD—reducing release cycles from days to minutes",
      "Secured SVP+ alignment for multi-year modernization initiative through business case development, technical deep dives, and ROI framing; partnered with principal architects on target-state data architecture",
      "Owned platform TCO strategy including data storage optimization and infrastructure cost efficiency decisions, delivering $450k/yr in annual savings while enabling responsible AI governance at scale",
      "Invited to speak at Pendomonium 2023 on 'Transforming enterprise technology with product analytics'—recognized as industry thought leader"
    ],
    caseStudy: {
      problem: "Zillow's Salesforce engineering teams faced 2-3 day release cycles due to manual deployment processes and lack of CI/CD infrastructure. This created deployment bottlenecks, increased risk, and prevented rapid iteration on revenue-critical GTM features. Meanwhile, 16 years of enterprise data sat fragmented across systems, making it difficult to leverage for AI/ML initiatives.",
      action: "I defined the multi-year platform vision and initiated an org-wide architectural shift toward self-service CI/CD. I led the design and implementation of an on-demand CI/CD platform with automated testing pipelines, validation gates, and self-service deployment capabilities. Partnered with principal architects on target-state data architecture. Made critical prioritization tradeoffs between platform reliability, operational cost, and deployment velocity. In parallel, architected enterprise data consolidation pipelines that unified historical data from multiple sources into a clean, AI-ready format with proper governance and audit trails.",
      result: "Release cycles dropped from days to minutes, enabling GTM teams to ship features 80% faster. The CI/CD platform became the standard across all Salesforce engineering. Data consolidation enabled new AI training initiatives while reducing data storage costs by $450k annually. Demonstrated platform investments directly accelerate business velocity while managing cost and reliability. Drove executive alignment across Engineering, Security, and GTM on platform roadmap priorities.",
      metrics: [
        "Release cycle: days → minutes",
        "GTM velocity: +80%",
        "Annual savings: $450K",
        "100+ engineers enabled"
      ]
    }
  },
  {
    company: "Zillow",
    role: "Sr. Salesforce Product Manager, Frontline Engineering",
    period: "2020-2023",
    scope: {
      teamSize: "Led cross-functional product and engineering workstreams across 30+ contributors (Salesforce engineers, Security, Finance)",
      users: "2,500+ sales & service reps",
      revenue: "$1.5B+ annual revenue"
    },
    outcomes: [
      "Owned multi-year platform consolidation strategy unifying 4 legacy orgs into a single GTM platform supporting $1.5B+ in annual revenue; secured executive buy-in through business case development and ROI modeling",
      "Built product analytics capability from 0 to 1—implemented platform telemetry across Salesforce to drive data-informed roadmap decisions and improve platform observability",
      "Led TCO optimization across platform: negotiated Salesforce licensing consolidation, eliminated redundant tools, and drove vendor consolidation resulting in significant cost efficiency while maintaining reliability"
    ],
    caseStudy: {
      problem: "Zillow operated 4 separate Salesforce orgs due to acquisitions and organic growth, creating data silos, duplicate workflows, and compliance gaps. GTM teams struggled with fragmented customer data, and regulatory risk (TCPA/CPRA) was difficult to manage across disconnected systems. There was no unified view of the customer journey or consistent platform telemetry to inform product decisions.",
      action: "I owned the multi-year platform consolidation strategy and led a team-of-teams initiative across Salesforce engineering, Security, and Finance to unify all 4 orgs into a single instance. I directed technical design reviews and architectural decisions on data migration, workflow standardization, and system integration. Built product analytics capability from scratch, implementing telemetry and dashboards to make the platform observable. Owned TCO strategy: negotiated Salesforce licensing terms to reflect consolidated footprint and eliminated duplicate tool subscriptions across orgs. Embedded compliance controls directly into the platform (policy-as-code for TCPA/CPRA) rather than relying on manual processes.",
      result: "Successfully unified 4 orgs into a single platform supporting $1.5B+ in revenue. Compliance became automated rather than manual, mitigating over $1B in potential regulatory risk. New product analytics capability enabled data-informed decisions, improving roadmap prioritization. GTM teams gained a unified customer view that improved sales efficiency, service quality, and team alignment. Platform became the source of truth for all GTM operations.",
      metrics: [
        "4 orgs → 1 unified platform",
        "Revenue supported: $1.5B+",
        "Regulatory risk mitigated: $1B+",
        "2,500+ users enabled"
      ]
    }
  },
  {
    company: "T-Mobile",
    role: "Sr. Product Manager, Product & Technology",
    period: "2019-2020",
    scope: {
      teamSize: "Multi-vendor platform teams",
      users: "15,000+ frontline staff",
      revenue: "Enterprise GTM platform"
    },
    outcomes: [
      "Modernized T-Mobile's Salesforce Sales and Service Clouds for 15k+ frontline users",
      "Cut page load times by 50% through architectural optimization and platform modernization",
      "Owned platform TCO strategy including vendor consolidation and redundant tool elimination, delivering $5M+ in annual cost savings while improving platform reliability"
    ],
    caseStudy: {
      problem: "T-Mobile's Salesforce platform served 15,000+ frontline users across sales and service, but years of technical debt resulted in slow page loads (8-12 seconds), poor user experience, and high operational costs from manual workarounds. Reps were frustrated, productivity suffered, and the platform couldn't scale to support business growth.",
      action: "I led a platform modernization initiative focused on performance, UX, and cost reduction. This included architectural cleanup, Lightning migration, workflow optimization, and eliminating redundant integrations. I negotiated vendor contracts and managed TCO decisions around tool consolidation, eliminating duplicate subscriptions and licensing. I worked with multi-vendor teams to rationalize the platform stack, consolidate tools, automate manual processes, and redesign the user experience around frontline workflows.",
      result: "Page load times dropped by 50%, dramatically improving rep productivity and satisfaction. Operational costs decreased by $5M+ annually through automation and tool consolidation. The modernized platform became a competitive advantage, enabling faster customer service and better sales execution at scale.",
      metrics: [
        "Page load time: -50%",
        "Annual cost savings: $5M+",
        "Users served: 15,000+",
        "Platform scalability: ✓"
      ]
    }
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "Product Manager, Global Business Operations",
    period: "2016-2019",
    scope: {
      teamSize: "Global ops & engineering",
      users: "Enterprise sales teams",
      revenue: "$20B+ private pricing programs"
    },
    outcomes: [
      "Owned global pricing and billing infrastructure for AWS's $20B+ Enterprise Discount Program",
      "Modernized quote-to-cash systems",
      "Expanded seller-of-record capabilities into 18 EU markets"
    ],
    caseStudy: {
      problem: "AWS's Enterprise Discount Program managed $20B+ in customer commitments, but legacy quote-to-cash systems created friction in pricing, contracting, and billing. Global expansion into EU markets required new seller-of-record capabilities with complex tax and compliance requirements. Manual processes couldn't scale with AWS's growth.",
      action: "I owned the end-to-end product strategy for pricing and billing infrastructure modernization. This included redesigning quote-to-cash workflows, automating manual processes, and building new capabilities for EU market expansion. I worked across finance, legal, engineering, and sales to ensure systems met both business and regulatory requirements.",
      result: "Successfully modernized quote-to-cash systems, enabling faster deal cycles and better pricing accuracy. Expanded seller-of-record capabilities into 18 EU markets, unlocking new revenue opportunities while maintaining tax and compliance integrity. The platform scaled to support AWS's continued hypergrowth.",
      metrics: [
        "Program value: $20B+",
        "EU markets: 18 new",
        "Quote-to-cash: modernized",
        "Deal cycle: faster"
      ]
    }
  },
  {
    company: "Microsoft (Merkle), LivingSocial, San Diego Padres",
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
  const [selectedCase, setSelectedCase] = useState<Experience | null>(null);

  return (
    <section className="py-24 md:py-32" id="impact">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400">Career Trajectory & Impact</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Progressive scope and responsibility across platform engineering, AI governance, and GTM systems development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20" data-testid={`card-experience-${index}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-6 w-4 h-4 rounded-full bg-cyan-500 border-4 border-background" />

                <Card className="hover-elevate transition-all duration-300 border-cyan-500/20 bg-slate-800/50">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 text-white">{exp.role}</CardTitle>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-lg font-semibold text-cyan-400">{exp.company}</span>
                          <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">{exp.period}</Badge>
                        </div>
                        
                        {/* Scope indicators */}
                        {exp.scope && (
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            {exp.scope.teamSize && (
                              <div className="flex items-center gap-1.5">
                                <Users className="h-3.5 w-3.5" />
                                <span>{exp.scope.teamSize}</span>
                              </div>
                            )}
                            {exp.scope.users && (
                              <div className="flex items-center gap-1.5">
                                <Building2 className="h-3.5 w-3.5" />
                                <span>{exp.scope.users}</span>
                              </div>
                            )}
                            {exp.scope.revenue && (
                              <div className="flex items-center gap-1.5">
                                <TrendingUp className="h-3.5 w-3.5" />
                                <span>{exp.scope.revenue}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-white/60 uppercase tracking-wide mb-2">
                          Key Outcomes
                        </p>
                        <ul className="space-y-2">
                          {exp.outcomes.map((outcome, i) => (
                            <li key={i} className="flex gap-3 text-white/80">
                              <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {exp.caseStudy && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedCase(exp)}
                          className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                          data-testid={`button-case-study-${index}`}
                        >
                          View Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedCase?.role}</DialogTitle>
            <DialogDescription className="text-base">
              {selectedCase?.company} • {selectedCase?.period}
            </DialogDescription>
          </DialogHeader>
          
          {selectedCase?.caseStudy && (
            <div className="space-y-6 pt-4">
              {/* Problem */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-md bg-destructive/10 flex items-center justify-center text-destructive font-bold">
                    P
                  </div>
                  Problem
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedCase.caseStudy.problem}
                </p>
              </div>

              {/* Action */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary font-bold">
                    A
                  </div>
                  Action
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedCase.caseStudy.action}
                </p>
              </div>

              {/* Result */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-md bg-chart-2/10 flex items-center justify-center text-chart-2 font-bold">
                    R
                  </div>
                  Result
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {selectedCase.caseStudy.result}
                </p>
                
                {/* Metrics */}
                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <p className="text-sm font-semibold mb-3">Key Metrics</p>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedCase.caseStudy.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="font-mono">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
