import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: December 2025</p>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
            <p>
              This privacy policy explains how Steven Washington ("I", "me", or "my") collects, uses, and protects 
              information when you visit stevenwa.com (the "Site"). I respect your privacy and am committed to 
              protecting any information you share.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Information I Collect</h2>
            
            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Contact Form</h3>
            <p className="mb-4">
              When you submit the contact form, I collect:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message content</li>
              <li>Optionally, your company name</li>
            </ul>
            <p className="mt-4">
              This information is used solely to respond to your inquiry. I do not sell, share, or use this 
              information for marketing purposes.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Analytics</h3>
            <p className="mb-4">
              This site uses privacy-focused analytics to understand how visitors use the site:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Cloudflare Web Analytics</strong> — Collects anonymous, aggregated data about page views, 
                referrers, countries, and devices. No cookies are used and no personal data is collected.
              </li>
              <li>
                <strong>Microsoft Clarity</strong> — Collects behavioral data such as clicks, scrolls, and session 
                recordings to help improve user experience. Clarity masks sensitive content and does not collect 
                personal information you enter into forms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Bot Protection</h2>
            <p>
              The contact form uses Cloudflare Turnstile to prevent spam and abuse. Turnstile analyzes browser 
              behavior to verify you are human without using CAPTCHAs. It does not track you across sites or 
              collect personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Cookies</h2>
            <p>
              This site does not use cookies for tracking or advertising. Analytics tools used are cookie-free 
              or use only essential session cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Data Retention</h2>
            <p>
              Contact form submissions are retained only as long as necessary to respond to your inquiry. 
              Analytics data is aggregated and anonymized, with no individual user data stored long-term.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal information 
              I may hold about you. To make such a request, please contact me at{" "}
              <a 
                href="mailto:stevenlwashington@gmail.com" 
                className="text-cyan-400 hover:underline"
              >
                stevenlwashington@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p>
              I may update this privacy policy from time to time. Any changes will be posted on this page 
              with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Contact</h2>
            <p>
              If you have any questions about this privacy policy, please contact me at{" "}
              <a 
                href="mailto:stevenlwashington@gmail.com" 
                className="text-cyan-400 hover:underline"
              >
                stevenlwashington@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
