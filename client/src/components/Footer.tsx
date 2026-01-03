import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] sm:border-border bg-card/30 mt-12 sm:mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-base mb-4">Steven Washington</h3>
            <p className="text-sm text-muted-foreground">
              Product thinking. Engineering execution.
            </p>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-semibold text-base mb-4">Explore</h3>
            <div className="flex flex-col gap-2">
              <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-base mb-4">Connect</h3>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/in/stevenlwashington/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-linkedin-footer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/stevenlwashington" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-github-footer"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 Steven Washington. All rights reserved.</p>
          <a 
            href="/privacy" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-privacy"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
