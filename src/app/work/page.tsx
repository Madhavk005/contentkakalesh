"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ArchivePage() {
  return (
    <main className="bg-background min-h-screen text-foreground pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <nav className="mb-20">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Link>
        </nav>

        <header className="mb-24 border-b border-black/10 pb-12">
          <h1 className="font-serif text-6xl md:text-8xl tracking-tight mb-6">Archive.</h1>
          <p className="text-xl text-muted max-w-2xl font-light">
            A comprehensive index of commercial work, documentary shorts, and social narratives. 
            All {projects.length} projects documented.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link href={`/work/${project.id}`} className="group flex flex-col gap-6">
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
                  <div className="flex gap-4 text-xs text-muted font-mono mb-3 uppercase tracking-wider">
                    <span>{project.year}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className="font-serif text-3xl mb-2 group-hover:text-muted transition-colors">{project.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
