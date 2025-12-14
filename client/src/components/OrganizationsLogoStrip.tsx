import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  SiAmazonwebservices, 
  SiSalesforce, 
  SiZillow, 
  SiZendesk, 
  SiGitlab,
  SiPalantir
} from "react-icons/si";

interface Organization {
  name: string;
  alt: string;
  icon?: typeof SiAmazonwebservices;
}

const organizations: Organization[] = [
  { name: "Amazon Web Services", alt: "Amazon Web Services logo — prior organization", icon: SiAmazonwebservices },
  { name: "Microsoft", alt: "Microsoft logo — prior organization" },
  { name: "Salesforce", alt: "Salesforce logo — platform partnership", icon: SiSalesforce },
  { name: "Zillow", alt: "Zillow logo — prior organization", icon: SiZillow },
  { name: "T-Mobile", alt: "T-Mobile logo — prior organization" },
  { name: "LivingSocial", alt: "LivingSocial logo — prior organization" },
  { name: "Zendesk", alt: "Zendesk logo — platform partnership", icon: SiZendesk },
  { name: "GitLab", alt: "GitLab logo — platform partnership", icon: SiGitlab },
  { name: "Functionize", alt: "Functionize logo — prior organization" },
  { name: "Windsurf", alt: "Windsurf logo — platform partnership" },
  { name: "Pendo", alt: "Pendo logo — platform partnership" },
  { name: "CrowdStrike", alt: "CrowdStrike logo — enterprise initiative" },
  { name: "Palantir", alt: "Palantir logo — enterprise initiative", icon: SiPalantir },
  { name: "Seattle Storm", alt: "Seattle Storm logo — prior organization" },
  { name: "San Diego Padres", alt: "San Diego Padres logo — prior organization" },
];

function LogoItem({ org }: { org: Organization }) {
  const Icon = org.icon;
  
  return (
    <div
      className="flex items-center justify-center h-12 px-8 flex-shrink-0"
      role="img"
      aria-label={org.alt}
    >
      {Icon ? (
        <Icon className="h-8 w-auto text-white/40" />
      ) : (
        <span className="text-white/40 font-medium text-sm whitespace-nowrap tracking-wide">
          {org.name}
        </span>
      )}
    </div>
  );
}

export default function OrganizationsLogoStrip() {
  const duplicatedOrgs = [...organizations, ...organizations, ...organizations];

  return (
    <section className="py-16 md:py-24 overflow-hidden" id="organizations">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
              Organizations I've Worked With
            </h2>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <button 
                  className="text-white/40 hover:text-white/60 transition-colors"
                  aria-label="More information"
                >
                  <Info className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>No endorsement implied.</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Through direct roles, platform partnerships, and enterprise initiatives.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div 
          className="flex overflow-x-auto scrollbar-hide touch-pan-x"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <motion.div
            className="flex gap-8 md:gap-12 px-6"
            animate={{
              x: [0, -100 * organizations.length],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedOrgs.map((org, index) => (
              <LogoItem key={`${org.name}-${index}`} org={org} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
