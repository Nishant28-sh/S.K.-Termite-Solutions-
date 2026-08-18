"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { images } from "@/lib/media";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  return (
    <section className="section-pad bg-ink relative overflow-hidden">
      <FloatingOrbs variant="dark" />
      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <span className="eyebrow text-gold text-[10px] sm:text-xs">Real Results</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mt-2 sm:mt-3 text-cream text-balance">
            Before Treatment. After Treatment.
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-cream/60 leading-relaxed">
            Drag the slider to see a foundation trench before porous pipe
            installation, and the same site fully treated and sealed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto aspect-[4/3] sm:aspect-[16/9] rounded-3xl sm:rounded-4xl overflow-hidden shadow-premium-lg select-none cursor-ew-resize ring-1 ring-cream/10"
          onMouseDown={() => (dragging.current = true)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
          onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
        >
          <Image
            src={images.beforeTreatment}
            alt="Termite damage on wooden door frame showing mud tubes, crumbling wood and frass"
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <Image
              src={images.afterTreatment}
              alt="Professional porous pipe installation along building foundation for anti-termite treatment"
              fill
              className="object-cover"
            />
          </div>

          <div
            className="absolute top-0 bottom-0 w-1 bg-gold"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-gold text-ink flex items-center justify-center shadow-premium animate-floatSlow">
              <MoveHorizontal size={16} className="sm:hidden" />
              <MoveHorizontal size={18} className="hidden sm:block" />
            </div>
          </div>

          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-ink/70 text-cream">
            Before
          </span>
          <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gold text-ink">
            After
          </span>
        </motion.div>
      </div>
    </section>
  );
}

