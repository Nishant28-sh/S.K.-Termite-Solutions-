"use client";

import { motion } from "framer-motion";
import { warningSigns } from "@/lib/data";
import { SITE } from "@/lib/utils";
import Button from "@/components/ui/Button";

function WhatsAppIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.86.505 3.678 1.464 5.26L2 22l4.865-1.44A9.955 9.955 0 0012 22c5.523 0 10-4.478 10-10S17.523 2 12.001 2z" />
    </svg>
  );
}

export default function WarningSigns() {
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi, I've noticed something that might be termite activity. I'm sending a photo — can you take a look?"
  )}`;

  return (
    <section className="section-pad bg-white">
      <div className="container-premium">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="eyebrow text-[10px] sm:text-xs">Spot the Signs</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mt-2 sm:mt-3 text-ink text-balance">
            Not Sure If You Have Termites?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink/60 leading-relaxed">
            Termite damage is often invisible until it's significant. These
            are the signs worth checking for around your property.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {warningSigns.map((sign, i) => {
            const Icon = sign.icon;
            return (
              <motion.div
                key={sign.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl sm:rounded-3xl bg-cream/60 border border-ink/5 p-5 sm:p-6 h-full"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-base mt-4 text-ink leading-snug">
                  {sign.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink/60 mt-2 leading-relaxed">
                  {sign.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 rounded-2xl sm:rounded-3xl bg-forest px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-cream">
              Seeing one of these?
            </h3>
            <p className="text-sm text-cream/70 mt-1.5 max-w-md">
              Send us a photo on WhatsApp and our team can tell you what
              you're looking at and what to do next.
            </p>
          </div>
          <Button
            href={waHref}
            variant="whatsapp"
            size="lg"
            icon={<WhatsAppIcon />}
          >
            Send Us a Photo on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
