import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  slug: string;
  subheading?: string;
  questions: string[];
  outcomes: string[];
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
    ]
  },
  {
    company: "Zillow",
    role: "Senior Product Manager, Frontline Enterprise Technology",
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
    ]
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
    ]
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
    ]
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
    <section className="py-20 md:py-28" id="career">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">Career Trajectory & Impact</h2>
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
    </section>
  );
}
