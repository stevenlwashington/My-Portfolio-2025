import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { SiAmazonwebservices } from "react-icons/si";
import microsoftLogo from "@assets/microsoft_1766294022812.png";
import salesforceLogo from "@assets/salesforce_1766294022812.png";
import zillowLogo from "@assets/zillow_1766294022812.png";
import tmobileLogo from "@assets/t-mobile_1766294022811.png";
import livingsocialLogo from "@assets/livingsocial_1766294022811.png";
import zendeskLogo from "@assets/zendesk_1766294022812.png";
import gitlabLogo from "@assets/gitlab_1766294022813.png";
import functionizeLogo from "@assets/functionize_1766294022811.png";
import windsurfLogo from "@assets/windsurf_1766294022811.png";
import pendoLogo from "@assets/pendo_1766294022811.png";
import crowdstrikeLogo from "@assets/crowdstrike_1766294022812.png";
import palantirLogo from "@assets/palantir_1766294022812.png";

interface Organization {
  name: string;
  alt: string;
  icon?: typeof SiAmazonwebservices;
  logoPath?: string;
  size?: "normal" | "large" | "xlarge";
}

const organizations: Organization[] = [
  { name: "Amazon Web Services", alt: "Amazon Web Services logo — prior organization", icon: SiAmazonwebservices },
  { name: "Microsoft", alt: "Microsoft logo — prior organization", logoPath: microsoftLogo },
  { name: "Salesforce", alt: "Salesforce logo — platform partnership", logoPath: salesforceLogo, size: "xlarge" },
  { name: "Zillow", alt: "Zillow logo — prior organization", logoPath: zillowLogo },
  { name: "T-Mobile", alt: "T-Mobile logo — prior organization", logoPath: tmobileLogo },
  { name: "LivingSocial", alt: "LivingSocial logo — prior organization", logoPath: livingsocialLogo },
  { name: "Zendesk", alt: "Zendesk logo — platform partnership", logoPath: zendeskLogo, size: "large" },
  { name: "GitLab", alt: "GitLab logo — platform partnership", logoPath: gitlabLogo },
  { name: "Functionize", alt: "Functionize logo — prior organization", logoPath: functionizeLogo },
  { name: "Windsurf", alt: "Windsurf logo — platform partnership", logoPath: windsurfLogo },
  { name: "Pendo", alt: "Pendo logo — platform partnership", logoPath: pendoLogo },
  { name: "CrowdStrike", alt: "CrowdStrike logo — enterprise initiative", logoPath: crowdstrikeLogo },
  { name: "Palantir", alt: "Palantir logo — enterprise initiative", logoPath: palantirLogo },
];

function LogoItem({ org }: { org: Organization }) {
  const Icon = org.icon;
  const sizeClass = org.size === "xlarge" ? "max-h-14" : org.size === "large" ? "max-h-10" : "max-h-8";
  
  return (
    <div
      className="flex items-center justify-center h-16 px-2 flex-shrink-0"
      role="img"
      aria-label={org.alt}
    >
      {Icon ? (
        <Icon className="h-10 w-auto text-white/65 transition-opacity duration-200 hover:text-white/90" />
      ) : org.logoPath ? (
        <img 
          src={org.logoPath} 
          alt={org.name}
          className={`${sizeClass} w-auto object-contain opacity-65 transition-opacity duration-200 hover:opacity-90`}
        />
      ) : (
        <span className="text-white/65 font-medium text-sm whitespace-nowrap tracking-wide">
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
            Through direct leadership roles and large-scale platform initiatives.
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
            className="flex items-center gap-10 md:gap-12 px-6"
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
