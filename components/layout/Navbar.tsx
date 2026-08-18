"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-1 sm:py-2" : "py-2 sm:py-4"
      }`}
    >
      <div
        className={`container-premium flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled ? "glass shadow-premium px-3 sm:px-4 py-2" : "px-3 sm:px-4 py-3"
        }`}
      >
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-forest text-cream">
            <ShieldCheck size={16} className="sm:hidden" />
            <ShieldCheck size={18} className="hidden sm:block" />
          </span>
          <span className="font-display text-sm sm:text-lg leading-tight text-ink">
            SK <span className="text-forest">Termite Solutions</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-forest ${
                pathname === l.href ? "text-forest" : "text-ink/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-forest"
          >
            <Phone size={16} /> {SITE.phoneDisplay}
          </a>
          <Button href="/contact" size="md">
            Get Free Inspection
          </Button>
        </div>

        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-ink/30 backdrop-blur-sm -z-10"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden mt-2 mx-3 sm:mx-4 rounded-3xl glass shadow-premium-lg overflow-hidden max-h-[80vh] overflow-y-auto"
            >
              <div className="flex flex-col p-4">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={l.href}
                      className={`block py-3.5 px-4 rounded-xl font-medium transition-colors ${
                        pathname === l.href
                          ? "bg-forest/10 text-forest"
                          : "text-ink hover:bg-forest/10 hover:text-forest"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                {/* Phone number in mobile menu */}
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 mt-2 text-sm font-semibold text-forest"
                >
                  <Phone size={16} /> {SITE.phoneDisplay}
                </a>
                <div className="flex gap-3 mt-2">
                  <Button href="/contact" className="w-full" size="md">
                    Get Free Inspection
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
