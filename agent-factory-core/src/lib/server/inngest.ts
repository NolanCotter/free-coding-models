import { Inngest } from 'inngest';

export const inngest = new Inngest({
  id: 'agent-factory-core'
});

export const sampleOrchestratorPulse = inngest.createFunction(
  { id: 'sample-orchestrator-pulse' },
  { event: 'agent-factory/pulse' },
  async ({ event }) => {
    return {
      received: true,
      event
    };
  }
);
