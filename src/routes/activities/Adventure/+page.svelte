<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  function loadCard() {}

  onMount(() => {
    if (data.platform === 'client') {
      const { dialogs: Dialog, keyboards } = data;
      if (!Dialog || !keyboards) return;

      // keyboards.on('keyPress', (v) => console.log(v));
      // keyboards.on('keyHold', (v) => console.log(v));
    }
  });
</script>

<div id="adventure">
  <span>d</span>
</div>

<style lang="scss">
  div#adventure {
    background-color: rgba(128, 128, 128, 0.2);
  }
</style>
