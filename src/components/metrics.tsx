"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "10M+", label: "Content Views" },
  { value: "100+", label: "Videos Produced" },
  { value: "50+", label: "Campaign Assets" },
  { value: "20+", label: "Brands & Communities" },
];

export const Metrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-foreground text-background overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 md:mb-32">
          <h2 className="text-sm font-medium tracking-wider uppercase text-white/40 mb-4 font-mono">
            By The Numbers
          </h2>
          <p className="font-serif text-4xl md:text-5xl lg:text-7xl text-white tracking-tight max-w-4xl leading-[1.1]">
            Impact is not an accident. <br className="hidden md:block" />
            <span className="text-white/40 italic">It is an engineered outcome.</span>
          </p>
        </div>

        <div className="border-t border-white/10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-baseline justify-between py-12 md:py-16 border-b border-white/10 group"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[12vw] md:text-[8vw] lg:text-[10vw] font-medium leading-none tracking-tighter text-white/90 group-hover:text-accent transition-colors duration-500"
              >
                {metric.value}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                className="text-lg md:text-2xl font-mono text-white/40 uppercase tracking-widest mt-4 md:mt-0"
              >
                {metric.label}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
