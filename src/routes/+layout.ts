import { browser } from '$app/environment';
import { InitDialog, InitKeyboard } from '$lib';
import type { LayoutLoad } from './$types';

export const load = (async () => {
  if (browser) {
    const dialogContainer = document.createElement('div');
    dialogContainer.id = 'dialogs';
    document.querySelector('body')?.appendChild(dialogContainer);
    const dialogManager = await InitDialog(dialogContainer);
    const keyboardManager = await InitKeyboard();

    return {
      platform: 'client',
      dialogs: dialogManager,
      keyboards: keyboardManager,
    } satisfies {
      platform: 'client';
      dialogs: typeof dialogManager;
      keyboards: typeof keyboardManager;
    };
  } else {
    // serverside
    return { platform: 'server' } satisfies {
      platform: 'server';
    };
  }
}) satisfies LayoutLoad;
