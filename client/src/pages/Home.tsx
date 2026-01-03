import { useState } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import DirectorSummary from "@/components/DirectorSummary";
import OrganizationsLogoStrip from "@/components/OrganizationsLogoStrip";
import ImpactTimeline from "@/components/ImpactTimeline";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background" id="top">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <main>
        <Hero onContactClick={() => setIsContactOpen(true)} />
        
        {/* Gradient divider */}
        <div className="gradient-divider mx-auto max-w-5xl" />
        
        <DirectorSummary />
        
        <div className="gradient-divider mx-auto max-w-5xl" />
        
        <OrganizationsLogoStrip />
        
        <div className="gradient-divider mx-auto max-w-5xl" />
        
        <ImpactTimeline />
      </main>
      <FooterCTA onContactClick={() => setIsContactOpen(true)} />
      <Footer />

      {/* Contact Modal - fix mobile scroll: entire content area scrollable */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-md max-h-[85dvh] overflow-hidden p-0">
          <div 
            className="overflow-y-auto overscroll-contain p-6" 
            style={{ WebkitOverflowScrolling: 'touch', maxHeight: '85dvh' }}
          >
            <DialogHeader className="mb-4">
              <DialogTitle>Let's Connect</DialogTitle>
              <DialogDescription>
                Share a quick note about what you're thinking—I'll follow up within 48 hours.
              </DialogDescription>
            </DialogHeader>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating scroll to top button */}
      <ScrollToTop />
    </div>
  );
}
