import Hero from "@/components/Hero";
import Header from "@/components/Header";
import DirectorSummary from "@/components/DirectorSummary";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import StrategicCapabilities from "@/components/StrategicCapabilities";
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
        <DirectorSummary />
        <ExecutiveSummary />
        <StrategicCapabilities />
        <LeadershipPhilosophy />
        <ImpactTimeline />
        <ValuePropGenerator />
      </main>
      <Footer />
    </div>
  );
}
