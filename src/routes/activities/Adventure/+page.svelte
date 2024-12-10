<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  onMount(() => {
    if (data.platform === 'client') {
      const { dialogs: Dialog, keyboards } = data;
      if (!Dialog || !keyboards) return;

      // keyboards.on('keyPress', (v) => console.log(v));
      // keyboards.on('keyHold', (v) => console.log(v));
    }
  });
</script>

<div>adventure</div>
