import Link from "next/link";
import { Metadata } from "next";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume | Ayush Yadav",
  description: "Content Strategist & Creative Producer",
};

export default function ResumePage() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-black selection:text-white">
      {/* Print-only styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { margin: 1cm; }
          nav, .no-print { display: none !important; }
          body, main { background: white !important; color: black !important; }
          .print-break-avoid { page-break-inside: avoid; break-inside: avoid; }
        }
      `}} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center text-foreground mix-blend-difference no-print">
        <Link href="/" className="inline-flex items-center gap-2 font-medium hover:opacity-70 transition-opacity text-white">
          <i className="fi fi-rr-arrow-left mt-1 text-sm" /> Back to Site
        </Link>
        <div className="text-white">
          <PrintButton />
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-32 pb-32 max-w-4xl print:pt-8 print:pb-0">
        
        {/* Header */}
        <header className="border-b border-black/10 pb-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 print:pb-6 print:mb-6">
          <div>
            <h1 className="font-serif text-6xl md:text-8xl tracking-tight mb-4 print:text-5xl print:mb-2">Ayush Yadav</h1>
            <p className="font-mono text-sm uppercase tracking-widest text-muted">
              Content Strategist & Creative Producer
            </p>
          </div>
          <div className="text-sm font-mono text-muted space-y-3 md:space-y-2 flex flex-col items-start md:items-end print:space-y-1">
            <a href="mailto:iamayushyadav2804@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
              <i className="fi fi-rr-envelope mt-1" /> Email
            </a>
            <a href="https://www.linkedin.com/in/ayush-yadav-300b43287/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
              <i className="fi fi-brands-linkedin mt-1" /> LinkedIn
            </a>
            <a href="https://www.instagram.com/contentkakalesh/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
              <i className="fi fi-brands-instagram mt-1" /> Instagram
            </a>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-16 print:mb-8 print-break-avoid">
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl print:text-lg">
            I don&apos;t just make content—I build stories and experiences that actually stick with people. I love being hands-on with every part of the creative process, from the early brainstorming and camera work to the final edit and hitting publish. For me, it&apos;s all about turning a few seconds of attention into something genuinely memorable.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-16 print:mb-8">
          <h2 className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-muted mb-8 pb-2 border-b border-black/10 print:mb-4">
            <i className="fi fi-rr-briefcase mt-0.5" /> Professional Experience
          </h2>
          
          <div className="space-y-12 print:space-y-6">
            <div className="print-break-avoid">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4 gap-2 print:mb-2">
                <h3 className="font-serif text-3xl print:text-2xl">Creative Director & Producer</h3>
                <span className="font-mono text-sm text-muted">2025 — Present</span>
              </div>
              <p className="text-muted leading-relaxed mb-4 print:mb-2 print:text-sm">
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

            <div className="print-break-avoid">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4 gap-2 print:mb-2">
                <h3 className="font-serif text-3xl print:text-2xl">Content Strategist</h3>
                <span className="font-mono text-sm text-muted">2024 - 2025</span>
              </div>
              <p className="text-muted leading-relaxed mb-4 print:mb-2 print:text-sm">
                Developing comprehensive content architectures for enterprise brands. Focus on audience psychology, platform-specific distribution strategies, and high-impact visual storytelling systems.
              </p>
            </div>

            <div className="print-break-avoid">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4 gap-2 print:mb-2">
                <h3 className="font-serif text-3xl print:text-2xl">Creative Producer</h3>
                <span className="font-mono text-sm text-muted">2023 - 2024</span>
              </div>
              <p className="text-muted leading-relaxed print:text-sm">
                Led end-to-end production for commercial and documentary campaigns. Managed creative teams, oversaw cinematography, and directed editorial narratives from concept to final delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities & Skills */}
        <section className="mb-16 print:mb-8 print-break-avoid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 print:gap-8">
            <div>
              <h2 className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-muted mb-8 pb-2 border-b border-black/10 print:mb-4">
                <i className="fi fi-rr-magic-wand mt-0.5" /> Capabilities
              </h2>
              <div className="space-y-4 font-medium text-foreground/90 print:space-y-2 print:text-sm">
                <p className="flex items-center gap-3"><i className="fi fi-rr-layers text-muted mt-1" /> Content Strategy & Creative Direction</p>
                <p className="flex items-center gap-3"><i className="fi fi-rr-video-camera-alt text-muted mt-1" /> Cinematography & Video Editing</p>
                <p className="flex items-center gap-3"><i className="fi fi-rr-play-alt text-muted mt-1" /> Visual Storytelling & Narrative Design</p>
                <p className="flex items-center gap-3"><i className="fi fi-rr-share text-muted mt-1" /> Social Media Campaigns & Distribution</p>
                <p className="flex items-center gap-3"><i className="fi fi-rr-users text-muted mt-1" /> Audience Research & Psychology</p>
                <p className="flex items-center gap-3"><i className="fi fi-rr-briefcase text-muted mt-1" /> End-to-End Production Management</p>
              </div>
            </div>

            <div>
              <h2 className="font-mono text-sm uppercase tracking-widest text-muted mb-8 pb-2 border-b border-black/10 print:mb-4">
                Technical Skills
              </h2>
              <div className="space-y-4 font-medium text-foreground/90 print:space-y-2 print:text-sm">
                <div className="flex items-center gap-3">
                  <i className="fi fi-brands-premiere text-xl text-muted print:text-lg" />
                  <p>Adobe Premiere Pro</p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fi fi-brands-after-effects text-xl text-muted print:text-lg" />
                  <p>Adobe After Effects</p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fi fi-brands-photoshop text-xl text-muted print:text-lg" />
                  <p>Adobe Photoshop</p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fi fi-brands-photoshop-lightroom text-xl text-muted print:text-lg" />
                  <p>Adobe Lightroom</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://cdn.simpleicons.org/davinciresolve/707070" alt="Davinci Resolve" className="w-5 h-5 print:w-4 print:h-4" />
                  <p>Davinci Resolve</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="print-break-avoid">
          <h2 className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-muted mb-8 pb-2 border-b border-black/10 print:mb-4">
            <i className="fi fi-rr-graduation-cap mt-0.5" /> Education
          </h2>
          <div>
            <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-2 gap-2 print:mb-1">
              <h3 className="font-serif text-2xl print:text-xl">Bachelor in Technology (B.Tech - CSE)</h3>
              <span className="font-mono text-sm text-muted">2023 - 2027</span>
            </div>
            <p className="text-foreground/80 font-medium text-lg print:text-base">JECRC University, Jaipur</p>
          </div>
        </section>

      </div>
    </main>
  );
}
