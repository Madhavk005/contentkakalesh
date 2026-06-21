"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Volume2, VolumeX } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  role: string;
  year: string;
  category: string;
  outcome: string;
  video?: string;
  image: string;
};

export const CinematicPlayer = ({ project }: { project: Project }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <Link href="/#work" className="inline-flex items-center gap-2 font-medium hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> Back to Archive
        </Link>
        <div className="font-mono text-sm uppercase tracking-widest opacity-60">
          {project.id}
        </div>
      </nav>

      {/* Stylized Mute Toggle */}
      {project.video && (
        <button
          onClick={toggleMute}
          className="absolute top-6 right-6 md:top-1/2 md:-translate-y-1/2 md:right-12 z-50 w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          aria-label="Toggle sound"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      )}

      {/* Cinematic Video Player */}
      <div className="absolute inset-0 z-0">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="object-cover w-full h-full"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 pointer-events-none" />
      </div>

      {/* Information Overlay */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-12 lg:p-16 flex flex-col justify-end pointer-events-none">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-12">
          
          {/* Main Title & Description */}
          <div className="md:w-1/2">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tighter mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-xl font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Meta Information Grid */}
          <div className="md:w-1/3 grid grid-cols-2 gap-x-8 gap-y-8 font-mono text-sm uppercase tracking-widest text-white/60">
            <div>
              <p className="mb-2 text-white/30 border-b border-white/20 pb-2">Role</p>
              <p className="text-white">{project.role}</p>
            </div>
            <div>
              <p className="mb-2 text-white/30 border-b border-white/20 pb-2">Year</p>
              <p className="text-white">{project.year}</p>
            </div>
            <div>
              <p className="mb-2 text-white/30 border-b border-white/20 pb-2">Category</p>
              <p className="text-white">{project.category}</p>
            </div>
            <div>
              <p className="mb-2 text-white/30 border-b border-white/20 pb-2">Outcome</p>
              <p className="text-white">{project.outcome}</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};
