"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const philosophyText = "I view content not as a checklist of deliverables, but as a structured narrative system. Aesthetics draw people in; psychology keeps them watching. My philosophy is simple: clarity over decoration, substance over trends.";

const words = philosophyText.split(" ");

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[1.5vw] lg:mr-[1vw]">
      {children}
    </motion.span>
  );
};

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="about" className="bg-background relative z-10 pt-32 pb-32">
      <div className="container mx-auto px-6">
        
        <div className="mb-8">
          <h2 className="text-sm font-medium tracking-wider uppercase text-muted mb-4 font-mono">
            The Philosophy
          </h2>
        </div>

        {/* Word-by-Word Scroll Reveal */}
        <div ref={containerRef} className="max-w-6xl mb-32 h-[150vh] relative">
          <div className="sticky top-1/4">
            <p className="font-serif text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.1] text-foreground tracking-tight flex flex-wrap">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </p>
          </div>
        </div>

        {/* Editorial Index Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left: Sticky Portrait */}
          <div className="lg:w-5/12">
            <div className="sticky top-32 w-full aspect-[3/4] overflow-hidden bg-black/5">
              <Image
                src="/ayush.png"
                alt="Ayush Yadav"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
            </div>
          </div>

          {/* Right: Stacked Editorial Chapters */}
          <div className="lg:w-7/12 flex flex-col pt-12 lg:pt-0">
            
            <div className="border-t border-black/10 py-16">
              <div className="flex items-start gap-8">
                <span className="font-mono text-sm text-muted mt-2">01</span>
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-widest text-muted mb-6">Who I Am</h3>
                  <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
                    A strategist and producer who engineers narratives.
                  </p>
                  <p className="mt-8 text-lg text-muted leading-relaxed max-w-xl">
                    I build stories that cut through the noise by being undeniably human, relentlessly authentic, and visually sophisticated. The goal is never just to make noise, but to orchestrate resonance.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/10 py-16">
              <div className="flex items-start gap-8">
                <span className="font-mono text-sm text-muted mt-2">02</span>
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-widest text-muted mb-6">What Drives Me</h3>
                  <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
                    Translating complexity into visceral emotion.
                  </p>
                  <p className="mt-8 text-lg text-muted leading-relaxed max-w-xl">
                    I am driven by the process of taking a complex idea, distilling it to its absolute core, and presenting it in a way that makes it impossible to ignore.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-y border-black/10 py-16">
              <div className="flex items-start gap-8">
                <span className="font-mono text-sm text-muted mt-2">03</span>
                <div className="w-full">
                  <h3 className="font-mono text-sm uppercase tracking-widest text-muted mb-10">The Playbook</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div>
                      <h4 className="font-medium mb-3 text-foreground text-xl">Strategy</h4>
                      <p className="text-muted leading-relaxed">Reverse-engineering content from audience psychology rather than brand assumptions.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-foreground text-xl">Production</h4>
                      <p className="text-muted leading-relaxed">Utilizing pacing, lighting, and sound design as precise narrative levers.</p>
                    </div>
                    <div className="md:col-span-2 pt-6 border-t border-black/5">
                      <h4 className="font-medium mb-3 text-foreground text-xl">Distribution</h4>
                      <p className="text-muted leading-relaxed">Maximizing cultural impact through strategic platform placement and algorithmic understanding.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
