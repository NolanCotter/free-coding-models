<script lang="ts">
  const capabilities = [
    'SvelteKit app shell',
    'Convex backend schema',
    'Inngest event orchestration',
    'Private multi-agent factory core'
  ];
</script>

<svelte:head>
  <title>agent-factory-core</title>
  <meta
    name="description"
    content="Master orchestrator for the multi-agent factory built with SvelteKit, Convex, and Inngest."
  />
</svelte:head>

<main>
  <section>
    <p class="eyebrow">agent-factory-core</p>
    <h1>Master orchestrator for the multi-agent factory.</h1>
    <p class="lede">
      This private repo holds the coordination layer for the system: the SvelteKit app,
      Convex data model, and Inngest event pipeline.
    </p>
  </section>

  <section>
    <h2>Configured pieces</h2>
    <ul>
      {#each capabilities as capability}
        <li>{capability}</li>
      {/each}
    </ul>
  </section>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    background: #0f172a;
    color: #e2e8f0;
  }

  main {
    max-width: 960px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
    display: grid;
    gap: 2rem;
  }

  section {
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 1.25rem;
    padding: 2rem;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.3);
  }

  .eyebrow {
    margin: 0 0 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: #38bdf8;
    font-size: 0.8rem;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 1.02;
  }

  .lede {
    max-width: 60ch;
    color: #cbd5e1;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  h2 {
    margin-top: 0;
  }

  ul {
    margin: 0;
    padding-left: 1.25rem;
    line-height: 1.8;
  }
</style>
