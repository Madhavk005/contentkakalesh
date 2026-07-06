import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume | Ayush Yadav",
  description: "Content Strategist & Creative Producer",
};

export default function ResumePage() {
  return (
    <main className="bg-[#F5F5F0] min-h-screen text-foreground selection:bg-black selection:text-white">
      {/* Print-only styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { margin: 2cm; }
          nav, .no-print { display: none !important; }
          body { background: white !important; }
          main { background: white !important; }
        }
      `}} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-white no-print">
        <Link href="/" className="inline-flex items-center gap-2 font-medium hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> Back to Site
        </Link>
        <PrintButton />
      </nav>

      <div className="container mx-auto px-6 pt-32 pb-32 max-w-4xl">
        
        {/* Header */}
        <header className="border-b border-black/10 pb-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="font-serif text-6xl md:text-8xl tracking-tight mb-4">Ayush Yadav</h1>
            <p className="font-mono text-sm uppercase tracking-widest text-muted">
              Content Strategist & Creative Producer
            </p>
          </div>
          <div className="text-sm font-mono text-muted space-y-1 flex flex-col items-start md:items-end">
            <a href="mailto:iamayushyadav2804@gmail.com" className="hover:text-foreground transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/ayush-yadav-300b43287/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/contentkakalesh/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-16">
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
            I don&apos;t just make content—I build stories and experiences that actually stick with people. I love being hands-on with every part of the creative process, from the early brainstorming and camera work to the final edit and hitting publish. For me, it&apos;s all about turning a few seconds of attention into something genuinely memorable.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted mb-8 pb-2 border-b border-black/10">
            Professional Experience
          </h2>
          
          <div className="space-y-12">
            <div>
              <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4 gap-2">
                <h3 className="font-serif text-3xl">Creative Director & Producer</h3>
                <span className="font-mono text-sm text-muted">2025 — Present</span>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                Spearheading end-to-end creative visions for high-impact campaigns. Bridging the gap between creative strategy and full-scale production to deliver compelling visual narratives.
              </p>
              <ul className="list-disc list-inside text-sm text-muted space-y-1 ml-2">
                <li>Architected multi-channel distribution networks yielding millions in organic reach.</li>
                <li>Conducted deep audience research to inform non-corporate brand narratives.</li>
                <li>Managed cross-functional teams of editors and shooters.</li>
                <li>Produced the &quot;Home Away From Home&quot; documentary securing 2M+ views.</li>
                <li>Pioneered rapid-turnaround production frameworks for social-first campaigns.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4 gap-2">
                <h3 className="font-serif text-3xl">Content Strategist</h3>
                <span className="font-mono text-sm text-muted">2024 - 2025</span>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                Developing comprehensive content architectures for enterprise brands. Focus on audience psychology, platform-specific distribution strategies, and high-impact visual storytelling systems.
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4 gap-2">
                <h3 className="font-serif text-3xl">Creative Producer</h3>
                <span className="font-mono text-sm text-muted">2023 - 2024</span>
              </div>
              <p className="text-muted leading-relaxed">
                Led end-to-end production for commercial and documentary campaigns. Managed creative teams, oversaw cinematography, and directed editorial narratives from concept to final delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities & Skills */}
        <section className="mb-16">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted mb-8 pb-2 border-b border-black/10">
            Capabilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-medium">
            <div className="space-y-3">
              <p>Content Strategy</p>
              <p>Creative Direction</p>
              <p>Production</p>
            </div>
            <div className="space-y-3">
              <p>Cinematography</p>
              <p>Video Editing</p>
              <p>Visual Storytelling</p>
            </div>
            <div className="space-y-3">
              <p>Social Media Campaigns</p>
              <p>Audience Research</p>
              <p>Narrative Design</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted mb-8 pb-2 border-b border-black/10">
            Education
          </h2>
          <div className="flex flex-col md:flex-row justify-between md:items-baseline">
            <h3 className="font-serif text-2xl">Bachelor in Technology (B.Tech - CSE)</h3>
            <span className="font-mono text-sm text-muted">2023 - 2027</span>
          </div>
        </section>

      </div>
    </main>
  );
}
