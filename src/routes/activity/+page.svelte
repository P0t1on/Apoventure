<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { browser } from '$app/environment';

  let { data }: { data: PageData } = $props();

  if (!browser) {
    // load page but server side
  }

  onMount(() => {});
</script>

<div></div>
