<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { Dialog } from '$lib';

  let { data }: { data: PageData } = $props();

  onMount(() => {
    Dialog.open('pause', true);
  });
</script>

<div>ad</div>
