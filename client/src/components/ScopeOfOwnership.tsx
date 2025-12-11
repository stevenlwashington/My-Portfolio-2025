import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, Layers, DollarSign, Building2 } from "lucide-react";

const scopeItems = [
  {
    icon: Users,
    value: "100+",
    label: "Engineers Supported"
  },
  {
    icon: Layers,
    value: "20+",
    label: "Enterprise Systems"
  },
  {
    icon: DollarSign,
    value: "$11B+",
    label: "GTM Pipeline Exposure"
  },
  {
    icon: Building2,
    value: "15+",
    label: "Engineering Orgs"
  }
];

export default function ScopeOfOwnership() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="md:sticky md:top-24"
    >
      <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
        <CardContent className="p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary mb-4">
            Scope of Ownership
          </h3>
          <div className="space-y-4">
            {scopeItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-3" data-testid={`scope-item-${index}`}>
                  <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary font-mono leading-tight">
                      {item.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
