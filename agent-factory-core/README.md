# agent-factory-core

This private repository is the master orchestrator for the multi-agent factory.

It is scaffolded as a SvelteKit app with:

- Convex for persistent data and workflow state
- Inngest for background jobs and agent orchestration
- A private, central place to coordinate future agents and services

## Structure

- src/ - SvelteKit UI and server routes
- src/routes/api/inngest/+server.ts - Inngest event endpoint
- src/lib/server/inngest.ts - Inngest client and sample function
- convex/schema.ts - Convex data model scaffold

## Getting started

1. Install dependencies.
2. Set the environment variables in .env from .env.example.
3. Run npm run dev for the SvelteKit app.
4. Run npm run convex:dev to connect Convex locally.
