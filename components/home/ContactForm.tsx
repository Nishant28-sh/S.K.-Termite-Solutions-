"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { services } from "@/lib/data";
import { contactSchema, type ContactFormData } from "@/lib/validation";

type FormData = ContactFormData;

type Props = {
  /** Optional tag identifying where this submission came from, e.g. the
   * "Which Treatment Do I Need?" tool — stored with the lead, never shown
   * to the visitor. */
  source?: string;
};

export default function ContactForm({ source }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        setServerError(
          result.error || "Something went wrong. Please call or WhatsApp us instead."
        );
        return;
      }

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setServerError(
        "Couldn't reach the server. Please check your connection or call/WhatsApp us instead."
      );
    }
  };

  const inputClass =
    "w-full rounded-xl sm:rounded-2xl border border-ink/10 bg-cream/60 px-3.5 sm:px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-forest focus:bg-white outline-none transition-colors";

  return (
    <div className="relative">
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -top-4 left-0 right-0 z-10 flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-forest text-cream px-4 sm:px-5 py-3 sm:py-4 shadow-premium-lg"
          >
            <CheckCircle2 className="text-gold shrink-0" size={20} />
            <span className="text-xs sm:text-sm font-medium">
              Thank you! We&apos;ve received your request and will call you shortly.
            </span>
          </motion.div>
        )}
        {serverError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="alert"
            className="absolute -top-4 left-0 right-0 z-10 flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-red-600 text-white px-4 sm:px-5 py-3 sm:py-4 shadow-premium-lg"
          >
            <AlertCircle className="shrink-0" size={20} />
            <span className="text-xs sm:text-sm font-medium">{serverError}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-2">
        <div>
          <label htmlFor="cf-name" className="sr-only">Full Name</label>
          <input
            id="cf-name"
            {...register("name")}
            placeholder="Full Name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            className={inputClass}
          />
          {errors.name && (
            <p id="cf-name-error" className="text-[11px] text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-phone" className="sr-only">Phone Number</label>
          <input
            id="cf-phone"
            {...register("phone")}
            placeholder="Phone Number"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "cf-phone-error" : undefined}
            className={inputClass}
          />
          {errors.phone && (
            <p id="cf-phone-error" className="text-[11px] text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-email" className="sr-only">Email Address</label>
          <input
            id="cf-email"
            {...register("email")}
            placeholder="Email Address"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-error" : undefined}
            className={inputClass}
          />
          {errors.email && (
            <p id="cf-email-error" className="text-[11px] text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-location" className="sr-only">Property Location / City</label>
          <input
            id="cf-location"
            {...register("location")}
            placeholder="Property Location / City"
            autoComplete="address-level2"
            aria-invalid={!!errors.location}
            aria-describedby={errors.location ? "cf-location-error" : undefined}
            className={inputClass}
          />
          {errors.location && (
            <p id="cf-location-error" className="text-[11px] text-red-600 mt-1">{errors.location.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="cf-service" className="sr-only">Service Required</label>
          <select
            id="cf-service"
            {...register("service")}
            className={inputClass}
            defaultValue=""
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "cf-service-error" : undefined}
          >
            <option value="" disabled>
              Select Service Required
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="cf-service-error" className="text-[11px] text-red-600 mt-1">{errors.service.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="sr-only">Message</label>
          <textarea
            id="cf-message"
            {...register("message")}
            placeholder="Tell us about your property (optional)"
            rows={3}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest text-cream font-semibold py-3.5 sm:py-4 text-sm sm:text-base hover:bg-forest-light transition-colors disabled:opacity-70 active:scale-[0.98]"
        >
          {isSubmitting && <Loader2 size={18} className="animate-spin" />}
          {isSubmitting ? "Sending..." : "Request Free Inspection"}
        </button>
      </form>
    </div>
  );
}
