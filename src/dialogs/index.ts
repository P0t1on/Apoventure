import Pause from './pause/Pause.svelte';
import Inventory from './inventory/Inventory.svelte';
import { mount } from 'svelte';
import { writable, type Writable } from 'svelte/store';

let loaded = false;

const dialogs: {
  [key: string]: {
    $set?: any;
    $on?: any;
    open: Writable<boolean>;
  };
} = {};

const Dialogs = {
  async init(container: HTMLElement) {
    if (loaded) return;

    for (const [name, dialog] of [
      ['pause', Pause],
      ['inventory', Inventory],
    ]) {
      if (typeof name !== 'string' || typeof dialog === 'string') continue;

      const open = writable(false);

      dialogs[name] = {
        ...mount(dialog, {
          target: container,
          props: $state({ open }),
        }),
        open,
      };
    }

    loaded = true;
  },
  open(id: string, open: boolean) {
    const target = dialogs[id];
    if (target === undefined) return;

    target.open.set(open);
  },
} as const;

export default Dialogs;
