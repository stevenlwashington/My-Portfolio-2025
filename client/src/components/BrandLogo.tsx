interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = "w-8 h-8" }: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      
      {/* Outer hexagon - represents platform/infrastructure */}
      <path
        d="M20 2L36 11V29L20 38L4 29V11L20 2Z"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Inner circuit pattern - represents AI/technology */}
      <circle cx="20" cy="20" r="6" stroke="url(#logoGradient)" strokeWidth="1.5" fill="none" />
      
      {/* Connection nodes - represents product thinking/connectivity */}
      <circle cx="20" cy="8" r="2" fill="url(#logoGradient)" />
      <circle cx="30" cy="14" r="2" fill="url(#logoGradient)" />
      <circle cx="30" cy="26" r="2" fill="url(#logoGradient)" />
      <circle cx="20" cy="32" r="2" fill="url(#logoGradient)" />
      <circle cx="10" cy="26" r="2" fill="url(#logoGradient)" />
      <circle cx="10" cy="14" r="2" fill="url(#logoGradient)" />
      
      {/* Lines connecting to center - data flow/integration */}
      <line x1="20" y1="10" x2="20" y2="14" stroke="url(#logoGradient)" strokeWidth="1.5" />
      <line x1="28" y1="15" x2="25" y2="17" stroke="url(#logoGradient)" strokeWidth="1.5" />
      <line x1="28" y1="25" x2="25" y2="23" stroke="url(#logoGradient)" strokeWidth="1.5" />
      <line x1="20" y1="30" x2="20" y2="26" stroke="url(#logoGradient)" strokeWidth="1.5" />
      <line x1="12" y1="25" x2="15" y2="23" stroke="url(#logoGradient)" strokeWidth="1.5" />
      <line x1="12" y1="15" x2="15" y2="17" stroke="url(#logoGradient)" strokeWidth="1.5" />
      
      {/* Center dot - the core/you */}
      <circle cx="20" cy="20" r="2.5" fill="url(#logoGradient)" />
    </svg>
  );
}
