import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/ui/metric-card";
import { ArrowRight, TrendingUp, Zap, DollarSign } from "lucide-react";

interface HeroProps {
  onViewImpact?: () => void;
}

export default function Hero({ onViewImpact }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.05),rgba(0,0,0,0))]" />
      
      <div className="relative w-full max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {/* Main content */}
          <div className="space-y-8 text-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Steven Washington
                </h1>
                <p className="text-2xl md:text-3xl font-semibold text-primary">
                  Principal Product & Platform Leader
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                I build secure, compliant enterprise platforms that power responsible AI, accelerate engineering velocity, improve seller productivity, and deliver measurable business outcomes.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-base"
                onClick={onViewImpact}
                data-testid="button-view-impact"
              >
                View Impact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Executive Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}
