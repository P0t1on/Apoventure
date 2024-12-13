<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import Svgs from '$lib/Svgs.svelte';
  import type { LayoutData } from './$types';
  import { goto } from '$app/navigation';

  type svgTypes = Parameters<typeof Svgs>[1]['type'];

  const acts = {
    shield: 'Defense',
    home: 'Station',
    meeting_room: 'Adventure',
  } as const;

  // states
  let selectedAct = $state('');
  // export let data: LayoutData;
  const { children }: { children: Snippet } = $props();
  onMount(() => {
    console.log(location.pathname);
  });
</script>

{#snippet activity(category: svgTypes, title: string)}
  <div
    class:activity={true}
    class:active={selectedAct === title}
    onclick={() => {
      if (selectedAct !== title)
        goto(`/activities/${acts[category as keyof typeof acts] ?? 'Station'}`);
      selectedAct = title;
    }}
    role="presentation"
    {title}
  >
    <Svgs type={category} />
  </div>
{/snippet}

<svelte:head>
  <title>Apoventure</title>
</svelte:head>

<!-- <a href="/activities/Adventure">test</a> -->

<div id="activities">
  {@render activity('shield', '방어전')}
  {@render activity('meeting_room', '모험하기')}
  {@render activity('home', '거점')}
</div>

<div id="display">
  <div class="wrapper">
    {@render children()}
  </div>
</div>

<style>
  div#activities {
    z-index: 1;
    position: absolute;
    right: 16px;
    top: 16px;
    display: flex;

    div.activity {
      transition: all ease 0.5s;
      border-style: outset;
      border-radius: 4px;
      border-color: gray;
      cursor: pointer;
      padding: 4px;
      margin: 4px;

      &:hover {
        background-color: rgba(128, 128, 128, 0.404);
      }

      &:active,
      &.active {
        background-color: rgba(128, 128, 128, 0.404);
        cursor: auto;
        border-style: inset;
      }
    }
  }

  div#display {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    div.wrapper {
      margin: 0;
      padding: 4px;
      min-width: 50%;
      min-height: 50%;
      border-radius: 16px;
      border-width: 8px;
      background-color: rgba(128, 128, 128, 0.2);
      border-color: brown;
      border-style: groove;
    }
  }
</style>
