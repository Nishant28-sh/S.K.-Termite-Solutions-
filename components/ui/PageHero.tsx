export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-ink relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -right-20 -top-20 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-gold/10"
      />
      <div className="container-premium relative z-10 py-14 sm:py-20 lg:py-28 text-center max-w-3xl mx-auto px-5 sm:px-6">
        <span className="eyebrow text-gold text-[10px] sm:text-xs">{eyebrow}</span>
        <h1 className="font-display text-2xl sm:text-4xl lg:text-6xl mt-3 sm:mt-4 text-cream text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-cream/70 leading-relaxed">{description}</p>
        )}
      </div>
      <div className="root-divider" />
    </section>
  );
}
