import { Button } from "@/components/ui/button";
import { Menu, Linkedin, Github, FileText } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
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
            <VisuallyHidden>
              <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>
            <nav className="flex flex-col gap-2 mt-8">
              {/* Blog */}
              <button
                onClick={() => handleClick("/blog")}
                className="flex items-center gap-4 w-full text-left hover-elevate rounded-lg px-4 py-4 transition-colors"
                data-testid="link-blog-mobile"
              >
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span className="text-base font-medium">Blog</span>
              </button>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/stevenlwashington/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full text-left hover-elevate rounded-lg px-4 py-4 transition-colors"
                data-testid="button-linkedin-mobile"
                onClick={() => setIsOpen(false)}
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <span className="text-base font-medium">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/stevenlwashington"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full text-left hover-elevate rounded-lg px-4 py-4 transition-colors"
                data-testid="button-github-mobile"
                onClick={() => setIsOpen(false)}
              >
                <Github className="h-5 w-5 text-muted-foreground" />
                <span className="text-base font-medium">GitHub</span>
              </a>

              {/* Contact CTA */}
              <Button 
                size="lg"
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
