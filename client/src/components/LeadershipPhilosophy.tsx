import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Package, ShieldCheck, Zap } from "lucide-react";

const principles = [
  {
    icon: Package,
    title: "Platform as a Product",
    tagline: "Engineers choose platforms that make them faster and happier.",
    proof: "Operationalized this principle by defining service boundaries, SLAs, and product operating mechanisms adopted across 100+ engineers at Zillow.",
    content: [
      "Too many platforms fail because they're built as infrastructure projects, not as products. Engineers are asked to adopt tools that slow them down, increase cognitive load, or duplicate work they're already doing. The result? Shadow IT, workarounds, and platform teams wondering why adoption is low.",
      "I treat platform engineering like product management. That means understanding the user (the engineer), measuring their pain points, building clear roadmaps, and obsessing over developer experience. A great platform isn't just technically sound—it's the obvious choice. It removes friction, automates repetitive work, and makes engineers faster and happier.",
      "When platforms become products, adoption becomes organic. Engineers choose to use them because they're better than the alternative. That's when platforms unlock real velocity—not just for individuals, but for entire organizations."
    ]
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI & Governance",
    tagline: "Governance as infrastructure: ship AI features quickly while staying compliant.",
    proof: "Built TCPA/CPRA-compliant data pipelines enabling 16 years of enterprise data to be used for AI training—mitigating $1B+ regulatory risk while accelerating innovation.",
    content: [
      "AI is transformative, but without governance, it's also risky. Teams are eager to ship AI features, but concerns around data privacy, model bias, audit trails, and regulatory compliance often create bottlenecks. The temptation is to either lock down everything (killing innovation) or move fast and hope for the best (creating risk).",
      "My approach is to build governance into the platform itself. Instead of making compliance a manual checklist, I design systems where the right thing is the easy thing. Clean data pipelines, automated audit trails, and policy-as-code frameworks allow teams to ship AI features quickly while staying compliant with TCPA, CPRA, and emerging AI regulations.",
      "Responsible AI isn't about saying 'no.' It's about designing systems that let teams say 'yes' safely. When governance is invisible infrastructure, innovation accelerates without increasing risk."
    ]
  },
  {
    icon: Zap,
    title: "GTM Velocity Through Data & Automation",
    tagline: "Unified platforms eliminate friction and accelerate GTM execution.",
    proof: "Unified 4 Salesforce orgs into single platform supporting $1.5B+ revenue; reduced release cycles from days to minutes, enabling 80% faster GTM execution.",
    content: [
      "Sales and service teams are only as fast as the systems behind them. Fragmented data, manual workflows, and slow release cycles compound into massive operational drag. A rep spends 30 seconds searching for information. Multiply that by 10,000 reps per day, and you've lost weeks of productivity—or deals.",
      "I focus on building unified platforms that eliminate this friction. By consolidating Salesforce orgs, integrating telemetry, and automating common workflows, I turn scattered systems into a single source of truth. Reps get faster answers, managers get better insights, and the business moves quicker.",
      "But velocity isn't just speed—it's about confidence. When platforms are reliable, tested, and compliant, GTM teams can execute faster without worrying about breaking something. That's the multiplier effect of great platform work: teams don't just move fast, they move fast with trust."
    ]
  }
];

interface FlippableCardProps {
  principle: typeof principles[0];
  index: number;
  isFlipped: boolean;
  onFlip: () => void;
  onClose: () => void;
}

function FlippableCard({ principle, index, isFlipped, onFlip, onClose }: FlippableCardProps) {
  const Icon = principle.icon;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isFlipped) {
        onClose();
      } else {
        onFlip();
      }
    } else if (e.key === "Escape" && isFlipped) {
      onClose();
    }
  };

  return (
    <div 
      className="relative h-[320px] perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Card
            className="h-full flex flex-col justify-center p-8 cursor-pointer hover-elevate active-elevate-2 transition-all border-cyan-500/20 bg-slate-800/50"
            onClick={onFlip}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-expanded={isFlipped}
            aria-label={`${principle.title}. Click to read more.`}
            data-testid={`card-principle-${index}`}
          >
            <div className="flex flex-col items-center text-center space-y-4 h-full justify-between">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {principle.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  {principle.tagline}
                </p>
                <p className="text-xs text-cyan-400 font-medium border-t border-cyan-500/20 pt-3 mt-2">
                  {principle.proof}
                </p>
              </div>
              <p className="text-xs text-cyan-400/70 font-medium tracking-wide uppercase">
                Click to explore
              </p>
            </div>
          </Card>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Card 
            className="h-full flex flex-col p-6 overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all border-cyan-500/20 bg-slate-800/50"
            onClick={onClose}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label={`${principle.title} details. Click to close.`}
            data-testid={`card-principle-back-${index}`}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-cyan-400">
                {principle.title}
              </h3>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3">
              {principle.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-sm text-white/70 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}

export default function LeadershipPhilosophy() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(index);
  };

  const handleClose = () => {
    setFlippedIndex(null);
  };

  return (
    <section className="py-20 md:py-24 bg-card/30" id="philosophy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">Leadership Principles</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            How I think about platform engineering, AI governance, and enabling teams to move faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <FlippableCard
              key={index}
              principle={principle}
              index={index}
              isFlipped={flippedIndex === index}
              onFlip={() => handleFlip(index)}
              onClose={handleClose}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
