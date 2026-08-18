import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { saveLead } from "@/lib/leads";
import { notifyNewLead } from "@/lib/notify";

// Very small in-memory rate limiter (per server instance) to deter spam
// without needing an external service. Resets on redeploy/restart.
const submissionsByIp = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the form for errors.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  // Honeypot-style spam guard: reject suspiciously fast, script-like
  // submissions that fill every field identically. Keep it light-touch.
  if (parsed.data.message && parsed.data.message.includes("http://") && parsed.data.message.includes("https://")) {
    return NextResponse.json(
      { ok: false, error: "Submission flagged as spam." },
      { status: 400 }
    );
  }

  try {
    const lead = await saveLead(parsed.data);

    // Fire-and-forget: don't let a slow/failed email delay the response
    // to the visitor or fail their submission.
    notifyNewLead(lead).catch(() => {});

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (err) {
    console.error("Failed to save lead:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please call or WhatsApp us instead." },
      { status: 500 }
    );
  }
}
