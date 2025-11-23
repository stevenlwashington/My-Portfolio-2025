import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import portraitPlaceholder from "@assets/generated_images/executive_portrait_placeholder_with_sp_monogram.png";

interface HeroProps {
  onViewImpact?: () => void;
  onAskAI?: () => void;
}

export default function Hero({ onViewImpact, onAskAI }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="relative w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1fr,280px] gap-12 items-center">
          {/* Main content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Steven Washington
                </h1>
                <p className="text-2xl md:text-3xl font-semibold text-primary">
                  Principal Product & Platform Leader
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-foreground max-w-2xl leading-relaxed font-medium">
                I build secure, compliant enterprise platforms that power responsible AI, accelerate engineering velocity, improve seller productivity, and deliver measurable business outcomes.
              </p>
              
              <div className="flex flex-wrap gap-6 text-base text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>$11B+ cumulative revenue supported across platform estate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>80% acceleration in engineering deployment velocity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>$450K+ annual savings in storage and compute</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-base"
                onClick={onViewImpact}
                data-testid="button-view-impact"
              >
                View Impact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base backdrop-blur-sm"
                onClick={onAskAI}
                data-testid="button-ask-ai-twin"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Ask my AI Twin
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl" />
              
              {/* Portrait container */}
              <div className="relative w-64 h-64 rounded-full border-4 border-primary/30 overflow-hidden">
                <img 
                  src={portraitPlaceholder} 
                  alt="Steven P." 
                  className="w-full h-full object-cover"
                  data-testid="img-portrait"
                />
              </div>
              
              {/* Accent ring */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary via-primary/50 to-transparent rounded-full opacity-20 -z-10" />
            </div>
          </div>
        </div>

        {/* Mobile portrait */}
        <div className="lg:hidden flex justify-center mt-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl" />
            <div className="relative w-48 h-48 rounded-full border-4 border-primary/30 overflow-hidden">
              <img 
                src={portraitPlaceholder} 
                alt="Steven P." 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
