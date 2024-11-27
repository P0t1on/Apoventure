import Pause from './pause/Pause.svelte';
import Inventory from './inventory/Inventory.svelte';
import { mount } from 'svelte';

const dialogs: {
  [key: string]: {
    $set?: any;
    $on?: any;
  };
} = {};

const Dialogs = {
  async init(container: HTMLElement) {
    for (const [name, dialog] of [
      ['pause', Pause],
      ['inventory', Inventory],
    ]) {
      if (typeof name !== 'string' || typeof dialog === 'string') continue;

      dialogs[name] = mount(dialog, { target: container });
    }
  },
  open(id: string, open: boolean) {},
} as const;

export default Dialogs;
