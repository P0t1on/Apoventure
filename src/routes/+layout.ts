import Dialog from '../dialogs';
import EventEmitter from 'events';
import type TypedEmitter from 'typed-emitter';
import type { LayoutLoad } from './$types';

export const load = (async () => {
  const dialogContainer = document.createElement('div');
  dialogContainer.id = 'dialogs';
  document.querySelector('body')?.appendChild(dialogContainer);
  Dialog.init(dialogContainer);

  return { va: 1 };
}) satisfies LayoutLoad;
