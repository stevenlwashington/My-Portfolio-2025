import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-card/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Steven P.</h3>
            <p className="text-sm text-muted-foreground">
              Platform & AI leadership for governance, velocity, and scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#principles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Leadership Principles
              </a>
              <a href="#pvm" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Value Calculator
              </a>
              <a href="#impact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Impact History
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Connect</h3>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" data-testid="button-linkedin">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-github">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-email">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Steven P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
