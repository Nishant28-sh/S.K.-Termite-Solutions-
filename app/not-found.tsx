import { ShieldAlert } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-cream section-pad">
      <div className="container-premium text-center max-w-lg mx-auto">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-forest/10 text-forest mb-6">
          <ShieldAlert size={36} />
        </span>
        <h1 className="font-display text-4xl sm:text-5xl text-ink">
          404 — This Page Wasn&apos;t Protected
        </h1>
        <p className="mt-4 text-ink/60 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back to solid ground.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
