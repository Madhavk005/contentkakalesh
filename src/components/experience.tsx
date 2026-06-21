"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: "01",
    year: "2026",
    role: "Content Strategist",
    description: "Developing comprehensive content architectures for enterprise brands. Focus on audience psychology, platform-specific distribution strategies, and high-impact visual storytelling systems.",
  },
  {
    id: "02",
    year: "2025",
    role: "Creative Producer",
    description: "Led end-to-end production for commercial and documentary campaigns. Managed creative teams, oversaw cinematography, and directed editorial narratives from concept to final delivery.",
  },
  {
    id: "03",
    year: "2024",
    role: "Content Creator",
    description: "Built foundational skills in video editing, shooting, and rapid social media production. Grew early audiences through raw, authentic storytelling formats.",
  },
];

export const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="experience" className="py-32 bg-background text-foreground">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <h2 className="text-sm font-medium tracking-wider uppercase text-muted mb-4 font-mono">
            Section 08
          </h2>
          <p className="font-serif text-5xl md:text-6xl tracking-tight">
            Experience.
          </p>
        </div>

        <div className="max-w-4xl border-t border-black/10">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={exp.id}
                className="border-b border-black/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between py-10 group text-left"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
                    <span className="font-mono text-xl text-muted w-24">
                      {exp.year}
                    </span>
                    <span className="font-serif text-4xl md:text-5xl transition-colors group-hover:text-muted">
                      {exp.role}
                    </span>
                  </div>
                  <ChevronDown className={cn(
                    "w-6 h-6 text-muted transition-transform duration-500",
                    isOpen && "rotate-180"
                  )} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="pb-10 md:pl-40 pr-8">
                        <p className="text-xl text-muted font-light leading-relaxed max-w-2xl">
                          {exp.description}
                        </p>
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
