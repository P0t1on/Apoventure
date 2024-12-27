// Client Code
import Inventory from './inventory/Inventory.svelte';
import { mount } from 'svelte';
import { writable, type Writable } from 'svelte/store';

type dialogNames = 'pause' | 'inventory';
type DialogManager = {
  readonly open: (id: dialogNames, open?: boolean) => void;
};

// Dialog Manager Factory
export default async function (container: HTMLElement): Promise<DialogManager> {
  const dialogs: {
    [key: string]: {
      $set?: any;
      $on?: any;
      open: Writable<boolean>;
    };
  } = {};

  for (const [name, dialog] of [['inventory', Inventory]]) {
    if (typeof name !== 'string' || typeof dialog === 'string') continue;

    const open = writable(false);

    dialogs[name] = {
      ...mount(dialog, {
        target: container,
        props: { open },
      }),
      open,
    };
  }

  return {
    open(id: dialogNames, open?: boolean) {
      const target = dialogs[id];
      if (target === undefined) return;

      if (open === undefined) target.open.update((v) => !v);
      else target.open.set(open);
    },
  } as const;
}
