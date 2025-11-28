import { Button } from "@/components/ui/button";
import { Linkedin, Github, ArrowRight } from "lucide-react";
import portraitImage from "@assets/generated_images/steven_portrait.png";

interface HeroProps {
  onViewImpact?: () => void;
}

export default function Hero({ onViewImpact }: HeroProps) {
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
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
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
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white"
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
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Product thinking.
              </span>
              <span className="block text-white">
                Engineering execution.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            I build secure, compliant enterprise platforms that power responsible AI, accelerate engineering velocity, and deliver measurable business outcomes.
          </p>

          {/* CTA */}
          <Button 
            size="lg" 
            className="rounded-full px-8 gap-2 mt-4"
            onClick={onViewImpact}
            data-testid="button-view-impact"
          >
            View Impact
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
