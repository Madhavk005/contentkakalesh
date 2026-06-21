"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: "why-most-content-fails",
    title: "Why Most Content Fails Before Production",
    category: "Strategy",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    excerpt:
      "The biggest mistake brands make is treating production as the starting point. Great content is reverse-engineered from audience psychology.",
  },
  {
    id: "psychology-of-shareable-stories",
    title: "The Psychology of Shareable Stories",
    category: "Insights",
    date: "Sep 28, 2025",
    readTime: "7 min read",
    excerpt:
      "People don't share content because it's good. They share it because it says something about them. Breaking down the anatomy of virality.",
  },
  {
    id: "production-is-strategy",
    title: "Production Is Strategy",
    category: "Process",
    date: "Aug 15, 2025",
    readTime: "6 min read",
    excerpt:
      "Lighting, pacing, and sound design aren't just technical choices—they are narrative levers that dictate how an audience feels.",
  },
];

export const Thinking = () => {
  return (
    <section id="thinking" className="py-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-black/10 pb-8">
          <div>
            <h2 className="text-sm font-medium tracking-wider uppercase text-muted mb-4 font-mono">
              Writing & Ideas
            </h2>
            <p className="font-serif text-5xl md:text-6xl text-foreground tracking-tight">
              Strategic thinking.
            </p>
          </div>
          <Link
            href="/thinking"
            className="group flex items-center gap-2 text-sm font-medium hover:text-muted transition-colors"
          >
            Read all articles <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="flex flex-col">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/thinking/${article.id}`}
                className="group flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-black/10 hover:bg-black/[0.02] transition-colors -mx-6 px-6"
              >
                <div className="md:w-1/4 flex flex-col justify-between text-sm text-muted font-mono">
                  <span>{article.date}</span>
                  <span className="hidden md:block mt-auto">{article.category}</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-muted transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-lg text-muted/80 leading-relaxed max-w-2xl">
                    {article.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm font-mono text-muted/60 md:hidden">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
