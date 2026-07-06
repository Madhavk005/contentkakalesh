"use client";

import { motion } from "framer-motion";

const frames = [
  {
    id: "yeh-dil",
    category: "Yeh Dil",
    video: "/yeh-dil.mp4?v=6",
  },
  {
    id: "home-away",
    category: "Home Away",
    video: "/home-away.mp4?v=6",
  },
  {
    id: "aakhiri-chai",
    category: "Aakhiri Chai",
    video: "/aakhiri-chai.mp4?v=6",
  },
  {
    id: "this-is-jecrc",
    category: "This is JECRC",
    video: "/this-is-jecrc-ep-0.mp4?v=6",
  },
  {
    id: "race-day",
    category: "Race Day",
    video: "/race-day-at-rhythm-2026.mp4?v=6",
  },
  {
    id: "trailer-khatam",
    category: "Trailer Khatam",
    video: "/trailer-khatam.-picture-shuru..mp4?v=6",
  },
];

// Duplicate the frames array to create a seamless infinite loop
const scrollingFrames = [...frames, ...frames];

export const VisualStorytelling = () => {
  return (
    <section className="py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-20">
        <h2 className="text-sm font-medium tracking-wider uppercase text-white/40 mb-4 font-mono">
          Section 05
        </h2>
        <p className="font-serif text-5xl md:text-6xl tracking-tight">
          Visual Storytelling.
        </p>
        <p className="text-xl text-white/60 mt-6 max-w-2xl font-light">
          A study in light, pacing, and composition. Cinematic frames captured and edited across various disciplines.
        </p>
      </div>

      {/* Endless Scrolling Container */}
      <div className="relative w-full flex">
        {/* Left/Right Gradients for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 md:gap-6 w-max pr-4 md:pr-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {scrollingFrames.map((frame, index) => (
            <div
              key={`${frame.id}-${index}`}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 w-[280px] h-[400px] md:w-[350px] md:h-[500px] shrink-0"
            >
              <video
                src={frame.video}
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-white/80" />
                <span className="font-mono text-sm uppercase tracking-widest text-white/90">
                  {frame.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
