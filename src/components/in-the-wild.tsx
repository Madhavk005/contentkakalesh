"use client";

import { motion } from "framer-motion";

const campaigns = [
  {
    id: "01",
    name: <>#YehDilDeewana<wbr/>OnlyForJECRC</>,
    platform: "Instagram",
    role: "Direction & Production",
    metrics: [
      { label: "Views", value: "1.6M+" },
      { label: "Likes", value: "12.2K+" },
      { label: "Shares", value: "400+" },
    ]
  },
  {
    id: "02",
    name: "Home Away From Home",
    platform: "Instagram",
    role: "Content Strategy & Production",
    metrics: [
      { label: "Views", value: "742K+" },
      { label: "Likes", value: "37.2K+" },
      { label: "Shares", value: "200+" },
    ]
  },
  {
    id: "03",
    name: "Mic Drop @ Alia Bhatt",
    platform: "Instagram",
    role: "Creative Production",
    metrics: [
      { label: "Views", value: "17M+" },
      { label: "Likes", value: "350K+" },
      { label: "Shares", value: "37K+" },
    ]
  },
  {
    id: "04",
    name: "Rhythm Poster Reveal",
    platform: "Instagram",
    role: "Creative Production",
    metrics: [
      { label: "Views", value: "1.6M+" },
      { label: "Shares", value: "1K+" },
    ]
  },
];

export const InTheWild = () => {
  return (
    <section className="py-32 bg-[#F5F5F0] text-foreground">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <h2 className="text-sm font-medium tracking-wider uppercase text-muted mb-4 font-mono">
            Section 03
          </h2>
          <p className="font-serif text-5xl md:text-6xl tracking-tight">
            Content In The Wild.
          </p>
          <p className="text-xl text-muted mt-6 max-w-2xl font-light">
            Where stories meet audiences. A look at how the narratives perform across digital ecosystems when optimized for platform psychology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns.map((campaign, i) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-black/5 hover:border-black/10 transition-colors shadow-sm"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs text-muted">{campaign.id}</span>
                <span className="font-mono text-xs font-medium px-2 py-1 bg-black/5 rounded-md">
                  {campaign.platform}
                </span>
              </div>
              
              <h3 className="font-serif text-xl md:text-2xl mb-8 leading-tight break-words">{campaign.name}</h3>
              
              <div className="space-y-4 font-mono text-sm">
                {campaign.metrics.map((metric, idx) => (
                  <div key={idx} className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-muted">{metric.label}</span>
                    <span className="font-medium">{metric.value}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-2">
                  <span className="text-muted">Role</span>
                  <span className="font-medium text-right">{campaign.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
