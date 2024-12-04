import { browser } from '$app/environment';
import { InitDialog, Keyboard } from '$lib';
import type { LayoutLoad } from './$types';

export const load = (async () => {
  if (browser) {
    const dialogContainer = document.createElement('div');
    dialogContainer.id = 'dialogs';
    document.querySelector('body')?.appendChild(dialogContainer);
    const dialogManager = await InitDialog(dialogContainer);
    await Keyboard.init();

    return { platform: 'client', dialogs: dialogManager } satisfies {
      platform: 'client';
      dialogs: typeof dialogManager;
    };
  } else {
    // serverside
    return { platform: 'server' } satisfies {
      platform: 'server';
    };
  }
}) satisfies LayoutLoad;
