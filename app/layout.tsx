import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Loader from "@/components/layout/Loader";
import { SITE } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "S.K. Termite Solutions | Anti-Termite Treatment & Porous Pipe Installation | Dimak Ka Ilaj",
    template: "%s | S.K. Termite Solutions",
  },
  description:
    "Best anti-termite treatment company in India (dimak ka ilaj). Pre & post construction termite treatment, porous pipe installation, chemical injection, dimak ki dawa — for homes, builders, farm houses & commercial buildings. Call +91 89305 00699.",
  keywords: [
    "anti termite treatment",
    "termite treatment",
    "termite control",
    "termite control near me",
    "dimak ka ilaj",
    "dimak ki dawa",
    "dimak control",
    "dimak solution",
    "dimak ka treatment",
    "dimak marne ki dawa",
    "dimak se kaise bachein",
    "termite treatment cost",
    "porous pipe installation",
    "porous pipe anti termite",
    "pre construction termite treatment",
    "post construction termite treatment",
    "chemical injection treatment",
    "commercial anti termite treatment",
    "termite pest control",
    "termite pest control India",
    "termite inspection",
    "termite treatment near me",
    "best termite treatment India",
    "anti termite chemical treatment",
    "termite treatment for home",
    "termite treatment for building",
    "white ant treatment",
    "white ant control",
    "dimak solution in rewari",
    "termite solution in rewari",
    "dimak treatment in rewari",
    "dimak solution in bhiwani",
    "termite solution in bhiwani",
    "dimak treatment in bhiwani",
    "dimak solution in rohtak",
    "termite solution in rohtak",
    "dimak treatment in rohtak",
    "dimak solution in hisar",
    "termite solution in hisar",
    "dimak treatment in hisar",
    "dimak solution in haryana",
    "termite solution in haryana",
    "pest control in rewari",
    "pest control in bhiwani",
    "pest control in rohtak",
    "pest control in hisar",
  ],
  authors: [{ name: "S.K. Termite Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.domain,
    siteName: "S.K. Termite Solutions",
    title: "S.K. Termite Solutions | Best Anti-Termite Treatment India | Dimak Ka Ilaj",
    description:
      "Protect your property from termites (dimak). Professional porous pipe installation & anti-termite treatment with warranty. 10+ years experience. 1000+ happy customers. Call now.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.K. Termite Solutions | Best Anti-Termite Treatment India | Dimak Ka Ilaj",
    description:
      "Dimak ka ilaj — Professional porous pipe installation & anti-termite solutions. 10+ years, 1000+ happy customers. All over India.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "PestControlService",
      name: SITE.name,
      alternateName: ["S.K. Termite Solutions", "Dimak Ka Ilaj", "Termite Treatment India"],
      image: `${SITE.domain}/og-image.jpg`,
      "@id": SITE.domain,
      url: SITE.domain,
      telephone: SITE.phone,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Saraswati Vihar",
        addressLocality: "Rewari",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.197,
        longitude: 76.619,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      priceRange: "₹₹",
      areaServed: [
        { "@type": "City", name: "Rewari" },
        { "@type": "City", name: "Bhiwani" },
        { "@type": "City", name: "Rohtak" },
        { "@type": "City", name: "Hisar" },
        { "@type": "City", name: "Gurugram" },
        { "@type": "State", name: "Haryana" },
        { "@type": "Country", name: "India" }
      ],
      description:
        "Best anti-termite treatment company (dimak solution) in Rewari, Bhiwani, Rohtak, Hisar & all India. Pre & post construction termite treatment, porous pipe installation, chemical injection, and annual maintenance. 10+ years experience, 1000+ happy customers.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Anti-Termite Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Construction Anti-Termite Treatment" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Porous Pipe Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-Construction Treatment" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Anti-Termite Chemical Treatment (Dimak Ki Dawa)" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chemical Injection Treatment" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Maintenance Contract (AMC)" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Anti-Termite Treatment" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Anti-Termite Treatment" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Termite Service" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1000",
        bestRating: "5",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.domain,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE.domain}/faq?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Dimak ka ilaj kaise hota hai? (How is termite treatment done?)",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anti-termite treatment involves applying certified termiticides to the soil around the building foundation. For new constructions, porous pipes are installed for future re-treatment. For existing buildings, chemical injection through drilled holes is used.",
          },
        },
        {
          "@type": "Question",
          name: "Dimak ki dawa ka rate kya hai? (What is the cost of termite treatment?)",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on plot/built-up area, treatment type, and building stage. We provide a free on-site inspection and a transparent, itemised quotation before any commitment — no hidden charges.",
          },
        },
        {
          "@type": "Question",
          name: "How long does anti-termite treatment last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A standard anti-termite treatment lasts 5-10 years depending on soil conditions and treatment type. With an Annual Maintenance Contract (AMC) and porous pipe system, protection can be renewed indefinitely.",
          },
        },
        {
          "@type": "Question",
          name: "Is termite treatment safe for family and pets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We use certified, low-odour termiticides applied strictly per label dosage. Treated areas are safe to occupy within a few hours once the chemical has cured.",
          },
        },
      ],
    },
  ];

  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="antialiased bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Loader />
        <ScrollProgress />
        <Navbar />
        <main className="pt-[76px]">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
