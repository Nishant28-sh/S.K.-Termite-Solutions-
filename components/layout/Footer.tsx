import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/utils";
import { services } from "@/lib/data";

// Only real, live social profiles belong here. Add an entry (with a real
// URL and the matching lucide-react icon) once a profile actually exists —
// a dead "#" link erodes trust faster than having no icon row at all.
const socialLinks: { label: string; href: string; Icon: typeof ShieldCheck }[] = [];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-premium py-12 lg:py-16">
        {/* Brand row on mobile, inline on desktop */}
        <div className="text-center lg:text-left mb-10 lg:mb-0 lg:hidden">
          <Link href="/" className="inline-flex items-center gap-2 mb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink">
              <ShieldCheck size={18} />
            </span>
            <span className="font-display text-lg text-cream">
              S.K. Termite Solutions
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-cream/60 max-w-xs mx-auto">
            Pre & post-construction anti-termite protection for homes, builders
            and commercial developments across the region.
          </p>
          {socialLinks.length > 0 && (
            <div className="flex gap-3 mt-5 justify-center">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 hover:bg-gold hover:text-ink hover:border-gold transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Grid: 3 columns on mobile, 4 on desktop (brand only visible on lg) */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand — desktop only */}
          <div className="hidden lg:block">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink">
                <ShieldCheck size={18} />
              </span>
              <span className="font-display text-lg text-cream">
                S.K. Termite Solutions
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              Pre & post-construction anti-termite protection for homes, builders
              and commercial developments across the region.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-3 mt-6">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 hover:bg-gold hover:text-ink hover:border-gold transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-cream text-base lg:text-lg mb-3 lg:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs lg:text-sm">
              {["About", "Projects", "Testimonials", "FAQ", "Contact"].map(
                (l) => (
                  <li key={l}>
                    <Link
                      href={`/${l.toLowerCase()}`}
                      className="hover:text-gold transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-cream text-base lg:text-lg mb-3 lg:mb-4">Services</h4>
            <ul className="space-y-2 text-xs lg:text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="hover:text-gold transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-cream text-base lg:text-lg mb-3 lg:mb-4">Contact</h4>
            <ul className="space-y-3 text-xs lg:text-sm">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 text-gold shrink-0" />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 text-gold shrink-0" />
                <a href={`mailto:${SITE.email}`} className="break-all">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-gold shrink-0" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-premium py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50 text-center">
          <p>© {year} S.K. Termite Solutions. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
