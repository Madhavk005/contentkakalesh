"use client";

const frames = [
  {
    id: "yeh-dil",
    category: "Yeh Dil",
    video: "/yeh-dil.mp4?v=6",
    className: "md:col-span-2 md:row-span-2 aspect-video md:aspect-auto",
  },
  {
    id: "home-away",
    category: "Home Away",
    video: "/home-away.mp4?v=6",
    className: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
  },
  {
    id: "aakhiri-chai",
    category: "Aakhiri Chai",
    video: "/aakhiri-chai.mp4?v=6",
    className: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
  },
  {
    id: "this-is-jecrc",
    category: "This is JECRC",
    video: "/this-is-jecrc-ep-0.mp4?v=6",
    className: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
  },
  {
    id: "race-day",
    category: "Race Day",
    video: "/race-day-at-rhythm-2026.mp4?v=6",
    className: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
  },
  {
    id: "trailer-khatam",
    category: "Trailer Khatam",
    video: "/trailer-khatam.-picture-shuru..mp4?v=6",
    className: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
  },
];

export const VisualStorytelling = () => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[320px]">
          {frames.map((frame) => (
            <div
              key={frame.id}
              className={`group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 ${frame.className}`}
            >
              <video
                src={frame.video}
                autoPlay
                loop
                muted
                playsInline
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
        </div>
      </div>
    </section>
  );
};
