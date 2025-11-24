import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedMetric({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 2 
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <span className="text-5xl md:text-6xl font-bold font-mono tracking-tight">
      {prefix}{count}{suffix}
    </span>
  );
}

interface MetricCardProps {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

export function MetricCard({ icon: Icon, value, suffix, prefix, label, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="hover-elevate transition-all">
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-2">
              <div className="text-primary">
                <AnimatedMetric value={value} suffix={suffix} prefix={prefix} />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {label}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
