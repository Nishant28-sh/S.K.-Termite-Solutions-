import { promises as fs } from "fs";
import path from "path";
import type { ContactFormData } from "@/lib/validation";

export type LeadStatus =
  | "New"
  | "Contacted"
  | "Inspection Scheduled"
  | "Quoted"
  | "Converted"
  | "Closed";

export type Lead = ContactFormData & {
  id: string;
  createdAt: string;
  status: LeadStatus;
};

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

/**
 * Lightweight file-based lead store.
 *
 * This works out of the box with zero setup (no DB credentials needed) on
 * any Node hosting where the filesystem persists between requests (a VPS,
 * Railway, Render, a Docker container, `next start` on your own server).
 *
 * IMPORTANT: on serverless platforms with an ephemeral/read-only filesystem
 * (Vercel, Netlify Functions, AWS Lambda) this file will NOT persist across
 * requests. If you deploy there, swap this module's implementation for a
 * real datastore (MongoDB, Postgres/Supabase, Airtable, Google Sheets, etc.)
 * — the function signature below (`saveLead`) is the only thing that needs
 * to change; nothing in the API route or the form has to know the difference.
 */
export async function saveLead(
  data: ContactFormData
): Promise<Lead> {
  const lead: Lead = {
    ...data,
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    status: "New",
  };

  await fs.mkdir(DATA_DIR, { recursive: true });

  let existing: Lead[] = [];
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    // File doesn't exist yet on first submission — that's fine.
    existing = [];
  }

  existing.push(lead);
  await fs.writeFile(LEADS_FILE, JSON.stringify(existing, null, 2), "utf-8");

  return lead;
}
