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
          <div className="text-sm font-mono text-muted space-y-1 text-left md:text-right">
            <p>ayush@example.com</p>
            <p>linkedin.com/in/ayushyadav</p>
            <p>ayushyadav.com</p>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-16">
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
            I don't just create content. I build stories, systems and experiences that people remember. Operating across the complete content lifecycle—from research and strategy to cinematography and distribution—to convert attention into measurable cultural impact.
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
                <h3 className="font-serif text-3xl">Content Strategist</h3>
                <span className="font-mono text-sm text-muted">2026 — Present</span>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                Developing comprehensive content architectures for enterprise brands. Focus on audience psychology, platform-specific distribution strategies, and high-impact visual storytelling systems.
              </p>
              <ul className="list-disc list-inside text-sm text-muted space-y-1 ml-2">
                <li>Architected multi-channel distribution networks yielding millions in organic reach.</li>
                <li>Conducted deep audience research to inform non-corporate brand narratives.</li>
                <li>Managed cross-functional teams of editors and shooters.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4 gap-2">
                <h3 className="font-serif text-3xl">Creative Producer</h3>
                <span className="font-mono text-sm text-muted">2025</span>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                Led end-to-end production for commercial and documentary campaigns. Managed creative teams, oversaw cinematography, and directed editorial narratives from concept to final delivery.
              </p>
              <ul className="list-disc list-inside text-sm text-muted space-y-1 ml-2">
                <li>Produced the "Home Away From Home" documentary securing 2M+ views.</li>
                <li>Pioneered rapid-turnaround production frameworks for social-first campaigns.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4 gap-2">
                <h3 className="font-serif text-3xl">Content Creator</h3>
                <span className="font-mono text-sm text-muted">2024</span>
              </div>
              <p className="text-muted leading-relaxed">
                Built foundational skills in video editing, shooting, and rapid social media production. Grew early audiences through raw, authentic storytelling formats and visual essays.
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

        {/* Education (Placeholder) */}
        <section>
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted mb-8 pb-2 border-b border-black/10">
            Education
          </h2>
          <div className="flex flex-col md:flex-row justify-between md:items-baseline">
            <h3 className="font-serif text-2xl">B.A. Cinematography & Media Studies</h3>
            <span className="font-mono text-sm text-muted">2020 — 2024</span>
          </div>
        </section>

      </div>
    </main>
  );
}
