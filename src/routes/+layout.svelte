<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import Svgs from '$lib/Svgs.svelte';
  import type { LayoutData } from './$types';
  import './style.scss';

  // export let data: LayoutData;
  const { children }: { children: Snippet } = $props();
  onMount(() => {
    console.log(location.pathname);
  });
</script>

{#snippet activity(category: Parameters<typeof Svgs>[1]['type'])}
  <Svgs onclick={() => console.log('H')} />
{/snippet}

<svelte:head>
  <title>Apoventure</title>
</svelte:head>

<div id="rootLayout">
  <a href="/activities/Adventure">test</a>

  {@render activity('shield')}
  {@render children()}
</div>
