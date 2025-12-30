import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import portraitImage from "@assets/generated_images/steven_portrait.png";

interface HeroProps {
  onContactClick?: () => void;
}

function scrollToImpact() {
  const element = document.getElementById("impact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background gradient - dark slate with subtle cyan radial */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(210,25%,8%)_0%,hsl(215,20%,10%)_50%,hsl(210,25%,8%)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(34,211,238,0.06),transparent_70%)]" />
      
      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Hero Visual System: Avatar + Rings (centered decorative element) */}
          <div className="hero-visual-system flex flex-col items-center mb-8 lg:mb-0 lg:flex-shrink-0">
            {/* Portrait with social links */}
            <div className="relative flex justify-center items-center">
              {/* Concentric circles background - atmospheric subordinate rings */}
              <div className="absolute w-72 h-72 rounded-full border border-primary/12 sm:border-primary/14" />
              <div className="absolute w-80 h-80 rounded-full border border-primary/7 sm:border-primary/9 hero-ring-outer" />
              
              {/* Gradient fade overlay */}
              <div className="hero-rings-fade" />
              
              {/* Portrait */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-4 border-primary/40 overflow-hidden bg-card flex-shrink-0">
                  <img 
                    src={portraitImage} 
                    alt="Steven Washington" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
              </div>
            </div>
          </div>

          {/* Text content - centered on mobile/tablet, left-aligned on desktop */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Main tagline */}
            <div className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 sm:mb-8">
              <span className="block gradient-text">
                Product thinking.
              </span>
              <span className="block text-white">
                Engineering execution.
              </span>
            </div>

            {/* Subheadline */}
            <h1 className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed max-w-xl mb-6">
              I build internal platforms and AI-enabled systems that eliminate toil, accelerate delivery, and drive measurable business impact.
            </h1>

            {/* Dual CTAs - centered on mobile/tablet, left-aligned on desktop */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:justify-center lg:justify-start">
              <div className="gradient-border rounded-full">
                <Button 
                  size="lg" 
                  onClick={scrollToImpact}
                  className="w-full sm:w-auto rounded-full px-8 py-6 text-lg font-semibold gap-3 bg-slate-900/90 hover:bg-slate-800 text-white shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] transition-all"
                  data-testid="button-explore-impact"
                >
                  <ArrowDown className="h-5 w-5" />
                  Explore Impact
                </Button>
              </div>
              <Button 
                size="lg" 
                variant="outline"
                onClick={onContactClick}
                className="w-full sm:w-auto rounded-full px-8 py-6 text-lg font-semibold gap-3 border-white/20 text-white hover:bg-white/10 transition-all"
                data-testid="button-contact-hero"
              >
                <Mail className="h-5 w-5" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
