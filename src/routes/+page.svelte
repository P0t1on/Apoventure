<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';

  let { data }: { data: PageData } = $props();

  onMount(() => {
    goto('/activities');
  });
</script>

<div id="main"></div>

<style lang="scss">
</style>
