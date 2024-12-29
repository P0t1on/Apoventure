<script lang="ts">
  import { onMount } from 'svelte';
  import box2d, { b2PolygonShape, b2World } from '@box2d/core';
  import type { PageData } from './$types';
  import { browser } from '$app/environment';

  let { data }: { data: PageData } = $props();

  if (!browser) {
    // load page but server side
  }

  onMount(() => {
    console.log(data);
  });
</script>

<div></div>
