import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronRight, ChevronDown } from "lucide-react";

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
  slug: string;
  subheading?: string;
  questions: string[];
  outcomes: string[];
  caseStudy?: CaseStudy;
}

const experiences: Experience[] = [
  {
    company: "Zillow",
    role: "Platform Product Lead, Revenue Engineering & AI Platforms",
    period: "2023-Present",
    slug: "zillow-platform-product-lead",
    subheading: "Led cross-functional product and engineering workstreams across DevOps, AI, and GTM systems, enabling secure self-service delivery and governed automation for revenue-critical platforms serving thousands of internal users and $1B+ in annual revenue.",
    questions: [
      "How do we operationalize AI automation so it's auditable, secure, and trusted?",
      "Which delivery and data capabilities must be standardized to drive adoption across teams?",
      "How do we design governance that increases velocity without constraining teams?"
    ],
    outcomes: [
      "Enabled secure, auditable AI/LLM workflows across CRM and analytics systems",
      "Standardized CI/CD and data pipelines, driving adoption across Salesforce engineering",
      "Reduced release cycles from days to minutes, improving delivery velocity by ~80%",
      "Delivered $450K annual savings through infrastructure consolidation and data optimization"
    ],
    caseStudy: {
      problem: "Zillow's Salesforce engineering teams faced 2-3 day release cycles due to manual deployment processes and lack of CI/CD infrastructure. This created deployment bottlenecks, increased risk, and prevented rapid iteration on revenue-critical GTM features. Fragmented enterprise data across systems made it difficult to leverage for AI/ML initiatives.",
      action: "I defined the multi-year platform vision and initiated an org-wide architectural shift toward self-service CI/CD. I led the design and implementation of an on-demand CI/CD platform with automated testing pipelines, validation gates, and self-service deployment capabilities. Partnered with principal architects on target-state data architecture and architected enterprise data consolidation pipelines that unified historical data into a clean, AI-ready format with proper governance and audit trails.",
      result: "Release cycles dropped from days to minutes, enabling GTM teams to ship features 80% faster. The CI/CD platform became the standard across all Salesforce engineering. Data consolidation enabled new AI training initiatives while reducing data storage costs by $450K annually. Secured executive buy-in for multi-year platform roadmap through demonstrated business velocity acceleration and financial impact.",
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
    role: "Senior Product Manager, Frontline Enterprise Technology (CRM & Workflow)",
    period: "2020-2023",
    slug: "zillow-sr-salesforce-pm",
    subheading: "Owned enterprise CRM and workflow platforms supporting 2,500+ sales and service reps and $1B+ in annual revenue, unifying fragmented systems to improve reliability, data integrity, and operational efficiency during shifting market conditions.",
    questions: [
      "How do we evolve CRM capabilities to support shifting strategies under market pressure?",
      "Which workflows must be automated or redesigned to reduce cost while preserving service quality?",
      "How do we instrument the platform so leaders can measure adoption, efficiency, and ROI?"
    ],
    outcomes: [
      "Unified 4 CRM platforms to support evolving GTM strategy during housing headwinds",
      "Reduced manual work by 40% and platform costs by $2M",
      "Built shared product analytics/telemetry, increasing adoption by 30% and roadmap confidence by 50%",
      "Embedded TCPA/CPRA compliance into core workflows, achieving 100% audit success"
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
    role: "Senior Product Manager, Product & Technology",
    period: "2019-2020",
    slug: "tmobile-sr-product-manager",
    subheading: "Led Salesforce platform modernization supporting 15,000+ frontline staff across multi-vendor teams, improving performance, reliability, and incident response for national-scale sales and service operations.",
    questions: [
      "Where does platform instability most directly reduce seller productivity?",
      "Which performance bottlenecks most materially impact service operations?",
      "How can resilience improvements reduce incident volume and speed recovery?"
    ],
    outcomes: [
      "Cut latency by 50% through targeted performance modernization",
      "Reduced incidents by 30% and MTTR by 40%",
      "Improved reliability for 15K+ internal users",
      "Delivered $5M+ in annual operational savings"
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
    slug: "aws-product-manager",
    subheading: "Owned global pricing, contract, and billing infrastructure supporting 50,000+ sellers and $20B+ in annual cloud revenue, scaling private pricing and enterprise discount programs across 18 EU markets.",
    questions: [
      "How might we unlock a $100B+ enterprise opportunity through scalable private pricing infrastructure?",
      "Which systems must be globally standardized to support private pricing at AWS scale?",
      "How do we balance governance, accuracy, and speed across global seller operations?"
    ],
    outcomes: [
      "Enabled $120B+ in annual cloud revenue through private pricing and enterprise discount programs",
      "Automated pricing and contract workflows for 50K+ global sellers",
      "Launched enterprise pricing infrastructure across 18 EU markets, improving payment accuracy by 40%",
      "Reduced operational costs by 15% via build-vs-buy evaluation and system consolidation"
    ],
    caseStudy: {
      problem: "AWS's Enterprise Discount Program managed $20B+ in customer commitments, but legacy quote-to-cash systems created friction in pricing, contracting, and billing. Global expansion into EU markets required new seller-of-record capabilities with complex tax and compliance requirements. Manual processes couldn't scale with AWS's growth.",
      action: "I owned the end-to-end product strategy for pricing and billing infrastructure modernization. This included redesigning quote-to-cash workflows, automating manual processes, and building new capabilities for EU market expansion. I worked across finance, legal, engineering, and sales to ensure systems met both business and regulatory requirements.",
      result: "Successfully modernized quote-to-cash systems, enabling faster deal cycles and better pricing accuracy. Expanded seller-of-record capabilities into 18 EU markets, unlocking new revenue opportunities while maintaining tax and compliance integrity. The platform scaled to support AWS's continued hypergrowth.",
      metrics: [
        "Annual revenue enabled: $120B+",
        "EU markets: 18 new",
        "Global sellers: 50K+",
        "Payment accuracy: +40%"
      ]
    }
  },
  {
    company: "Microsoft (Merkle)",
    role: "Product Analyst, Global Marketing Strategy",
    period: "2015-2016",
    slug: "microsoft-merkle",
    subheading: "Supported global marketing strategy through data analysis and experimentation, building foundational skills in product analytics and data-driven decision making.",
    questions: [
      "Which engagement signals best predict conversion across global markets?",
      "How do we measure marketing effectiveness across diverse channels?",
      "Where can experimentation improve campaign performance at scale?"
    ],
    outcomes: [
      "Analyzed engagement data to inform global marketing strategy",
      "Supported experimentation frameworks to optimize digital campaigns",
      "Provided foundational experience in product analytics and data-driven decision making"
    ]
  }
];

// Fire Clarity event if available
function fireClarityEvent(eventName: string, data: { role: string; company: string }) {
  try {
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('event', eventName, data);
    }
  } catch {
    // Fail silently
  }
}

export default function ImpactTimeline() {
  const [selectedCase, setSelectedCase] = useState<Experience | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const outcomesRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleExpand = (index: number, exp: Experience) => {
    const isCurrentlyExpanded = expandedCard === index;
    
    if (isCurrentlyExpanded) {
      // Closing
      fireClarityEvent('reveal_outcomes_close', { role: exp.slug, company: exp.company });
      setExpandedCard(null);
    } else {
      // Opening (accordion: close previous, open new)
      if (expandedCard !== null) {
        const prevExp = experiences[expandedCard];
        fireClarityEvent('reveal_outcomes_close', { role: prevExp.slug, company: prevExp.company });
      }
      fireClarityEvent('reveal_outcomes_open', { role: exp.slug, company: exp.company });
      setExpandedCard(index);
    }
  };

  // Focus management for accessibility
  useEffect(() => {
    if (expandedCard !== null && outcomesRefs.current[expandedCard]) {
      // Optional: move focus to outcomes region when expanded
      outcomesRefs.current[expandedCard]?.focus();
    }
  }, [expandedCard]);

  return (
    <section className="py-24 md:py-32" id="career">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">Career Trajectory & Impact</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Progressive scope and responsibility across platform engineering, AI governance, and revenue systems development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCard === index;
              const outcomesId = `outcomes-${exp.slug}`;

              return (
                <div key={index} className="relative pl-8 md:pl-20" data-testid={`card-experience-${index}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-6 top-6 w-4 h-4 rounded-full bg-cyan-500 border-4 border-background" />

                  <Card className="group hover-elevate transition-all duration-300 border-cyan-500/20 bg-slate-800/50">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <CardTitle className="text-lg sm:text-xl md:text-2xl mb-2 text-white leading-tight">{exp.role}</CardTitle>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                            <span className="text-base sm:text-lg font-semibold text-cyan-400">{exp.company}</span>
                            <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-xs sm:text-sm">{exp.period}</Badge>
                          </div>
                          
                          {/* Unified subheading */}
                          {exp.subheading && (
                            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                              {exp.subheading}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Strategic Questions (always visible) */}
                        <div>
                          <p className="text-sm font-semibold text-white/60 uppercase tracking-wide mb-4">
                            Strategic Questions That Guided My Work
                          </p>
                          <ol className="space-y-3">
                            {exp.questions.map((question, i) => (
                              <li key={i} className="flex gap-3 text-white/90">
                                <span className="text-cyan-400 font-mono text-sm mt-0.5 flex-shrink-0 w-5">{i + 1}.</span>
                                <span className="text-base leading-relaxed">{question}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Show/Hide Outcomes Toggle */}
                        <button
                          onClick={() => toggleExpand(index, exp)}
                          aria-expanded={isExpanded}
                          aria-controls={outcomesId}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-200 py-2 rounded-md hover:bg-cyan-500/10 px-2 -ml-2"
                          data-testid={`button-toggle-outcomes-${index}`}
                          data-cta="reveal-outcomes"
                          data-role={exp.slug}
                          data-company={exp.company}
                        >
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                          />
                          {/* Mobile: always visible | Desktop: hidden by default, visible on card hover or when expanded */}
                          <span className={`text-sm font-medium transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100 ${isExpanded ? 'md:opacity-100' : ''}`}>
                            {isExpanded ? "Hide outcomes" : "Show outcomes"}
                          </span>
                        </button>

                        {/* Outcomes Section (conditionally rendered) */}
                        {isExpanded && (
                          <div
                            id={outcomesId}
                            ref={(el) => { outcomesRefs.current[index] = el; }}
                            tabIndex={-1}
                            className="animate-in fade-in slide-in-from-top-2 duration-300"
                            data-testid={`outcomes-section-${index}`}
                          >
                            <div className="pt-2 pb-4 border-t border-cyan-500/10">
                              <p className="text-sm font-semibold text-white/60 uppercase tracking-wide mb-4 mt-4">
                                Outcomes Delivered
                              </p>
                              <ul className="space-y-3">
                                {exp.outcomes.map((outcome, i) => (
                                  <li key={i} className="flex gap-3 text-white/80">
                                    <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                                    <span className="leading-relaxed">{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                              
                              {exp.caseStudy && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedCase(exp)}
                                  className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 mt-6"
                                  data-testid={`button-case-study-${index}`}
                                >
                                  View Case Study
                                  <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
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
