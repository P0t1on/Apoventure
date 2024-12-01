import { Dialog } from '$lib';
import EventEmitter from 'events';
import { browser } from '$app/environment';
import type TypedEmitter from 'typed-emitter';
import type { LayoutLoad } from './$types';

export const load = (async () => {
  if (browser) {
    const dialogContainer = document.createElement('div');
    dialogContainer.id = 'dialogs';
    document.querySelector('body')?.appendChild(dialogContainer);
    Dialog.init(dialogContainer);

    return { root: { platform: 'client' } };
  } else {
    // serverside
    return { root: { platform: 'server' } };
  }
}) satisfies LayoutLoad;
