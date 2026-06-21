"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const rotatingPhrases = [
  "people remember.",
  "that shift culture.",
  "you can't ignore.",
  "that drive action.",
  "worth sharing."
];

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);



  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000); // Change phrase every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 flex flex-col items-center text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 flex flex-col items-center">
            <span className="mb-2 md:mb-4">Building stories</span>
            <div className="min-h-[1.5em] flex items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentPhraseIndex}
                  initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif italic text-muted block py-2"
                >
                  {rotatingPhrases[currentPhraseIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-lg md:text-xl font-mono uppercase tracking-widest mb-6 text-muted">
            Strategy. Production. Cinematography.
          </h2>
          <p className="text-foreground/80 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Ayush Yadav is a content strategist and creative producer driving cultural impact through visual storytelling.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#work"
            className="group relative inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium overflow-hidden transition-transform active:scale-95"
          >
            <span className="relative z-10">View Work</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </Link>
          <Link
            href="#about"
            className="group relative inline-flex items-center gap-2 bg-transparent text-foreground border border-black/10 px-8 py-4 rounded-full font-medium hover:bg-black/5 transition-colors active:scale-95"
          >
            About Me
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative gradient blur in background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
    </section>
  );
};
