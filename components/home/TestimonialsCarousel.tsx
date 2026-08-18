"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setSelected(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="pl-6 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="h-full rounded-4xl bg-white p-7 shadow-premium hover:shadow-premium-lg border border-ink/5 hover:border-gold/30 flex flex-col transition-shadow duration-300"
              >
                <Quote className="text-gold/40" size={28} />
                <div className="flex gap-0.5 mt-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={15}
                      className={
                        s < t.rating
                          ? "fill-gold text-gold"
                          : "fill-ink/10 text-ink/10"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-ink/70 leading-relaxed mt-4 grow">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-ink/5">
                  <p className="font-semibold text-ink text-sm">{t.name}</p>
                  <p className="text-xs text-ink/50 mt-0.5">{t.location}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                selected === i ? "w-7 bg-forest" : "w-2 bg-forest/20"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 text-forest hover:bg-forest hover:text-cream transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 text-forest hover:bg-forest hover:text-cream transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
