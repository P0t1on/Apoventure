<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  onMount(() => {
    if (data.platform === 'client') {
      const { dialogs: Dialog } = data;
      if (!Dialog) return;

      Dialog.open('pause', true);
    }
  });
</script>

<div>ad</div>
