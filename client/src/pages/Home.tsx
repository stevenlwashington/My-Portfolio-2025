import { useRef } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import LeadershipPrinciples from "@/components/LeadershipPrinciples";
import PlatformValueMultiplier from "@/components/PlatformValueMultiplier";
import ImpactTimeline from "@/components/ImpactTimeline";
import ValuePropGenerator from "@/components/ValuePropGenerator";
import AITwinChat from "@/components/AITwinChat";
import Footer from "@/components/Footer";

export default function Home() {
  const impactRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<{ open: () => void }>(null);

  const scrollToImpact = () => {
    document.querySelector("#impact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openChat = () => {
    // Chat widget handles its own state
    console.log("Opening AI Twin chat");
  };

  return (
    <div className="min-h-screen bg-background" id="top">
      <Header />
      <main>
        <Hero onViewImpact={scrollToImpact} onAskAI={openChat} />
        <LeadershipPrinciples />
        <PlatformValueMultiplier />
        <ImpactTimeline />
        <ValuePropGenerator />
      </main>
      <Footer />
      <AITwinChat />
    </div>
  );
}
