import { useState } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import DirectorSummary from "@/components/DirectorSummary";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import StrategicCapabilities from "@/components/StrategicCapabilities";
import ImpactTimeline from "@/components/ImpactTimeline";
import LeadershipPhilosophy from "@/components/LeadershipPhilosophy";
import ValuePropGenerator from "@/components/ValuePropGenerator";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background" id="top">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <main>
        <Hero onContactClick={() => setIsContactOpen(true)} />
        <DirectorSummary />
        <ExecutiveSummary />
        <StrategicCapabilities />
        <LeadershipPhilosophy />
        <ImpactTimeline />
        <ValuePropGenerator />
      </main>
      <Footer />

      {/* Contact Modal */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get in Touch</DialogTitle>
            <DialogDescription>
              Send me a message and I'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
