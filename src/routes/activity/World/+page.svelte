<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import type { CardProps, CardType } from '$lib/types/Card';
  import { Time } from '$lib';

  let {
    data,
    description = $bindable(''),
  }: { data: PageData; description: string } = $props();

  let cardInfo = $state<CardProps>();

  async function loadCard(card: CardProps) {
    const json = (await fetch('/api/storypacks', {
      method: 'POST',
      body: JSON.stringify(card),
    }).then((v) => v.json())) as CardType;

    return new Promise(async (res, rej) => {
      res('<cardData>');
      console.log(json);

      const { description: cDesc } = json;

      for (const char of cDesc) {
        description += char;
        await Time.sleep(10);
      }
    });
  }

  onMount(() => {
    if (data.platform === 'client') {
      const { dialogs: Dialog, keyboards } = data;
      if (!Dialog || !keyboards) return;
      cardInfo = { name: 'test', episode: 1 };

      // keyboards.on('keyPress', (v) => console.log(v));
      // keyboards.on('keyHold', (v) => console.log(v));
    }
  });
</script>

<div id="adventure">
  {#if cardInfo !== undefined}
    {#await loadCard(cardInfo)}
      <div>loading card Data...</div>
    {:then cardData}
      <span class:description={true}>{description}</span>
      {cardData}
    {/await}
  {:else}
    <div>no card Data</div>
  {/if}
</div>

<style lang="scss">
  div#adventure {
  }
</style>
