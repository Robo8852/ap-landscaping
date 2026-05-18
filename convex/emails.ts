import { internalAction } from "./_generated/server";
import { v } from "convex/values";

// Temporary: Resend's free tier without a verified domain only delivers to
// the email on the Resend account itself. Swap back to ayclanscape@gmail.com
// once ayclandscaping.com (or whichever domain wins) is verified in Resend.
const OWNER_INBOX = "leoreyes@costadelsolweb.com";
const FROM_ADDRESS = "AYC Landscaping <onboarding@resend.dev>";

export const notifyOwner = internalAction({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    city: v.optional(v.string()),
    service: v.optional(v.string()),
    message: v.optional(v.string()),
    source: v.optional(v.string()),
  },
  handler: async (_ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not set in Convex env");
    }

    const fullName = `${args.firstName} ${args.lastName}`.trim();

    const rows: Array<[string, string]> = [
      ["Name", fullName],
      ["Email", args.email],
      ["Phone", args.phone || "—"],
      ["City", args.city || "—"],
      ["Service", args.service || "—"],
      ["Source", args.source || "—"],
    ];

    const html = `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#1f2937;">
  <h2 style="color:#006B3D;font-size:22px;margin:0 0 16px;">New quote request</h2>
  <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
    ${rows
      .map(
        ([k, val]) => `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;width:30%;">${k}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(val)}</td>
    </tr>`,
      )
      .join("")}
  </table>
  <h3 style="font-size:16px;margin:24px 0 8px;">Message</h3>
  <p style="white-space:pre-wrap;background:#f9fafb;padding:12px 16px;border-radius:8px;margin:0;">${escapeHtml(args.message || "(no message provided)")}</p>
  <p style="margin-top:24px;font-size:13px;color:#6b7280;">Reply directly to this email to respond to ${escapeHtml(fullName)}.</p>
</div>`.trim();

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [OWNER_INBOX],
        reply_to: args.email,
        subject: `New quote request — ${fullName}`,
        html,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Resend API ${response.status}: ${body}`);
    }
  },
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
