import { Button } from "@/components/ui/button";
import { Linkedin, Github, ArrowDown, Mail } from "lucide-react";
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.05),rgba(0,0,0,0))]" />
      
      <div className="relative w-full max-w-2xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Hero Visual System: Avatar + Rings + Headline */}
          <div className="hero-visual-system flex flex-col items-center">
            {/* Portrait with social links */}
            <div className="relative w-full flex justify-center items-center">
              {/* Concentric circles background - atmospheric subordinate rings */}
              {/* Inner ring: crisp, more visible */}
              <div className="absolute w-72 h-72 rounded-full border border-primary/12 sm:border-primary/14" />
              {/* Outer ring: blurred for atmospheric effect, very subtle */}
              <div className="absolute w-80 h-80 rounded-full border border-primary/7 sm:border-primary/9 hero-ring-outer" />
              
              {/* Gradient fade overlay: prevents rings from competing with headline */}
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
                
                {/* Social media connectors */}
                <div className="absolute w-96 h-32 flex items-center justify-between -top-12">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary/30 absolute -right-2" />
                    <div className="w-2 h-2 rounded-full bg-primary/20 absolute -right-6" />
                    <Button
                      size="icon"
                      variant="ghost"
                      asChild
                      className="w-12 h-12 rounded-full bg-[#0077b5] hover:bg-[#006699] text-white"
                      data-testid="button-linkedin-hero"
                    >
                      <a href="https://www.linkedin.com/in/stevenlwashington/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary/30 absolute -left-2" />
                    <div className="w-2 h-2 rounded-full bg-primary/20 absolute -left-6" />
                    <Button
                      size="icon"
                      variant="ghost"
                      asChild
                      className="w-12 h-12 rounded-full bg-zinc-700 hover:bg-zinc-600 text-white"
                      data-testid="button-github-hero"
                    >
                      <a href="https://github.com/stevenlwashington" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main tagline - tightly coupled to visual */}
            <div className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
              <span className="block gradient-text">
                Product thinking.
              </span>
              <span className="block text-white">
                Engineering execution.
              </span>
            </div>
          </div>

          {/* Two-line hierarchy */}
          <div className="mt-6 sm:mt-8">
            <h1 className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed max-w-xl">
              I build internal platforms and AI-enabled systems that eliminate toil, accelerate delivery, and drive measurable business impact.
            </h1>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
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
    </section>
  );
}
