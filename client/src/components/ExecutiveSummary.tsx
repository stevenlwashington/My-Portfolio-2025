import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TrendingUp, Zap, DollarSign, Users } from "lucide-react";

function AnimatedMetric({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 2 
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <span className="text-5xl md:text-6xl font-bold font-mono tracking-tight">
      {prefix}{count}{suffix}
    </span>
  );
}

interface MetricCardProps {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

function MetricCard({ icon: Icon, value, suffix, prefix, label, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="hover-elevate transition-all">
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-2">
              <div className="text-primary">
                <AnimatedMetric value={value} suffix={suffix} prefix={prefix} />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {label}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                      <div className="text-2xl font-bold text-primary font-mono">15K+</div>
                      <div className="text-muted-foreground">End users enabled</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary font-mono">4</div>
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
      </div>
    </section>
  );
}
