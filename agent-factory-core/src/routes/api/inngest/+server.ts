import { serve } from 'inngest/sveltekit';
import { inngest, sampleOrchestratorPulse } from '$lib/server/inngest';

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [sampleOrchestratorPulse]
});
