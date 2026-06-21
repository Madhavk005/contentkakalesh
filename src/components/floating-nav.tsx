"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Work", link: "/#work" },
  { name: "Experience", link: "/#experience" },
  { name: "About", link: "/#about" },
  { name: "Resume", link: "/resume" },
];

export const FloatingNav = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="fixed top-8 inset-x-0 mx-auto max-w-fit z-[100]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex items-center gap-1 sm:gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-black/5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            onClick={() => setActive(item.name)}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-foreground",
              active === item.name ? "text-foreground" : "text-muted"
            )}
          >
            {active === item.name && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 bg-black/5 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};
