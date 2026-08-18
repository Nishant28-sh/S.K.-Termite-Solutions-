import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "SK Termite Solutions",
  tagline: "Pre & Post Construction Anti-Termite Protection",
  phone: "+91 89305 00699",
  phoneDisplay: "+91 89305 00699",
  whatsapp: "918930500699",
  email: "care@sktermitesolutions.com",
  address: "Saraswati Vihar, Rewari, Haryana, India",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM | Sunday: By Appointment",
  domain: "https://www.sktermitesolutions.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.633!2d77.0644!3d28.2497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDE0JzU5LjAiTiA3N8KwMDMnNTIuMCJF!5e0!3m2!1sen!2sin!4v1700000000000",
};
