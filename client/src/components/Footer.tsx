import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-card/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Steven Washington</h3>
            <p className="text-sm text-muted-foreground">
              Product thinking. Engineering execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#summary" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Executive Summary
              </a>
              <a href="#philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Leadership Principles
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
              <Button size="icon" variant="ghost" asChild data-testid="button-linkedin-footer">
                <a href="https://www.linkedin.com/in/stevenlwashington/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="button-github-footer">
                <a href="https://github.com/stevenlwashington" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="button-email-footer">
                <a href="mailto:stevenlwashington@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Steven Washington. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
