"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, RotateCcw } from "lucide-react";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data";

type Answers = {
  underConstruction: boolean | null;
  hasActivity: boolean | null;
  isCommercial: boolean | null;
};

const initialAnswers: Answers = {
  underConstruction: null,
  hasActivity: null,
  isCommercial: null,
};

function getRecommendation(answers: Answers): { slug: string; note: string } | null {
  const { underConstruction, hasActivity, isCommercial } = answers;
  if (underConstruction === null) return null;

  if (underConstruction) {
    return {
      slug: "pre-construction-anti-termite",
      note: "Since the building is still under construction, this is the most effective — and most affordable — stage to treat it. Ask us about pairing it with a porous pipe installation for future top-ups.",
    };
  }

  if (hasActivity === null) return null;

  if (hasActivity) {
    return {
      slug: "post-construction-treatment",
      note: "Active termite activity on a completed building calls for drilling and chemical injection at the entry points we identify during inspection.",
    };
  }

  if (isCommercial === null) return null;

  return {
    slug: "annual-maintenance",
    note: isCommercial
      ? "No visible activity yet — for a commercial property, a scheduled inspection contract is the most practical way to catch problems early without disrupting operations."
      : "No visible activity yet — a preventive inspection now, followed by an annual maintenance contract, is the most cost-effective way to stay ahead of termites.",
  };
}

function QuestionCard({
  question,
  onAnswer,
}: {
  question: string;
  onAnswer: (val: boolean) => void;
}) {
  return (
    <motion.div
      key={question}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.3 }}
    >
      <p className="font-display text-lg sm:text-xl text-ink text-center">
        {question}
      </p>
      <div className="flex gap-3 justify-center mt-6">
        <button
          onClick={() => onAnswer(true)}
          className="px-8 py-3 rounded-full bg-forest text-cream font-semibold text-sm hover:bg-forest-light transition-colors active:scale-[0.97]"
        >
          Yes
        </button>
        <button
          onClick={() => onAnswer(false)}
          className="px-8 py-3 rounded-full border-2 border-forest text-forest font-semibold text-sm hover:bg-forest hover:text-cream transition-colors active:scale-[0.97]"
        >
          No
        </button>
      </div>
    </motion.div>
  );
}

export default function TreatmentFinder() {
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const recommendation = getRecommendation(answers);
  const recommendedService = recommendation
    ? services.find((s) => s.slug === recommendation.slug)
    : null;

  const reset = () => setAnswers(initialAnswers);

  let step: "construction" | "activity" | "commercial" | "result" = "construction";
  if (recommendation) step = "result";
  else if (answers.underConstruction === false && answers.hasActivity === null)
    step = "activity";
  else if (answers.hasActivity === false && answers.isCommercial === null)
    step = "commercial";

  return (
    <section className="section-pad bg-white" id="treatment-finder">
      <div className="container-premium">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="eyebrow text-[10px] sm:text-xs">Quick Guide</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl mt-2 sm:mt-3 text-ink text-balance">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink/60 leading-relaxed">
            Answer three quick questions and we'll point you to the right
            starting point.
          </p>
        </div>

        <div className="max-w-xl mx-auto rounded-2xl sm:rounded-3xl bg-cream/60 border border-ink/5 p-6 sm:p-10 min-h-[220px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === "construction" && (
              <QuestionCard
                key="q1"
                question="Is your property currently under construction?"
                onAnswer={(val) =>
                  setAnswers((a) => ({ ...a, underConstruction: val }))
                }
              />
            )}
            {step === "activity" && (
              <QuestionCard
                key="q2"
                question="Are you already seeing signs of termite activity?"
                onAnswer={(val) =>
                  setAnswers((a) => ({ ...a, hasActivity: val }))
                }
              />
            )}
            {step === "commercial" && (
              <QuestionCard
                key="q3"
                question="Is the property commercial?"
                onAnswer={(val) =>
                  setAnswers((a) => ({ ...a, isCommercial: val }))
                }
              />
            )}
            {step === "result" && recommendation && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
                  <CheckCircle2 size={24} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-forest mt-4">
                  Recommended starting point
                </p>
                <h3 className="font-display text-xl sm:text-2xl text-ink mt-2">
                  {recommendedService?.title}
                </h3>
                <p className="text-sm text-ink/60 mt-3 leading-relaxed max-w-md mx-auto">
                  {recommendation.note}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  <Button href="/contact" size="md">
                    Get a Free Site Assessment
                  </Button>
                  <button
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-ink/50 hover:text-ink transition-colors"
                  >
                    <RotateCcw size={14} /> Start over
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
