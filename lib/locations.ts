export type CityLocation = {
  slug: string;
  name: string;
  state: string;
  title: string;
  description: string;
  h1: string;
  tagline: string;
  metaKeywords: string[];
  intro: string;
  whyChoose: string[];
  faqs: { question: string; answer: string }[];
};

export const locationsData: Record<string, CityLocation> = {
  bhiwani: {
    slug: "bhiwani",
    name: "Bhiwani",
    state: "Haryana",
    title: "Termite Solution in Bhiwani | Best Dimak Treatment & Control Services",
    description:
      "Looking for the best termite solution in Bhiwani? S.K. Termite Solutions provides certified anti-termite treatment (dimak ka ilaj), porous pipe installation & chemical injection in Bhiwani, Haryana. Free inspection: +91 89305 00699.",
    h1: "Best Anti-Termite Treatment & Dimak Solution in Bhiwani",
    tagline:
      "Certified anti-termite protection for homes, villas, commercial developments & builder projects across Bhiwani.",
    metaKeywords: [
      "termite solution in bhiwani",
      "dimak solution in bhiwani",
      "dimak ka ilaj in bhiwani",
      "anti termite treatment in bhiwani",
      "pest control in bhiwani",
      "dimak ki dawa bhiwani",
      "best termite control bhiwani",
      "porous pipe installation bhiwani",
    ],
    intro:
      "S.K. Termite Solutions is the leading provider of professional anti-termite treatment and dimak solutions in Bhiwani, Haryana. Subterranean termites pose a serious threat to wooden doors, furniture, skirting, and building foundations in Bhiwani. Our team uses certified, low-odour termiticides and advanced soil injection / porous pipe technology to protect your property permanently.",
    whyChoose: [
      "Same-day or next-day site inspection in Bhiwani",
      "Government-standard compliant IS 6313 chemical barrier treatment",
      "Odourless & family-safe chemical formulations",
      "Written service warranty on every project",
      "Specialized in pre-construction porous pipe installation in Bhiwani",
    ],
    faqs: [
      {
        question: "Bhiwani mein dimak ka ilaj kaise karwayein?",
        answer:
          "S.K. Termite Solutions par call ya WhatsApp karein (+91 89305 00699). Humari team Bhiwani mein aapke ghar ya commercial site par aakar free inspection karegi aur transparent itemised quote degi.",
      },
      {
        question: "Bhiwani mein termite treatment / dimak solution ka cost kya hai?",
        answer:
          "Pricing plot area, construction stage (pre vs post construction) aur treatment type par depend karta hai. Hum Bhiwani mein sabse affordable rates aur written warranty offer karte hain.",
      },
      {
        question: "Kya treatment se wooden furniture aur door frames safe rehte hain?",
        answer:
          "Haan! Hum targeted chemical injection and colony knockdown formulas use karte hain jo termites ko root se eliminate karte hain aur timber structures ko permanently protect karte hain.",
      },
    ],
  },
  rewari: {
    slug: "rewari",
    name: "Rewari",
    state: "Haryana",
    title: "Termite Solution in Rewari | Best Dimak Treatment (Saraswati Vihar)",
    description:
      "Best termite solution in Rewari (Head Office: Saraswati Vihar). S.K. Termite Solutions offers certified anti-termite treatment, dimak ka ilaj, porous pipe installation & emergency control in Rewari, Haryana. Call +91 89305 00699.",
    h1: "Best Anti-Termite Treatment & Dimak Solution in Rewari",
    tagline:
      "Headquartered in Saraswati Vihar, Rewari — Providing top-rated 24/7 termite & dimak control services across Rewari district.",
    metaKeywords: [
      "termite solution in rewari",
      "dimak solution in rewari",
      "dimak ka ilaj in rewari",
      "anti termite treatment in rewari",
      "pest control in rewari",
      "dimak ki dawa rewari",
      "best termite control rewari",
      "porous pipe installation rewari",
      "saraswati vihar rewari pest control",
    ],
    intro:
      "S.K. Termite Solutions has its head office located at Saraswati Vihar, Rewari. As Rewari's #1 rated anti-termite specialist, we deliver scientific pre-construction soil treatment, porous pipe network fitting, and post-construction chemical injection. Protect your home, villa, or commercial project in Rewari from destructive termite colonies.",
    whyChoose: [
      "Head office located directly in Rewari (Saraswati Vihar) for immediate 2-hour response",
      "Over 10+ years of local field experience in Rewari and surrounding areas",
      "Porous pipe technology that eliminates breaking tiles for future top-ups",
      "Certified safe chemicals — safe for kids and pets once cured",
      "Official written service warranty & annual maintenance contract (AMC)",
    ],
    faqs: [
      {
        question: "Rewari mein S.K. Termite Solutions ka office kahan hai?",
        answer:
          "Humar head office Saraswati Vihar, Rewari, Haryana mein hai. Aap humein +91 89305 00699 par call karke direct free site inspection book kar sakte hain.",
      },
      {
        question: "Rewari mein dimak solution kitne time mein effective hota hai?",
        answer:
          "Humara non-repellent chemical formula termite colony ke contact mein aate hi kaam karna shuru kar deta hai. Visible termite activity 24 to 48 hours ke andar khatam ho jaati hai.",
      },
      {
        question: "Kya pre-construction porous pipe system Rewari mein available hai?",
        answer:
          "Haan! Hum foundation trenching stage par porous pipe fit karte hain jisse future mein bina flooring tode chemical inject ho sake.",
      },
    ],
  },
  rohtak: {
    slug: "rohtak",
    name: "Rohtak",
    state: "Haryana",
    title: "Termite Solution in Rohtak | Dimak Ka Ilaj & Pest Control",
    description:
      "Top-rated termite solution in Rohtak! S.K. Termite Solutions delivers certified anti-termite treatment, dimak control, porous pipe installation & AMC for homes & businesses in Rohtak, Haryana. Call +91 89305 00699.",
    h1: "Best Anti-Termite Treatment & Dimak Solution in Rohtak",
    tagline:
      "Complete anti-termite solutions for residential houses, commercial complexes, schools & factories in Rohtak.",
    metaKeywords: [
      "termite solution in rohtak",
      "dimak solution in rohtak",
      "dimak ka ilaj in rohtak",
      "anti termite treatment in rohtak",
      "pest control in rohtak",
      "dimak ki dawa rohtak",
      "best termite control rohtak",
      "porous pipe installation rohtak",
    ],
    intro:
      "Searching for a reliable termite solution in Rohtak? S.K. Termite Solutions provides specialized pest control and subterranean termite treatment in Rohtak. Whether you are building a new residential home, managing an apartment society, or running a commercial facility, our certified technicians stop termite damage in its tracks.",
    whyChoose: [
      "Prompt inspection and customized treatment plans for Rohtak properties",
      "IS 6313 compliant chemical barrier around plinth and foundation",
      "Clean low-mess post-construction drilling and hole sealing",
      "Long-term written service warranties and AMC maintenance options",
      "Transparent pricing with no hidden charges",
    ],
    faqs: [
      {
        question: "Rohtak mein dimak marne ki sabse achhi dawa kaunsi hai?",
        answer:
          "Hum government-certified non-repellent termiticides use karte hain jo termites absorb karke queen aur entire colony tak le jaate hain, jisse poora nest khatam ho jata hai.",
      },
      {
        question: "Rohtak mein service schedule kaise karein?",
        answer:
          "Aap WhatsApp par message ya +91 89305 00699 par call kar sakte hain. Humari team 24 hours ke andar Rohtak mein inspection ke liye aati hai.",
      },
    ],
  },
  hisar: {
    slug: "hisar",
    name: "Hisar",
    state: "Haryana",
    title: "Termite Solution in Hisar | Anti-Termite Treatment & Dimak Control",
    description:
      "Expert termite solution in Hisar! S.K. Termite Solutions provides certified anti-termite treatment, dimak ka ilaj, porous pipe installation & foundation protection in Hisar, Haryana. Call +91 89305 00699.",
    h1: "Best Anti-Termite Treatment & Dimak Solution in Hisar",
    tagline:
      "Professional termite control and porous pipe piping network for homes, villas & industrial units in Hisar.",
    metaKeywords: [
      "termite solution in hisar",
      "dimak solution in hisar",
      "dimak ka ilaj in hisar",
      "anti termite treatment in hisar",
      "pest control in hisar",
      "dimak ki dawa hisar",
      "best termite control hisar",
      "porous pipe installation hisar",
    ],
    intro:
      "S.K. Termite Solutions brings expert anti-termite protection and dimak solutions to Hisar, Haryana. Soil conditions in Hisar require durable, high-concentration chemical barriers during pre-construction as well as precise chemical injection for existing homes showing mud tubes.",
    whyChoose: [
      "Specialized soil treatment formulas tailored for Hisar region",
      "Expert installation of porous pipe chemical reticulation systems",
      "Same-week scheduling with priority emergency response",
      "Eco-considerate and safe for indoor environment",
      "Backed by written warranty cards and annual inspection plans",
    ],
    faqs: [
      {
        question: "Hisar mein anti-termite treatment ki warranty kitni hoti hai?",
        answer:
          "Pre-construction treatment aur porous pipe installation ke saath long-term multi-year warranty milti hai. Post-construction treatment par bhi comprehensive written warranty di jaati hai.",
      },
      {
        question: "Kya Hisar mein emergency termite inspection milti hai?",
        answer:
          "Haan! Agar aapko mud tubes ya wood damage milta hai, to hum Hisar mein priority inspection send karte hain.",
      },
    ],
  },
  gurugram: {
    slug: "gurugram",
    name: "Gurugram",
    state: "Haryana",
    title: "Termite Solution in Gurugram | Anti-Termite Treatment & Porous Pipe",
    description:
      "Premium termite solution in Gurugram! S.K. Termite Solutions offers pre & post construction anti-termite treatment, dimak ka ilaj, porous pipe network in Gurugram & Delhi NCR. Call +91 89305 00699.",
    h1: "Best Anti-Termite Treatment & Dimak Solution in Gurugram",
    tagline:
      "Serving villas, builder floors, high-rise apartments, RWAs & corporate offices across Gurugram & NCR.",
    metaKeywords: [
      "termite solution in gurugram",
      "dimak solution in gurugram",
      "dimak ka ilaj in gurugram",
      "anti termite treatment in gurugram",
      "pest control in gurugram",
      "dimak ki dawa gurugram",
      "best termite control gurugram",
      "porous pipe installation gurugram",
    ],
    intro:
      "S.K. Termite Solutions offers high-end anti-termite treatment and dimak solutions in Gurugram. From luxury villas on Golf Course Road to builder floors and high-rise apartments, we engineering long-lasting termite barriers so your property investment remains secure.",
    whyChoose: [
      "Extensive experience with Gurugram builders, RWAs and luxury villas",
      "Porous pipe installation for future maintenance without tile damage",
      "Low-mess drilling and immediate sealing for luxury interiors",
      "Fast response team covering all sectors of Gurugram",
      "Transparent itemised quotes and multi-year warranties",
    ],
    faqs: [
      {
        question: "Gurugram mein high-rise apartments ya villas ke liye konsa treatment best hai?",
        answer:
          "Existing properties ke liye Post-Construction Chemical Injection aur active infestation sites par targeted drilling best hai. New villas ke liye Porous Pipe System install hota hai.",
      },
    ],
  },
};
