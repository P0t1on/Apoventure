<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import Svgs from '$lib/Svgs.svelte';
  import type { LayoutData } from './$types';
  import './style.scss';
  import { goto } from '$app/navigation';

  type svgTypes = Parameters<typeof Svgs>[1]['type'];

  const acts = {
    shield: 'Defense',
    home: 'Station',
    meeting_room: 'Adventure',
  } as const;
  // export let data: LayoutData;
  const { children }: { children: Snippet } = $props();
  onMount(() => {
    console.log(location.pathname);
  });
</script>

{#snippet activity(category: svgTypes)}
  <div
    class="activity"
    onclick={() =>
      goto(`/activities/${acts[category as keyof typeof acts] ?? 'Station'}`)}
    title="Defense"
    role="presentation"
  >
    <Svgs type={category} />
  </div>
{/snippet}

<svelte:head>
  <title>Apoventure</title>
</svelte:head>

<div id="rootLayout">
  <a href="/activities/Adventure">test</a>

  <div id="activities">
    {@render activity('shield')}
    {@render activity('meeting_room')}
    {@render activity('home')}
  </div>
  {@render children()}
</div>

<style>
  div#activities {
    position: absolute;
    right: 16px;
    top: 16px;

    div.activity {
      border-style: outset;
      border-radius: 4px;
      border-color: gray;
      cursor: pointer;
      padding: 4px;
      margin: 4px;

      &:active {
        cursor: auto;
        border-style: inset;
      }
    }
  }
</style>
