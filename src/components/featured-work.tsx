"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

import { projects } from "@/data/projects";

const HoverVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // Set volume to 50%
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
          }
        });
      }
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      playsInline
      className="object-cover w-full h-full absolute inset-0"
    />
  );
};

export const FeaturedWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="bg-background relative z-20 py-32">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
          <div>
            <h2 className="text-sm font-medium tracking-wider uppercase text-muted mb-4 font-mono">
              Selected Work
            </h2>
            <p className="font-serif text-5xl md:text-6xl text-foreground tracking-tight">
              Proof of concept.
            </p>
          </div>
        </div>

        {/* Desktop Split Layout */}
        <div className="hidden lg:flex gap-16 relative items-start">
          
          {/* Left: Interactive List */}
          <div 
            className="w-full lg:w-1/2 flex flex-col pb-16"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col">
              {projects.slice(0, 5).map((project, index) => (
                <Link
                  key={project.id}
                  href={`/work/${project.id}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="group border-b border-black/10 py-8 flex flex-col relative"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={cn(
                      "font-serif text-5xl tracking-tight transition-colors duration-500",
                      hoveredIndex === index ? "text-foreground" : "text-muted/40 group-hover:text-muted"
                    )}>
                      {project.title}
                    </h3>
                    <ArrowUpRight className={cn(
                      "w-8 h-8 transition-all duration-500",
                      hoveredIndex === index ? "text-foreground opacity-100 translate-x-1 -translate-y-1" : "text-muted/40 opacity-0 -translate-x-4 translate-y-4"
                    )} />
                  </div>
                  
                  <div className="flex gap-4 text-sm font-mono uppercase tracking-wider">
                    <span className={cn(
                      "transition-colors duration-500",
                      hoveredIndex === index ? "text-foreground" : "text-muted/40"
                    )}>{project.year}</span>
                    <span className={cn(
                      "transition-colors duration-500",
                      hoveredIndex === index ? "text-foreground" : "text-muted/40"
                    )}>{project.category}</span>
                  </div>
                </Link>
              ))}
              <Link 
                href="/work"
                className="mt-8 group flex items-center justify-between border-b border-black/10 pb-6 hover:border-black/30 transition-colors"
              >
                <span className="font-mono text-sm uppercase tracking-widest text-muted group-hover:text-foreground transition-colors">
                  Explore All Archives
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-foreground transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Right: Sticky Image/Video Preview */}
          <div className="w-1/2 sticky top-32 h-[70vh] rounded-xl overflow-hidden transition-colors duration-500">
            <AnimatePresence mode="wait">
              {hoveredIndex !== null && (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-black/5"
                >
                  {projects[hoveredIndex].video ? (
                    <HoverVideo src={projects[hoveredIndex].video} />
                  ) : (
                    <Image
                      src={projects[hoveredIndex].image}
                      alt={projects[hoveredIndex].title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Overlay Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white/80 text-lg">
                      {projects[hoveredIndex].description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/20 flex justify-between text-white font-mono text-sm">
                      <span>Role: {projects[hoveredIndex].role}</span>
                      <span>{projects[hoveredIndex].outcome}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout (Standard Stacked) */}
        <div className="flex flex-col lg:hidden gap-12">
          {projects.slice(0, 5).map((project) => (
            <Link key={project.id} href={`/work/${project.id}`} className="group flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/5">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div>
                <div className="flex gap-4 text-xs text-muted font-mono mb-3">
                  <span>{project.year}</span>
                  <span>{project.category}</span>
                </div>
                <h3 className="font-serif text-3xl mb-2">{project.title}</h3>
                <p className="text-muted">{project.description}</p>
              </div>
            </Link>
          ))}
          
          <Link 
            href="/work"
            className="group flex items-center justify-between border-b border-black/10 pb-6 hover:border-black/30 transition-colors"
          >
            <span className="font-mono text-sm uppercase tracking-widest text-muted group-hover:text-foreground transition-colors">
              Explore All Archives
            </span>
            <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-foreground transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
