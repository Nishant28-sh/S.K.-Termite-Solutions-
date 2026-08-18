"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("hd-loaded");
    if (alreadySeen) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("hd-loaded", "1");
    }, 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="loader-veil"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink">
              <ShieldCheck size={30} />
            </span>
            <span className="font-display text-cream text-lg tracking-wide">
              SK Termite Solutions
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
