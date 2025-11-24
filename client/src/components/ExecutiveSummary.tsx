import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/ui/metric-card";
import { motion } from "framer-motion";
import { TrendingUp, Zap, DollarSign, Users } from "lucide-react";

export default function ExecutiveSummary() {
  return (
    <section className="py-20 md:py-24" id="summary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Executive Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven track record of building platforms that accelerate velocity, reduce costs, and unlock revenue at scale.
          </p>
        </div>

        {/* Hero Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <MetricCard
            icon={TrendingUp}
            value={11}
            suffix="B+"
            prefix="$"
            label="Cumulative revenue supported across platform estate"
            delay={0}
          />
          <MetricCard
            icon={Zap}
            value={80}
            suffix="%"
            label="Acceleration in engineering deployment velocity"
            delay={0.15}
          />
          <MetricCard
            icon={DollarSign}
            value={5}
            suffix="M+"
            prefix="$"
            label="Annual operational cost savings"
            delay={0.3}
          />
        </div>

        {/* Secondary Metrics & Domain Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Platform Scale */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="font-semibold text-lg">Platform Scale</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-primary font-mono">50K+</div>
                      <div className="text-muted-foreground">End users enabled</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary font-mono">6</div>
                      <div className="text-muted-foreground">Major consolidations</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Domain Expertise */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Domain Expertise</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" data-testid="badge-expertise-platform">Platform Engineering</Badge>
                <Badge variant="secondary" data-testid="badge-expertise-salesforce">Salesforce</Badge>
                <Badge variant="secondary" data-testid="badge-expertise-ai">AI Governance</Badge>
                <Badge variant="secondary" data-testid="badge-expertise-devops">DevOps/CI-CD</Badge>
                <Badge variant="secondary" data-testid="badge-expertise-data">Data Unification</Badge>
                <Badge variant="secondary" data-testid="badge-expertise-gtm">GTM Operations</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Strategic Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Strategic Platform Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="hover-elevate transition-all" data-testid="card-capability-salesforce">
              <CardContent className="p-5">
                <div className="space-y-2">
                  <h4 className="font-semibold">Salesforce Consolidation</h4>
                  <p className="text-sm text-muted-foreground">
                    Unified 4 production orgs serving 50K+ users, eliminating data silos and reducing integration complexity by 70%
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-elevate transition-all" data-testid="card-capability-cicd">
              <CardContent className="p-5">
                <div className="space-y-2">
                  <h4 className="font-semibold">CI/CD Acceleration</h4>
                  <p className="text-sm text-muted-foreground">
                    Built on-demand deployment pipelines reducing release cycles from weeks to minutes, enabling 80% faster GTM execution
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-elevate transition-all" data-testid="card-capability-ai">
              <CardContent className="p-5">
                <div className="space-y-2">
                  <h4 className="font-semibold">AI Governance at Scale</h4>
                  <p className="text-sm text-muted-foreground">
                    Designed TCPA/CPRA-compliant data pipelines for 16 years of enterprise data, enabling responsible AI innovation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
