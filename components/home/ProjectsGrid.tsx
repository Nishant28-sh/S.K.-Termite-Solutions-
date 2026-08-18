"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects, ProjectCategory } from "@/lib/data";

const categories: (ProjectCategory | "All")[] = [
  "All",
  "Homes",
  "Builders",
  "Commercial",
  "Apartments",
  "Farm Houses",
];

export default function ProjectsGrid() {
  const [active, setActive] = useState<(ProjectCategory | "All")>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors border ${
              active === c
                ? "bg-forest text-cream border-forest"
                : "bg-white text-ink/70 border-ink/10 hover:border-forest/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
        {filtered.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
            className={`group relative rounded-4xl overflow-hidden shadow-premium break-inside-avoid ${
              i % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/5 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-gold mb-2">
                {p.category}
              </span>
              <h3 className="font-display text-cream text-lg leading-snug">
                {p.title}
              </h3>
              <p className="text-cream/60 text-xs mt-1">{p.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
