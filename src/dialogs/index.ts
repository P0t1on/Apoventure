import type { SvelteComponent } from 'svelte';
import Pause from './pause/Pause.svelte';

const Dialogs = {
  async init(container: HTMLElement) {
    const result: {
      [key: string]: SvelteComponent<
        Record<string, never>,
        {
          [evt: string]: CustomEvent<any>;
        },
        {}
      > & {
        $$bindings?: string | undefined;
      };
    } = {};

    for (const dialog of [Pause]) {
      console.log(dialog.name);

      result[dialog.name] = new dialog({
        target: container,
      });
    }
  },
  open(id: string, open: boolean) {},
} as const;

export default Dialogs;
