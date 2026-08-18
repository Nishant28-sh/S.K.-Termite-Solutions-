"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const color = variant === "dark" ? "bg-gold/10" : "bg-forest/10";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -left-16 top-10 h-64 w-64 rounded-full ${color} blur-3xl`}
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute right-0 bottom-0 h-80 w-80 rounded-full ${color} blur-3xl`}
      />
    </div>
  );
}
