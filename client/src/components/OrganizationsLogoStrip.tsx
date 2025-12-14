import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const organizations = [
  { name: "Zillow", alt: "Zillow logo — prior organization" },
  { name: "Amazon", alt: "Amazon logo — prior organization" },
  { name: "AWS", alt: "AWS logo — prior organization" },
  { name: "Salesforce", alt: "Salesforce logo — platform partnership" },
  { name: "Microsoft", alt: "Microsoft logo — enterprise initiative" },
  { name: "Google Cloud", alt: "Google Cloud logo — enterprise initiative" },
  { name: "Snowflake", alt: "Snowflake logo — platform partnership" },
  { name: "Tableau", alt: "Tableau logo — platform partnership" },
  { name: "Databricks", alt: "Databricks logo — enterprise initiative" },
  { name: "Confluent", alt: "Confluent logo — platform partnership" },
  { name: "MongoDB", alt: "MongoDB logo — platform partnership" },
  { name: "Redis", alt: "Redis logo — platform partnership" },
  { name: "Docker", alt: "Docker logo — platform partnership" },
  { name: "Kubernetes", alt: "Kubernetes logo — platform partnership" },
  { name: "GitHub", alt: "GitHub logo — platform partnership" },
  { name: "GitLab", alt: "GitLab logo — platform partnership" },
  { name: "Jenkins", alt: "Jenkins logo — platform partnership" },
  { name: "CircleCI", alt: "CircleCI logo — platform partnership" },
  { name: "Terraform", alt: "Terraform logo — platform partnership" },
  { name: "HashiCorp", alt: "HashiCorp logo — platform partnership" },
  { name: "Datadog", alt: "Datadog logo — platform partnership" },
  { name: "Splunk", alt: "Splunk logo — platform partnership" },
  { name: "New Relic", alt: "New Relic logo — platform partnership" },
  { name: "PagerDuty", alt: "PagerDuty logo — platform partnership" },
  { name: "Okta", alt: "Okta logo — platform partnership" },
  { name: "Auth0", alt: "Auth0 logo — platform partnership" },
  { name: "Stripe", alt: "Stripe logo — enterprise initiative" },
  { name: "Twilio", alt: "Twilio logo — platform partnership" },
  { name: "SendGrid", alt: "SendGrid logo — platform partnership" },
  { name: "Segment", alt: "Segment logo — platform partnership" },
  { name: "Amplitude", alt: "Amplitude logo — platform partnership" },
  { name: "Mixpanel", alt: "Mixpanel logo — platform partnership" },
  { name: "Heap", alt: "Heap logo — platform partnership" },
  { name: "Looker", alt: "Looker logo — platform partnership" },
  { name: "dbt", alt: "dbt logo — platform partnership" },
  { name: "Fivetran", alt: "Fivetran logo — platform partnership" },
  { name: "Airbyte", alt: "Airbyte logo — platform partnership" },
  { name: "MuleSoft", alt: "MuleSoft logo — platform partnership" },
  { name: "Workato", alt: "Workato logo — platform partnership" },
  { name: "Zapier", alt: "Zapier logo — platform partnership" },
];

function LogoPlaceholder({ name, alt }: { name: string; alt: string }) {
  return (
    <div
      className="flex items-center justify-center h-12 px-6 flex-shrink-0"
      role="img"
      aria-label={alt}
    >
      <span className="text-white/30 font-medium text-sm whitespace-nowrap tracking-wide">
        {name}
      </span>
    </div>
  );
}

export default function OrganizationsLogoStrip() {
  const duplicatedOrgs = [...organizations, ...organizations];

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
            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  className="text-white/40 hover:text-white/60 transition-colors"
                  aria-label="More information"
                >
                  <Info className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
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
            className="flex gap-6 md:gap-10 px-6"
            animate={{
              x: [0, -40 * organizations.length],
            }}
            transition={{
              x: {
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedOrgs.map((org, index) => (
              <LogoPlaceholder
                key={`${org.name}-${index}`}
                name={org.name}
                alt={org.alt}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
