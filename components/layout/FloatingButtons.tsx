"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { SITE } from "@/lib/utils";

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.86.505 3.678 1.464 5.26L2 22l4.865-1.44A9.955 9.955 0 0012 22c5.523 0 10-4.478 10-10S17.523 2 12.001 2zm0 18.116a8.09 8.09 0 01-4.13-1.13l-.296-.176-3.023.894.9-2.99-.19-.307a8.096 8.096 0 01-1.24-4.407c0-4.482 3.65-8.13 8.13-8.13 2.17 0 4.21.847 5.744 2.383a8.07 8.07 0 012.383 5.747c.003 4.482-3.647 8.116-8.278 8.116z" />
    </svg>
  );
}

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end gap-2 sm:gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-ink text-cream shadow-premium hover:-translate-y-1 transition-transform"
        >
          <ArrowUp size={16} className="sm:hidden" />
          <ArrowUp size={18} className="hidden sm:block" />
        </button>
      )}
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20a%20free%20termite%20inspection`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium-lg hover:scale-105 transition-transform animate-floatSlow"
      >
        <WhatsAppIcon size={20} />
      </a>
      <a
        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
        aria-label="Call now"
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-forest text-cream shadow-premium-lg hover:scale-105 transition-transform"
      >
        <Phone size={20} className="sm:hidden" />
        <Phone size={22} className="hidden sm:block" />
      </a>
    </div>
  );
}
