import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const essays = [
  {
    title: "Platform as a Product",
    content: [
      "Too many platforms fail because they're built as infrastructure projects, not as products. Engineers are asked to adopt tools that slow them down, increase cognitive load, or duplicate work they're already doing. The result? Shadow IT, workarounds, and platform teams wondering why adoption is low.",
      "I treat platform engineering like product management. That means understanding the user (the engineer), measuring their pain points, building clear roadmaps, and obsessing over developer experience. A great platform isn't just technically sound—it's the obvious choice. It removes friction, automates repetitive work, and makes engineers faster and happier.",
      "When platforms become products, adoption becomes organic. Engineers choose to use them because they're better than the alternative. That's when platforms unlock real velocity—not just for individuals, but for entire organizations."
    ]
  },
  {
    title: "Responsible AI at Scale",
    content: [
      "AI is transformative, but without governance, it's also risky. Teams are eager to ship AI features, but concerns around data privacy, model bias, audit trails, and regulatory compliance often create bottlenecks. The temptation is to either lock down everything (killing innovation) or move fast and hope for the best (creating risk).",
      "My approach is to build governance into the platform itself. Instead of making compliance a manual checklist, I design systems where the right thing is the easy thing. Clean data pipelines, automated audit trails, and policy-as-code frameworks allow teams to ship AI features quickly while staying compliant with TCPA, CPRA, and emerging AI regulations.",
      "Responsible AI isn't about saying 'no.' It's about designing systems that let teams say 'yes' safely. When governance is invisible infrastructure, innovation accelerates without increasing risk."
    ]
  },
  {
    title: "GTM Velocity Through Data & Automation",
    content: [
      "Sales and service teams are only as fast as the systems behind them. Fragmented data, manual workflows, and slow release cycles compound into massive operational drag. A rep spends 30 seconds searching for information. Multiply that by 10,000 reps per day, and you've lost weeks of productivity—or deals.",
      "I focus on building unified platforms that eliminate this friction. By consolidating Salesforce orgs, integrating telemetry, and automating common workflows, I turn scattered systems into a single source of truth. Reps get faster answers, managers get better insights, and the business moves quicker.",
      "But velocity isn't just about speed—it's about confidence. When platforms are reliable, tested, and compliant, GTM teams can execute faster without worrying about breaking something. That's the multiplier effect of great platform work: teams don't just move fast, they move fast with trust."
    ]
  }
];

export default function LeadershipPhilosophy() {
  return (
    <section className="py-20 md:py-24 bg-card/30" id="philosophy">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Leadership Philosophy</h2>
          <p className="text-lg text-muted-foreground">
            How I think about platform engineering, AI governance, and enabling teams to move faster.
          </p>
        </div>

        <div className="space-y-8">
          {essays.map((essay, index) => (
            <Card key={index} data-testid={`card-essay-${index}`}>
              <CardHeader>
                <CardTitle className="text-2xl">{essay.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {essay.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
