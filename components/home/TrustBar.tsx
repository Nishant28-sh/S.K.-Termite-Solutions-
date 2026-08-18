import { trustPoints } from "@/lib/data";

export default function TrustBar() {
  const doubled = [...trustPoints, ...trustPoints];

  return (
    <section className="bg-forest py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {doubled.map((t, i) => {
          const Icon = t.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 mx-8 text-cream/90"
            >
              <Icon size={18} className="text-gold shrink-0" />
              <span className="text-sm font-medium tracking-wide">
                {t.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
