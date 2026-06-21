import { FloatingNav } from "@/components/floating-nav";
import { Hero } from "@/components/hero";
import { FeaturedWork } from "@/components/featured-work";
import { InTheWild } from "@/components/in-the-wild";
import { VisualStorytelling } from "@/components/visual-storytelling";
import { Metrics } from "@/components/metrics";
import { Experience } from "@/components/experience";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="bg-background">
      <FloatingNav />
      <Hero />
      <FeaturedWork />
      <InTheWild />
      <VisualStorytelling />
      <Metrics />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
