<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import type { CardType } from '$lib/types/Card';
  import { sleep } from '$lib';

  let {
    data,
    description = $bindable(''),
  }: { data: PageData; description: string } = $props();

  async function loadCard(card: CardType) {
    const { description: cDesc } = card;

    for (const char of cDesc) {
      description += char;
      await sleep(10);
    }
  }

  onMount(() => {
    if (data.platform === 'client') {
      const { dialogs: Dialog, keyboards } = data;
      if (!Dialog || !keyboards) return;

      // keyboards.on('keyPress', (v) => console.log(v));
      // keyboards.on('keyHold', (v) => console.log(v));
      loadCard({
        name: 'test',
        description: 'DAYBREAK FRONTLINE／비챤 COVER [2024] ✧',
      });
    }
  });
</script>

<div id="adventure">
  <span class="description">{description}</span>
</div>

<style lang="scss">
  div#adventure {
  }
</style>
