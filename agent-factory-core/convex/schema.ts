import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  workflows: defineTable({
    name: v.string(),
    status: v.optional(v.string()),
    notes: v.optional(v.string())
  })
});
