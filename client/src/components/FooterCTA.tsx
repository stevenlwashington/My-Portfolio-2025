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
        <div className="p-10 md:p-16 rounded-lg bg-slate-800/50 border border-cyan-500/20">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-10">
              Interested in how I approach platform engineering?
            </h2>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
              <Button 
                size="lg"
                className="gap-2 min-w-[180px]"
                data-testid="button-schedule-call"
                onClick={openCalendly}
              >
                <Calendar className="h-5 w-5" />
                Schedule a call
              </Button>
              <Button 
                size="lg"
                variant="ghost"
                className="gap-2 text-muted-foreground hover:text-foreground"
                data-testid="button-send-note"
                onClick={handleContactClick}
              >
                <MessageSquare className="h-5 w-5" />
                Send a note
              </Button>
            </div>
            <p className="hidden md:block mt-6 text-sm text-muted-foreground">
              Prefer async? Send a note instead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
