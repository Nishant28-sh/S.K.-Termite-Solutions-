import {
  ShieldCheck,
  Droplets,
  FlaskConical,
  Building2,
  Home as HomeIcon,
  Wrench,
  Siren,
  Factory,
  Award,
  Users,
  Clock,
  Sparkles,
  ThermometerSun,
  BadgeCheck,
  Timer,
  Route,
  Volume2,
  Feather,
  AlertTriangle,
  CircleDot,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "pre-construction-anti-termite",
    title: "Pre-Construction Anti-Termite Treatment",
    icon: ShieldCheck,
    short: "Soil treatment before the foundation goes in, so termites never get a way in.",
    description:
      "We treat the soil, plinth, and foundation trenches before your slab is poured, creating a continuous chemical barrier around the structure. This is the single most effective stage to stop subterranean termites for the life of the building.",
    benefits: [
      "Chemical barrier applied to foundation trenches, backfill & plinth",
      "IS 6313 (Part 2) compliant process",
      "Zero disruption — done before flooring stage",
      "Longest-lasting protection of any treatment stage",
    ],
  },
  {
    slug: "porous-pipe-installation",
    title: "Porous Pipe Installation",
    icon: Droplets,
    short: "A reusable chemical delivery network built into your foundation for future top-ups.",
    description:
      "We lay a network of perforated PVC pipes along the building's periphery during construction. Years later, this lets us re-inject anti-termite chemical directly into the soil without breaking a single tile or slab.",
    benefits: [
      "Enables future re-treatment without floor damage",
      "Pipes laid to IS-standard spacing & depth",
      "Ideal for villas, apartments & commercial builds",
      "Protects your investment for decades, not years",
    ],
  },
  {
    slug: "anti-termite-chemical-treatment",
    title: "Anti-Termite Chemical Treatment",
    icon: FlaskConical,
    short: "Industry-standard termiticides applied by a certified, trained team.",
    description:
      "Using approved non-repellent termiticides, we create an undetectable treated zone that termite colonies carry back to their nest — eliminating the colony, not just the visible trail.",
    benefits: [
      "Certified, low-odour chemical formulations",
      "Safe for family, pets & indoor air quality once cured",
      "Targets the entire colony, not just visible termites",
      "Backed by a written service warranty",
    ],
  },
  {
    slug: "post-construction-treatment",
    title: "Post-Construction Treatment",
    icon: Wrench,
    short: "For buildings that were never treated — or need renewed protection.",
    description:
      "Already built and noticing termite activity, or simply never got a pre-construction treatment? We drill and inject termiticide along the foundation line, skirting, and vulnerable entry points with minimal disturbance.",
    benefits: [
      "Low-mess drilling with immediate hole sealing",
      "Targets skirting, door frames, expansion joints",
      "Works on homes, offices & existing commercial units",
      "Same-week scheduling available",
    ],
  },
  {
    slug: "annual-maintenance",
    title: "Annual Maintenance Contract",
    icon: Clock,
    short: "Scheduled inspections and top-ups so protection never quietly lapses.",
    description:
      "Termiticide efficacy fades with time and soil conditions. Our AMC keeps your warranty valid with scheduled inspections, early-warning checks, and top-up treatments through the porous pipe network where installed.",
    benefits: [
      "Annual physical inspection with a written report",
      "Priority scheduling over non-contract customers",
      "Keeps manufacturer & service warranty active",
      "Flexible plans for homes & commercial portfolios",
    ],
  },
  {
    slug: "chemical-injection",
    title: "Chemical Injection Treatment",
    icon: Siren,
    short: "Targeted injection into active mud tubes, voids & infested timber.",
    description:
      "For active, visible infestations, we drill directly into mud tubes, hollow masonry, and infested wood, injecting termiticide at the source for the fastest possible knockdown of an active colony.",
    benefits: [
      "Direct action on active infestation points",
      "Minimally invasive — small drill points only",
      "Rapid response for urgent cases",
      "Follow-up inspection included",
    ],
  },
  {
    slug: "commercial-anti-termite",
    title: "Commercial Anti-Termite Treatment",
    icon: Factory,
    short: "Large-footprint treatment programs for warehouses, offices & institutions.",
    description:
      "Commercial buildings carry commercial risk — stock, documents, and structure. We plan treatment around your operating hours, with phased execution across large floor plates and minimal business disruption.",
    benefits: [
      "Scheduled around business hours & shifts",
      "Documentation & compliance reports provided",
      "Suited to warehouses, schools, hospitals & offices",
      "Volume-based AMC pricing available",
    ],
  },
  {
    slug: "residential-anti-termite",
    title: "Residential Anti-Termite Treatment",
    icon: HomeIcon,
    short: "Whole-home protection for villas, independent houses & apartments.",
    description:
      "From a single independent villa to a full apartment complex, we tailor the treatment plan to your building's age, soil type, and construction method — with a clear, honest quote before any work begins.",
    benefits: [
      "Free on-site inspection before quoting",
      "Family- and pet-considerate chemical handling",
      "Works with builders, RWAs & individual owners",
      "Transparent, itemised written quotation",
    ],
  },
  {
    slug: "emergency-service",
    title: "Emergency Termite Service",
    icon: BadgeCheck,
    short: "Fast response when you've spotted active termite activity right now.",
    description:
      "Seen mud tubes on a wall, or wings scattered near a window? Call our emergency line — we prioritise same-day or next-day inspection to assess and contain active infestations before they spread further.",
    benefits: [
      "Priority same/next-day inspection slots",
      "On-the-spot assessment & containment advice",
      "Direct WhatsApp line for fastest response",
      "No obligation inspection & quote",
    ],
  },
];

export const trustPoints = [
  { icon: BadgeCheck, label: "Certified Safe Chemicals" },
  { icon: Users, label: "Experienced, Trained Team" },
  { icon: ShieldCheck, label: "Warranty Available" },
  { icon: Timer, label: "Quick Installation" },
  { icon: Award, label: "Affordable, Transparent Pricing" },
  { icon: Wrench, label: "Professional-Grade Equipment" },
  { icon: Sparkles, label: "Premium Service Standards" },
  { icon: ThermometerSun, label: "All-Season Scheduling" },
];

export const stats = [
  { value: 10, suffix: "+", label: "Years of Field Experience" },
  { value: 500, suffix: "+", label: "Projects Protected" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 24, suffix: "hr", label: "Emergency Response Window" },
];

export const ourValues = [
  {
    year: "Experience",
    title: "10+ Years in the Soil, Not Just the Showroom",
    description:
      "A decade of on-ground treatment experience across homes, builders' sites and commercial developments — we've seen what fails and built our process around what doesn't.",
  },
  {
    year: "Scale",
    title: "500+ Projects, Every Building Type",
    description:
      "Villas, apartments, farm houses, warehouses, schools and hospitals — our teams are trained across residential and commercial protocols alike.",
  },
  {
    year: "Trust",
    title: "1000+ Customers Who Called Us Back",
    description:
      "Most of our commercial AMC clients started as a single one-time treatment. Retention, not just acquisition, is how we measure ourselves.",
  },
  {
    year: "Equipment",
    title: "Calibrated, Professional-Grade Equipment",
    description:
      "Pressure injection pumps, soil drills and dosing equipment are maintained and calibrated on schedule — treatment quality shouldn't depend on which technician shows up.",
  },
  {
    year: "Team",
    title: "Certified, Background-Checked Technicians",
    description:
      "Every technician is trained on current termiticide handling protocols and briefed before entering an occupied home or live commercial site.",
  },
  {
    year: "Outcome",
    title: "Built for Decades, Not Just a Season",
    description:
      "Porous pipe networks and warrantied treatments mean your protection can be renewed years later — without tearing up a single floor.",
  },
];

export const process = [
  {
    step: "01",
    title: "Site Inspection",
    description:
      "A technician visits your site to assess soil type, construction stage, and termite risk, and answers every question on the spot.",
  },
  {
    step: "02",
    title: "Quotation",
    description:
      "You receive a clear, itemised quote the same day — no hidden costs, no pressure to decide immediately.",
  },
  {
    step: "03",
    title: "Porous Pipe Installation",
    description:
      "For new builds, we lay the perforated pipe network along the foundation for future re-treatment access.",
  },
  {
    step: "04",
    title: "Chemical Treatment",
    description:
      "Approved termiticide is applied to soil, plinth, and vulnerable points using calibrated, professional equipment.",
  },
  {
    step: "05",
    title: "Quality Testing",
    description:
      "We verify treatment coverage and dosage against our checklist before signing off on the job.",
  },
  {
    step: "06",
    title: "Warranty",
    description:
      "You receive a written service warranty and, where applicable, an AMC plan to keep it valid year after year.",
  },
];

export type ProjectCategory =
  | "Homes"
  | "Builders"
  | "Commercial"
  | "Apartments"
  | "Farm Houses";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  image: string;
};

export const projects: Project[] = [
  { id: "p1", title: "Independent Villa Foundation Treatment", category: "Homes", location: "Sohna, Haryana", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" },
  { id: "p2", title: "Builder Township — 84 Units", category: "Builders", location: "Gurugram, Haryana", image: "https://images.unsplash.com/photo-1541976590-713941681591?w=1200&q=80" },
  { id: "p3", title: "Warehouse Perimeter Protection", category: "Commercial", location: "Manesar, Haryana", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80" },
  { id: "p4", title: "High-Rise Apartment Complex", category: "Apartments", location: "Faridabad, Haryana", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80" },
  { id: "p5", title: "Weekend Farm House Retreat", category: "Farm Houses", location: "Bilaspur, Sohna", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80" },
  { id: "p6", title: "School Campus Annual Contract", category: "Commercial", location: "Sohna, Haryana", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80" },
  { id: "p7", title: "Row House Cluster — Pre-Construction", category: "Builders", location: "Sohna Road, Gurugram", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80" },
  { id: "p8", title: "Farm House Estate, Full Perimeter", category: "Farm Houses", location: "Tauru Road, Sohna", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80" },
  { id: "p9", title: "Residential Society Common Areas", category: "Apartments", location: "Sector 5, Sohna", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b168?w=1200&q=80" },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rajeev Malhotra",
    location: "Villa Owner, Sohna",
    rating: 5,
    text:
      "They treated our foundation before the slab went in and installed the porous pipes exactly as explained. Two years on, zero termite activity — and the paperwork for the warranty is all in order.",
  },
  {
    name: "Sunita Yadav",
    location: "Homeowner, Gurugram",
    rating: 5,
    text:
      "We had visible mud tubes on an old boundary wall. The team came for inspection within a day, explained the injection process clearly, and the activity stopped completely within the week.",
  },
  {
    name: "Anil Construction Co.",
    location: "Builder, Sohna Road",
    rating: 5,
    text:
      "We've used them across three of our residential projects now. Scheduling around our construction timelines has never been an issue, and the site reports are thorough.",
  },
  {
    name: "Priya Sharma",
    location: "Apartment Resident, Faridabad",
    rating: 4,
    text:
      "Our RWA got them in for the whole society's common areas. Professional team, cleaned up after themselves, and the AMC pricing was fair compared to two other quotes we got.",
  },
  {
    name: "Manoj Farmhouse Estates",
    location: "Farm House Owner, Tauru Road",
    rating: 5,
    text:
      "Our farm house has a lot of exposed timber structures. They treated every vulnerable point and set us up on an annual contract so we don't have to think about it again.",
  },
];

export type WarningSign = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const warningSigns: WarningSign[] = [
  {
    icon: Route,
    title: "Mud Tubes",
    description:
      "Pencil-thin tunnels of mud running along walls, foundations or pillars — termites build these to travel between soil and wood while staying hidden.",
  },
  {
    icon: Volume2,
    title: "Hollow-Sounding Wood",
    description:
      "Tap door frames, skirting or furniture. A dull, hollow sound instead of a solid knock often means termites have eaten through from the inside.",
  },
  {
    icon: Feather,
    title: "Discarded Wings",
    description:
      "Small, uniform wings near windowsills or light fixtures are shed by swarming termites after they've found a new spot to colonise.",
  },
  {
    icon: AlertTriangle,
    title: "Blistered or Damaged Wood",
    description:
      "Wood that looks warped, bubbled, or crumbles when pressed can indicate active feeding beneath the painted or varnished surface.",
  },
  {
    icon: CircleDot,
    title: "Termite Droppings",
    description:
      "Small mounds of what looks like sawdust or coffee grounds near skirting boards or furniture are frass — a sign of a drywood termite colony nearby.",
  },
];

export type ServiceArea = { name: string; note: string };

export const serviceAreas: ServiceArea[] = [
  { name: "North India", note: "Delhi NCR, Haryana, Punjab, UP & Rajasthan" },
  { name: "South India", note: "Karnataka, Tamil Nadu, Kerala & Telangana" },
  { name: "West India", note: "Maharashtra, Gujarat & Madhya Pradesh" },
  { name: "East India", note: "West Bengal, Bihar, Odisha & Jharkhand" },
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: "How long does an anti-termite treatment take?",
    answer:
      "A typical residential pre-construction treatment takes 1–2 days depending on plot size. Post-construction drilling treatments for an average home usually take a single day. Commercial and large builder projects are scheduled in phases and quoted after the site inspection.",
  },
  {
    question: "Is the chemical treatment safe for my family and pets?",
    answer:
      "We use certified, low-odour termiticides applied strictly per label dosage. Treated areas are generally safe to occupy within a few hours once the chemical has cured, and we brief every household on any short precautions specific to their treatment.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "Every treatment comes with a written service warranty, with the exact duration depending on the treatment type and building. We'll confirm the specific warranty period in your quotation before work begins.",
  },
  {
    question: "What is a porous pipe system and do I need it?",
    answer:
      "It's a network of perforated pipes laid along your foundation during construction, allowing us to re-inject termiticide years later without breaking your flooring. It's optional but strongly recommended for new builds, since it protects your investment long after the original treatment fades.",
  },
  {
    question: "Do you treat buildings that are already constructed?",
    answer:
      "Yes. Our post-construction treatment uses low-mess drilling along the foundation line, skirting, and known entry points, with holes sealed immediately after injection.",
  },
  {
    question: "Do you offer annual maintenance contracts?",
    answer:
      "Yes, AMC plans include a scheduled yearly inspection with a written report, early-warning checks, and top-up treatment where a porous pipe network is installed. This also keeps your warranty valid.",
  },
  {
    question: "Which areas do you service?",
    answer:
      "We provide anti-termite treatment services all over India. Our head office is in Rewari, Haryana, and we have teams available across all major cities and states. Contact us with your location and we'll confirm scheduling.",
  },
  {
    question: "How much does anti-termite treatment cost?",
    answer:
      "Pricing depends on plot/built-up area, treatment type, and building stage. We provide a free on-site inspection and a transparent, itemised quotation before any commitment — no hidden charges.",
  },
  {
    question: "Dimak ka ilaj kaise hota hai? (How is termite treatment done?)",
    answer:
      "Dimak ka ilaj (anti-termite treatment) involves applying certified termiticides (dimak ki dawa) to the soil around the building's foundation, plinth, and vulnerable entry points. For new constructions, porous pipes are installed during foundation stage. For existing buildings, chemical injection through small drill holes is used. The treatment creates an undetectable barrier that eliminates the entire termite colony.",
  },
  {
    question: "Dimak ki dawa ka rate kya hai? (What is the termite treatment cost?)",
    answer:
      "Dimak ki dawa ka rate property ke area, treatment type (pre-construction ya post-construction), aur building stage par depend karta hai. Hum free site inspection dete hain aur transparent quotation dete hain — koi hidden charges nahi. Call karein +91 89305 00699 for a free quote.",
  },
  {
    question: "What are the signs of termite (dimak) infestation?",
    answer:
      "Common signs of termite (dimak) infestation include: mud tubes on walls or foundations, hollow-sounding wood when tapped, discarded wings near windowsills, blistered or damaged wood, and small mounds of termite droppings (frass). If you notice any of these, call us immediately for a free inspection.",
  },
  {
    question: "What is the difference between white ants and termites?",
    answer:
      "White ants and termites (dimak) are actually the same pest — termites are commonly called 'white ants' in India because of their pale colour. They are not actually ants but a completely different insect that feeds on wood and cellulose. The treatment for white ants/termites is the same anti-termite chemical treatment that we provide.",
  },
  {
    question: "Kya termite treatment se ghar ki warranty milti hai?",
    answer:
      "Haan, har treatment ke saath written service warranty milti hai. Warranty period treatment type aur building par depend karta hai. Annual Maintenance Contract (AMC) lene se warranty valid rehti hai aur regular inspections bhi hoti hain. Quotation mein warranty details clearly mentioned hoti hain.",
  },
];
