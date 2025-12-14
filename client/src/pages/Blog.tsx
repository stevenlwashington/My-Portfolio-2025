import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">Blog</h1>
          <p className="text-lg text-white/80 mb-12 max-w-2xl">
            Thoughts on platform engineering, AI governance, and building systems that scale.
          </p>
          
          <Card className="border-cyan-500/20 bg-slate-800/50">
            <CardContent className="p-12 text-center">
              <FileText className="w-12 h-12 text-cyan-400/50 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Coming Soon</h2>
              <p className="text-white/60">
                Blog posts are in development. Check back soon for insights on platform strategy, leadership, and technical deep dives.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
