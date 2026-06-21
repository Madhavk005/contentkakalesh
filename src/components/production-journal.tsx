"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const journalSteps = [
  {
    id: "01",
    title: "Script Development",
    description: "Finding the narrative core and structural pacing. We strip away the corporate jargon and reverse-engineer the hook based purely on audience psychology.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Storyboarding",
    description: "Visualizing the flow before a single frame is shot. Every cut, transition, and camera movement is meticulously mapped to ensure narrative momentum.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Production Planning",
    description: "Logistics, crew assembly, and location scouting. Ensuring that the physical reality on shoot day perfectly matches the strategic vision.",
    image: "https://images.unsplash.com/photo-1517486430290-356571168015?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Shoot Day",
    description: "Executing the vision with precision and adaptability. Directing talent, managing lighting setups, and capturing the raw, authentic moments.",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Post Production",
    description: "Editing, sound design, and color grading to build emotion. This is where the pacing is locked in and the atmospheric tension is built.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Publishing",
    description: "Strategic distribution to maximize cultural impact. Algorithmic placement, metadata optimization, and community engagement tactics.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
  },
];

export const ProductionJournal = () => {
  const [openStep, setOpenStep] = useState<string | null>("01");

  const toggleStep = (id: string) => {
    setOpenStep(openStep === id ? null : id);
  };

  return (
    <section className="py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="mb-24 md:mb-32">
          <h2 className="text-sm font-medium tracking-wider uppercase text-white/40 mb-4 font-mono">
            The Process
          </h2>
          <p className="font-serif text-5xl md:text-7xl text-white tracking-tight leading-[1.1]">
            Production Journal.
          </p>
        </div>

        <div className="border-t border-white/10">
          {journalSteps.map((step) => {
            const isOpen = openStep === step.id;

            return (
              <div key={step.id} className="border-b border-white/10">
                <button
                  onClick={() => toggleStep(step.id)}
                  className="w-full py-8 md:py-12 flex items-center justify-between group focus:outline-none"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className={cn(
                      "font-mono text-sm md:text-base transition-colors duration-500",
                      isOpen ? "text-accent" : "text-white/30 group-hover:text-white/60"
                    )}>
                      {step.id}
                    </span>
                    <h3 className={cn(
                      "font-serif text-3xl md:text-5xl tracking-tight transition-all duration-500 text-left",
                      isOpen ? "text-white" : "text-white/50 group-hover:text-white group-hover:translate-x-2"
                    )}>
                      {step.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "w-12 h-12 rounded-full border flex items-center justify-center transition-colors duration-500 shrink-0",
                      isOpen ? "border-accent text-accent bg-accent/10" : "border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white"
                    )}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 md:pb-16 flex flex-col md:flex-row gap-8 md:gap-16 pt-4">
                        <div className="md:w-1/2">
                          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                            {step.description}
                          </p>
                        </div>
                        <div className="md:w-1/2">
                          <div className="relative aspect-[16/9] md:aspect-[4/3] w-full rounded-xl overflow-hidden bg-white/5">
                            <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
