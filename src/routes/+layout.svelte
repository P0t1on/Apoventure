<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import type { LayoutData } from './$types';
  import './style.scss';

  // states
  // export let data: LayoutData;
  const { children }: { children: Snippet } = $props();
</script>

<!-- <a href="/activities/Adventure">test</a> -->

{@render children()}

<style>
</style>
