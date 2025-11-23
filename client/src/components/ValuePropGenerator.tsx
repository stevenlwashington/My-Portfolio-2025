import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function ValuePropGenerator() {
  const [orgName, setOrgName] = useState("");
  const [generatedProp, setGeneratedProp] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // TODO: Remove mock functionality - Replace with actual Gemini API call
  const handleGenerate = () => {
    if (!orgName.trim()) return;

    setIsGenerating(true);
    
    // Mock generation
    setTimeout(() => {
      const mockProp = `For ${orgName}, I bring 15+ years of platform engineering leadership with a proven track record of accelerating velocity and scaling GTM operations. My experience modernizing Salesforce platforms at Zillow ($1.6B+ revenue) and T-Mobile (15k+ users) shows how unified platforms eliminate friction, reduce operational costs, and enable teams to ship faster. I specialize in responsible AI governance, data unification, and treating platform engineering as a product—ensuring your engineering and go-to-market teams have the tools, automation, and insights they need to move from idea to production with confidence and compliance.`;
      setGeneratedProp(mockProp);
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <section className="py-20 md:py-24" id="value-prop">
      <div className="max-w-4xl mx-auto px-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Strategic Alignment Check</CardTitle>
            <p className="text-muted-foreground">
              Enter your organization's name to generate a custom value proposition based on my experience.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-3">
              <Input
                placeholder="Your organization's name"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                className="flex-1"
                data-testid="input-org-name"
              />
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating || !orgName.trim()}
                data-testid="button-generate-value-prop"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Value Prop
              </Button>
            </div>

            {generatedProp && (
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <p className="text-base leading-relaxed" data-testid="text-generated-prop">
                    {generatedProp}
                  </p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
