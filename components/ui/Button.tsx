"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode, MouseEvent, useState } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  icon?: ReactNode;
  /** Set automatically for http(s) links, or pass explicitly — opens in a
   * new tab with rel="noopener noreferrer" instead of a Next.js client
   * transition. */
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  icon,
  external,
}: ButtonProps) {
  const isExternal = external ?? (href?.startsWith("http") || href?.startsWith("https://wa.me"));
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const createRipple = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
  };

  const base =
    "relative overflow-hidden inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-full will-change-transform active:scale-[0.97]";

  const variants: Record<string, string> = {
    primary:
      "bg-forest text-cream hover:bg-forest-light shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5",
    secondary:
      "bg-gold text-ink hover:bg-gold-light shadow-premium hover:-translate-y-0.5",
    outline:
      "border-2 border-forest text-forest hover:bg-forest hover:text-cream",
    whatsapp:
      "bg-[#25D366] text-white hover:brightness-105 shadow-premium hover:-translate-y-0.5",
  };

  const sizes: Record<string, string> = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {icon}
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/30 animate-ping"
          style={{
            left: r.x - 10,
            top: r.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  );

  if (href && isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={(e) => {
          createRipple(e);
          onClick?.();
        }}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={(e) => {
          createRipple(e);
          onClick?.();
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={(e) => {
        createRipple(e);
        onClick?.();
      }}
    >
      {content}
    </button>
  );
}
