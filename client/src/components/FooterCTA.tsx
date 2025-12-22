import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-lg bg-slate-800/50 border border-cyan-500/20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to talk platforms, scale, or AI-driven systems?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl">
            If you're hiring or exploring a partnership, I'm happy to share how I work and what I've shipped.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="gap-2"
              data-testid="button-schedule-call"
              asChild
            >
              <a href="#" onClick={(e) => e.preventDefault()}>
                <Calendar className="h-5 w-5" />
                Schedule a call
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="gap-2"
              data-testid="button-email-cta"
              asChild
            >
              <a href="mailto:stevenlwashington@gmail.com">
                <Mail className="h-5 w-5" />
                Email me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
