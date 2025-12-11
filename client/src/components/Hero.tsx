import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";
import portraitImage from "@assets/generated_images/steven_portrait.png";

interface HeroProps {
  onContactClick?: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.05),rgba(0,0,0,0))]" />
      
      <div className="relative w-full max-w-2xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Portrait with social links */}
          <div className="relative w-full flex justify-center items-center">
            {/* Concentric circles background */}
            <div className="absolute w-72 h-72 rounded-full border border-primary/20" />
            <div className="absolute w-80 h-80 rounded-full border border-primary/10" />
            
            {/* Portrait */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full border-4 border-primary/40 overflow-hidden bg-card flex-shrink-0 mb-8">
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

          {/* Name badge */}
          <div className="px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm">
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
              Steven Washington
            </span>
          </div>

          {/* Main tagline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
              <span className="block gradient-text">
                Product thinking.
              </span>
              <span className="block text-white">
                Engineering execution.
              </span>
            </h1>
          </div>

          {/* Value Proposition - integrated as subtitle */}
          <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
            Seattle-based Platform Product Manager building secure, compliant, AI-ready enterprise platforms that improve engineering velocity, reduce operational cost, and unlock new revenue.
          </p>

          {/* Single CTA - Contact Me with gradient border */}
          <div className="gradient-border rounded-full mt-4">
            <Button 
              size="lg" 
              onClick={onContactClick}
              className="rounded-full px-10 py-6 text-lg font-semibold gap-3 bg-slate-900/90 hover:bg-slate-800 text-white shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] transition-all"
              data-testid="button-contact-hero"
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
