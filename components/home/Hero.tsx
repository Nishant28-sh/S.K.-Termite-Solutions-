"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import { SITE } from "@/lib/utils";
import { stats } from "@/lib/data";
import { videos } from "@/lib/media";
import { useRef, useState } from "react";

function WhatsAppIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.86.505 3.678 1.464 5.26L2 22l4.865-1.44A9.955 9.955 0 0012 22c5.523 0 10-4.478 10-10S17.523 2 12.001 2z" />
    </svg>
  );
}

const headline = "Protect Your Property Before Termites Destroy It.";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={videos.heroPoster}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src={videos.heroBg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/70 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
        {/* Cursor-follow spotlight — desktop only */}
        <div
          aria-hidden
          className="hidden lg:block absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(197,143,44,0.14), transparent 60%)`,
          }}
        />
      </div>

      {/* Ambient floating shield */}
      <motion.div
        aria-hidden
        className="absolute right-[8%] top-24 hidden lg:flex h-24 w-24 items-center justify-center rounded-full bg-gold/15 border border-gold/30 animate-floatSlow"
      >
        <ShieldCheck className="text-gold" size={36} />
      </motion.div>

      <div className="container-premium relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-40 lg:pb-28 min-h-[80vh] sm:min-h-[92vh] flex flex-col justify-center text-center lg:text-left">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-gold mb-4 sm:mb-5 text-[10px] sm:text-xs"
        >
          10+ Years &middot; Warranty Backed
        </motion.span>

        <h1 className="font-display text-cream text-balance text-3xl sm:text-5xl lg:text-7xl leading-[1.1] max-w-4xl mx-auto lg:mx-0">
          {headline.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.28em] align-top">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-4 sm:mt-6 max-w-xl text-cream/70 text-sm sm:text-lg leading-relaxed mx-auto lg:mx-0"
        >
          Professional porous pipe installation &amp; anti-termite solutions
          with long-lasting protection — for homes, builders, farm houses and
          commercial projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center lg:items-start"
        >
          <Button
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            size="lg"
            icon={<Phone size={18} />}
            className="w-full sm:w-auto"
          >
            Call Now
          </Button>
          <Button
            href={`https://wa.me/${SITE.whatsapp}`}
            variant="whatsapp"
            size="lg"
            icon={<WhatsAppIcon />}
            className="w-full sm:w-auto"
          >
            WhatsApp Us
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto !text-cream !border-cream/40 hover:!bg-cream hover:!text-ink">
            Get Free Inspection
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl sm:text-4xl text-gold">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[10px] sm:text-sm text-cream/60 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="root-divider" />
    </section>
  );
}
