interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <span className={`font-bold text-white text-lg tracking-tight ${className}`}>
      Steven Washington
    </span>
  );
}
