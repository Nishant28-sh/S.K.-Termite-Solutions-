"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { videos } from "@/lib/media";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container-premium">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="eyebrow">See Us In Action</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 text-ink text-balance">
            Porous Pipe Installation, Up Close
          </h2>
          <p className="mt-4 text-ink/60 leading-relaxed">
            Real footage from a foundation trench — the perforated pipe laid,
            joined and flushed before the plinth is sealed.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto aspect-video rounded-4xl sm:rounded-5xl overflow-hidden shadow-premium-lg bg-ink group"
        >
          <video
            ref={videoRef}
            muted={muted}
            loop
            playsInline
            poster={videos.processActionPoster}
            className="absolute inset-0 h-full w-full object-cover"
            onClick={toggle}
          >
            <source src={videos.processAction} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />

          <button
            onClick={toggle}
            aria-label={playing ? "Pause video" : "Play video"}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.span
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gold text-ink shadow-premium-lg transition-opacity ${
                playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              {playing ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
            </motion.span>
          </button>

          <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex h-10 w-10 items-center justify-center rounded-full glass-dark text-cream hover:bg-gold hover:text-ink transition-colors"
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          <span className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full bg-forest text-cream">
            Real Site Footage
          </span>
        </motion.div>
      </div>
    </section>
  );
}
