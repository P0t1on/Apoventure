import { browser } from '$app/environment';
import { createDialogManager, createKeyboardDispatcher } from '$lib';
import type { LayoutLoad } from './$types';

export const load = (async () => {
  if (browser) {
    const dialogContainer = document.createElement('div');
    dialogContainer.id = 'dialogs';
    document.querySelector('body')?.appendChild(dialogContainer);
    const dialogManager = await createDialogManager(dialogContainer);
    const keyboardManager = await createKeyboardDispatcher();

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
