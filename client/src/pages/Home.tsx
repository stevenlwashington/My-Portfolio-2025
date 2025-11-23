import Hero from "@/components/Hero";
import Header from "@/components/Header";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import PlatformValueMultiplier from "@/components/PlatformValueMultiplier";
import ImpactTimeline from "@/components/ImpactTimeline";
import LeadershipPhilosophy from "@/components/LeadershipPhilosophy";
import ValuePropGenerator from "@/components/ValuePropGenerator";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToImpact = () => {
    document.querySelector("#impact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background" id="top">
      <Header />
      <main>
        <Hero onViewImpact={scrollToImpact} />
        <ExecutiveSummary />
        <LeadershipPhilosophy />
        <PlatformValueMultiplier />
        <ImpactTimeline />
        <ValuePropGenerator />
      </main>
      <Footer />
    </div>
  );
}
