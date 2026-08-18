import type { Lead } from "@/lib/leads";
import { SITE } from "@/lib/utils";

/**
 * Sends a plain-text email notification for a new lead via the Resend API.
 *
 * No-op (returns without error) if RESEND_API_KEY isn't set, so the contact
 * form keeps working with zero configuration — the lead is still saved by
 * saveLead() either way. Add RESEND_API_KEY and CONTACT_TO_EMAIL to your
 * .env.local (see .env.example) to turn this on.
 */
export async function notifyNewLead(lead: Lead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const to = process.env.CONTACT_TO_EMAIL || SITE.email;
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${SITE.name} Website <${from}>`,
        to: [to],
        reply_to: lead.email,
        subject: `New inspection request — ${lead.name} (${lead.location})`,
        text: [
          `New lead from the website contact form.`,
          ``,
          `Name: ${lead.name}`,
          `Phone: ${lead.phone}`,
          `Email: ${lead.email}`,
          `Location: ${lead.location}`,
          `Service required: ${lead.service}`,
          `Message: ${lead.message || "—"}`,
          lead.source ? `Source: ${lead.source}` : null,
          ``,
          `Received: ${new Date(lead.createdAt).toLocaleString("en-IN")}`,
          `Lead ID: ${lead.id}`,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!res.ok) {
      console.error("Resend notification failed:", await res.text());
    }
  } catch (err) {
    // Never let a notification failure break the form submission —
    // the lead is already saved by saveLead() regardless.
    console.error("Failed to send lead notification email:", err);
  }
}
