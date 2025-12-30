import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface FooterCTAProps {
  onContactClick?: () => void;
}

export default function FooterCTA({ onContactClick }: FooterCTAProps) {
  const openCalendly = () => {
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

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-lg bg-slate-800/50 border border-cyan-500/20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Interested in how I approach platform engineering?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="gap-2"
              data-testid="button-schedule-call"
              onClick={openCalendly}
            >
              <Calendar className="h-5 w-5" />
              Schedule a call
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="gap-2"
              data-testid="button-send-note"
              onClick={onContactClick}
            >
              <MessageSquare className="h-5 w-5" />
              Send a note
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
