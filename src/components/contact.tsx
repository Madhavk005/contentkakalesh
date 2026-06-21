"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { name: "Email", href: "mailto:hello@ayushyadav.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Resume", href: "/resume.pdf" },
];

export const Contact = () => {
  return (
    <section className="min-h-screen bg-foreground text-background flex flex-col justify-between py-12">
      <div className="container mx-auto px-6 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-16 leading-tight">
            Let&apos;s build something <span className="font-serif italic text-white/60">people remember.</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-2 text-xl font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.name}
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Ayush Yadav. All rights reserved.</p>
          <p>Designed with intentionality.</p>
        </div>
      </div>
    </section>
  );
};
