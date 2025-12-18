import { useState } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import DirectorSummary from "@/components/DirectorSummary";
import StrategicCapabilities from "@/components/StrategicCapabilities";
import OrganizationsLogoStrip from "@/components/OrganizationsLogoStrip";
import ImpactTimeline from "@/components/ImpactTimeline";
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
        <div className="gradient-divider mx-auto max-w-4xl" />
        
        <DirectorSummary />
        
        <div className="gradient-divider mx-auto max-w-4xl" />
        
        <StrategicCapabilities />
        
        <div className="gradient-divider mx-auto max-w-4xl" />
        
        <OrganizationsLogoStrip />
        
        <div className="gradient-divider mx-auto max-w-4xl" />
        
        <ImpactTimeline />
      </main>
      <Footer />

      {/* Contact Modal - fix mobile scroll: constrain height, enable overflow */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-md max-h-[calc(100dvh-2rem)] flex flex-col">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle>Let's Connect</DialogTitle>
            <DialogDescription>
              Share a quick note about what you're thinking—I'll follow up within 48 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating scroll to top button */}
      <ScrollToTop />
    </div>
  );
}
