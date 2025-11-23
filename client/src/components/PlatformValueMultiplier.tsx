import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { HelpCircle, TrendingUp, DollarSign, Zap, Shield, Scale, Lock } from "lucide-react";

export default function PlatformValueMultiplier() {
  const [friction, setFriction] = useState(50);
  const [fragmentation, setFragmentation] = useState(50);
  const [users, setUsers] = useState(1000);

  // Animated values
  const [displayVelocity, setDisplayVelocity] = useState(0);
  const [displaySavings, setDisplaySavings] = useState(0);
  const [displayGTM, setDisplayGTM] = useState(0);

  // Calculate metrics
  const velocity = Math.round(friction * 0.5 + fragmentation * 0.3);
  const savings = Math.round((fragmentation * 3 + friction * 2) * (users / 100));
  const gtm = Math.round((friction * 0.5 + users / 100) * 0.75);

  // Animate numbers
  useEffect(() => {
    const animateValue = (start: number, end: number, setter: (val: number) => void) => {
      const duration = 500;
      const steps = 20;
      const increment = (end - start) / steps;
      let current = start;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.round(current));
        }
      }, duration / steps);

      return timer;
    };

    const timer1 = animateValue(displayVelocity, velocity, setDisplayVelocity);
    const timer2 = animateValue(displaySavings, savings, setDisplaySavings);
    const timer3 = animateValue(displayGTM, gtm, setDisplayGTM);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, [velocity, savings, gtm]);

  return (
    <section className="py-20 md:py-24 bg-card/30" id="pvm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Platform Value Multiplier</h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Input the complexity of your environment to simulate the quantifiable business 
                impact of applying disciplined <strong>Platform as a Product</strong> leadership.
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="button-pvm-help">
                  <HelpCircle className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>How is this calculated?</DialogTitle>
                  <DialogDescription className="text-base space-y-4 pt-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Platform Friction Score</h4>
                      <p>Measures technical debt, process bottlenecks, and deployment complexity. Higher scores indicate more opportunity for velocity improvement through automation and tooling.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Data Fragmentation Index</h4>
                      <p>Reflects the number of disconnected systems, manual data workflows, and compliance gaps. Higher fragmentation means greater savings potential through unified platforms and governance.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Frontline Users</h4>
                      <p>The scale of GTM or service teams affected by platform improvements. Larger teams amplify the impact of efficiency gains.</p>
                    </div>
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-foreground mb-2">Calculations</h4>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Velocity Improvement:</strong> (Friction × 0.5 + Fragmentation × 0.3)%</li>
                        <li><strong>Data & Governance Savings:</strong> $(Fragmentation × 3 + Friction × 2) × (Users ÷ 100)K</li>
                        <li><strong>GTM Revenue & Efficiency:</strong> $(Friction × 0.5 + Users ÷ 100) × 0.75K</li>
                      </ul>
                      <p className="text-xs mt-4 text-muted-foreground">
                        Note: These are directional estimates based on historical patterns, not forecasts. 
                        Actual results depend on organizational context and execution.
                      </p>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Controls */}
        <Card className="mb-8">
          <CardContent className="pt-8 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Platform Friction Score (1-100)</label>
                <span className="text-2xl font-mono font-semibold text-primary" data-testid="text-friction-value">
                  {friction}
                </span>
              </div>
              <Slider 
                value={[friction]} 
                onValueChange={(val) => setFriction(val[0])}
                min={1}
                max={100}
                step={1}
                data-testid="slider-friction"
              />
              <p className="text-xs text-muted-foreground">
                Higher score = More complexity/technical debt
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Data Fragmentation Index (1-100)</label>
                <span className="text-2xl font-mono font-semibold text-primary" data-testid="text-fragmentation-value">
                  {fragmentation}
                </span>
              </div>
              <Slider 
                value={[fragmentation]} 
                onValueChange={(val) => setFragmentation(val[0])}
                min={1}
                max={100}
                step={1}
                data-testid="slider-fragmentation"
              />
              <p className="text-xs text-muted-foreground">
                Higher index = More data silos/compliance risk
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Frontline Users (100 - 10k)</label>
                <span className="text-2xl font-mono font-semibold text-primary" data-testid="text-users-value">
                  {users.toLocaleString()}
                </span>
              </div>
              <Slider 
                value={[users]} 
                onValueChange={(val) => setUsers(val[0])}
                min={100}
                max={10000}
                step={100}
                data-testid="slider-users"
              />
              <p className="text-xs text-muted-foreground">
                Scale of GTM or Service Teams affected
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Metrics Output */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <CardDescription>Platform Velocity Improvement</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl md:text-5xl font-mono font-bold text-primary" data-testid="text-velocity-result">
                {displayVelocity}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="h-4 w-4" />
                <CardDescription>Data Cost & Governance Savings</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl md:text-5xl font-mono font-bold text-primary" data-testid="text-savings-result">
                ${displaySavings}K
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="h-4 w-4" />
                <CardDescription>GTM Revenue & Efficiency Unlock</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl md:text-5xl font-mono font-bold text-primary" data-testid="text-gtm-result">
                ${displayGTM}K
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security & Compliance Heatmap */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5 text-primary" />
              Platform Risk Mitigation & Compliance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground">
              Enterprise platform work requires balancing velocity with trust. Here's how disciplined 
              platform engineering mitigates risk while accelerating delivery:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* TCPA */}
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-chart-1/10">
                      <Lock className="h-5 w-5 text-chart-1" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">TCPA Compliance</h4>
                      <p className="text-xs text-muted-foreground">
                        Embedded consent tracking, call logging, and policy-as-code to prevent 
                        unauthorized contact—reducing regulatory risk by $1B+ at Zillow.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CPRA */}
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-chart-2/10">
                      <Scale className="h-5 w-5 text-chart-2" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">CPRA Data Privacy</h4>
                      <p className="text-xs text-muted-foreground">
                        Automated data classification, retention policies, and privacy controls 
                        built into pipelines—ensuring consumer rights without manual overhead.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Responsible AI */}
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-chart-4/10">
                      <Shield className="h-5 w-5 text-chart-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Responsible AI Governance</h4>
                      <p className="text-xs text-muted-foreground">
                        Audit trails for model decisions, bias monitoring, and data lineage tracking—
                        enabling safe AI innovation with accountability at every layer.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Platform Security */}
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-chart-3/10">
                      <Shield className="h-5 w-5 text-chart-3" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Platform Security</h4>
                      <p className="text-xs text-muted-foreground">
                        Automated testing, validation gates, and change management processes 
                        that prevent production incidents while maintaining deployment velocity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm font-medium text-center">
                Platform work isn't just about speed—it's about building systems where 
                compliance and governance are invisible infrastructure, not bottlenecks.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
