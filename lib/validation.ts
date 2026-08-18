import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  location: z.string().min(2, "Please tell us your location").max(150),
  service: z.string().min(1, "Please select a service"),
  message: z.string().max(2000).optional(),
  // Populated silently by the "Which Treatment Do I Need?" tool when a
  // visitor arrives at the form after using it — not shown as a form field.
  source: z.string().max(50).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
