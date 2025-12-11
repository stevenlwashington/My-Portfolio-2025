import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function ValuePropGenerator() {
  const [orgName, setOrgName] = useState("");
  const [generatedProp, setGeneratedProp] = useState("");
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (companyName: string) => {
      const response = await apiRequest("POST", "/api/generate-value-prop", { companyName });
      const data = await response.json();
      return data.valueProp as string;
    },
    onSuccess: (valueProp) => {
      setGeneratedProp(valueProp);
    },
    onError: () => {
      toast({
        title: "Generation failed",
        description: "Unable to generate value proposition. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleGenerate = () => {
    if (!orgName.trim()) return;
    mutation.mutate(orgName.trim());
  };

  return (
    <section className="py-20 md:py-24" id="value-prop">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="border-cyan-500/20 bg-slate-800/50">
          <CardHeader>
            <CardTitle className="text-3xl text-cyan-400">Strategic Alignment Check</CardTitle>
            <p className="text-white/70">
              Enter your organization's name to generate a custom value proposition based on my experience.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-3">
              <Input
                placeholder="Your organization's name"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !mutation.isPending && handleGenerate()}
                className="flex-1"
                data-testid="input-org-name"
              />
              <Button 
                onClick={handleGenerate} 
                disabled={mutation.isPending || !orgName.trim()}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold"
                data-testid="button-generate-value-prop"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Value Prop
                  </>
                )}
              </Button>
            </div>

            {mutation.isPending && (
              <Card className="border-cyan-500/20 bg-cyan-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-3 text-white/70">
                    <Loader2 className="h-5 w-5 animate-spin text-cyan-400" />
                    <p className="text-base">Crafting your personalized value proposition...</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {generatedProp && !mutation.isPending && (
              <Card className="border-cyan-500/20 bg-cyan-500/5">
                <CardContent className="pt-6">
                  <p className="text-base leading-relaxed text-white/80" data-testid="text-generated-prop">
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
