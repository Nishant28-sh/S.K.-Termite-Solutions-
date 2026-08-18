import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProjectsGrid from "@/components/home/ProjectsGrid";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "500+ Termite Treatment Projects | Homes, Builders & Commercial",
  description:
    "See 500+ completed anti-termite treatment projects — homes, builder townships, farm houses, apartments & commercial buildings. Dimak control work portfolio all over India.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="500+ Properties Protected and Counting"
        description="A look at the range of sites we've treated — from individual villas to full builder townships and commercial campuses."
      />
      <section className="section-pad bg-cream">
        <div className="container-premium">
          <ProjectsGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
