import { Button } from "@/components/ui/button";
import { Menu, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BrandLogo from "./BrandLogo";

interface HeaderProps {
  onNavigate?: (section: string) => void;
  onContactClick?: () => void;
}

export default function Header({ onNavigate, onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Blog", href: "/blog" },
  ];

  const handleClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
    } else if (onNavigate) {
      onNavigate(href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick("/")}
          className="hover-elevate rounded-lg px-3 py-2 transition-colors"
          data-testid="button-logo"
          aria-label="Return to home page"
        >
          <BrandLogo />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded-md px-3 py-2"
              data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              asChild
              data-testid="button-linkedin"
            >
              <a href="https://www.linkedin.com/in/stevenlwashington/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
              data-testid="button-github"
            >
              <a href="https://github.com/stevenlwashington" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <Button 
            size="sm" 
            onClick={onContactClick}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold"
            data-testid="button-contact"
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="text-lg font-medium text-left hover-elevate rounded-md px-4 py-3"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-2 px-4">
                <Button
                  size="icon"
                  variant="ghost"
                  asChild
                  data-testid="button-linkedin-mobile"
                >
                  <a href="https://www.linkedin.com/in/stevenlwashington/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  asChild
                  data-testid="button-github-mobile"
                >
                  <a href="https://github.com/stevenlwashington" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <Button 
                className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold" 
                onClick={() => {
                  setIsOpen(false);
                  onContactClick?.();
                }}
                data-testid="button-contact-mobile"
              >
                Contact
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
