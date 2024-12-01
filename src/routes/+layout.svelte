<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import type { LayoutData } from './$types';
  import './style.scss';

  // export let data: LayoutData;
  const { children }: { children: Snippet } = $props();
  onMount(() => {
    console.log(location.pathname);
  });
</script>

<svelte:head>
  <title>Apoventure</title>
</svelte:head>

<div id="rootLayout">
  <a href="/activities/Adventure">test</a>

  {@render children()}
</div>
