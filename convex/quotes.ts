import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const submitQuote = mutation({
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
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("quotes", args);
    await ctx.scheduler.runAfter(0, internal.emails.notifyOwner, args);
    return id;
  },
});
