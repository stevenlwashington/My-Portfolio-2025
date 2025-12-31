import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
    clarity?: (action: string, key: string, value?: string) => void;
  }
}

interface FooterCTAProps {
  onContactClick?: () => void;
}

export default function FooterCTA({ onContactClick }: FooterCTAProps) {
  const trackEvent = (eventName: string) => {
    if (window.clarity) {
      window.clarity("set", "cta_click", eventName);
    }
  };

  const openCalendly = () => {
    trackEvent("cta_schedule_call");
    
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/stevenwashington/introduction"
      });
    } else {
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/stevenwashington/introduction"
          });
        }
      }, 100);
      setTimeout(() => clearInterval(checkCalendly), 5000);
    }
  };

  const handleContactClick = () => {
    trackEvent("cta_send_note");
    onContactClick?.();
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="footer-cta-card p-10 md:p-16 rounded-lg bg-slate-800/50 border border-cyan-500/20 transition-all duration-200 ease-out md:hover:-translate-y-0.5 md:hover:shadow-lg md:hover:shadow-cyan-500/10 md:hover:border-cyan-500/40 motion-reduce:transform-none motion-reduce:transition-none">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-10">
              Interested in how I approach platform engineering?
            </h2>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
              <Button 
                size="lg"
                className="gap-2 min-w-[180px] transition-all duration-200 ease-out md:hover:-translate-y-px md:hover:brightness-110 md:hover:shadow-md md:hover:shadow-primary/20 active:translate-y-px active:shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 motion-reduce:transform-none motion-reduce:transition-colors group"
                data-testid="button-schedule-call"
                onClick={openCalendly}
              >
                <Calendar className="h-5 w-5 transition-transform duration-200 ease-out md:group-hover:translate-x-0.5 motion-reduce:transform-none" />
                Schedule a call
              </Button>
              <Button 
                size="lg"
                variant="ghost"
                className="gap-2 text-muted-foreground transition-all duration-200 ease-out md:hover:text-foreground md:hover:bg-white/5 md:hover:-translate-y-px md:hover:border-cyan-500/30 active:translate-y-px focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 motion-reduce:transform-none motion-reduce:transition-colors border border-transparent"
                data-testid="button-send-note"
                onClick={handleContactClick}
              >
                <MessageSquare className="h-5 w-5" />
                Send a note
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
