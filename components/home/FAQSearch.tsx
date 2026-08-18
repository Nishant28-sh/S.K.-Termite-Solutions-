"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import FAQAccordion from "@/components/home/FAQAccordion";
import { faqs } from "@/lib/data";

export default function FAQSearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return faqs;
    const q = query.toLowerCase();
    return faqs.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <div className="relative max-w-lg mx-auto mb-10">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40"
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a question..."
          className="w-full rounded-full border border-ink/10 bg-white pl-11 pr-4 py-3.5 text-sm outline-none focus:border-forest transition-colors shadow-premium"
        />
      </div>
      {filtered.length > 0 ? (
        <FAQAccordion items={filtered} />
      ) : (
        <p className="text-center text-ink/50">
          No matching questions — try a different search, or{" "}
          <a href="/contact" className="text-forest font-semibold">
            ask us directly
          </a>
          .
        </p>
      )}
    </div>
  );
}
