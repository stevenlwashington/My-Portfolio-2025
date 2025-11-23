import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Target, TrendingUp } from "lucide-react";

export default function ExecutiveSummary() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Executive Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-8">
            {/* Domain Expertise */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Briefcase className="h-5 w-5" />
                <h3 className="font-semibold text-lg">Domain Expertise</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Platform Engineering</Badge>
                <Badge variant="secondary">Salesforce</Badge>
                <Badge variant="secondary">AI Governance</Badge>
                <Badge variant="secondary">DevOps/CI-CD</Badge>
                <Badge variant="secondary">Data Unification</Badge>
                <Badge variant="secondary">GTM Operations</Badge>
              </div>
            </div>

            {/* Platform + AI Experience */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Target className="h-5 w-5" />
                <h3 className="font-semibold text-lg">Platform + AI Experience</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>16 years of enterprise data for AI training</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Unified 4 Salesforce orgs into single platform</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Built on-demand CI/CD reducing cycles to minutes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>15k+ frontline users across GTM systems</span>
                </li>
              </ul>
            </div>

            {/* Quantified Impact */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <TrendingUp className="h-5 w-5" />
                <h3 className="font-semibold text-lg">Quantified Impact</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-3xl font-mono font-bold text-primary">$1.6B+</div>
                  <div className="text-xs text-muted-foreground">Annual revenue supported</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-bold text-primary">80%</div>
                  <div className="text-xs text-muted-foreground">GTM delivery velocity increase</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-bold text-primary">$5M+</div>
                  <div className="text-xs text-muted-foreground">Annual operational cost savings</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
