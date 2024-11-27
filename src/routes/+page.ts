import Dialog from '../dialogs';
import type { PageLoad } from './$types';

export const load = (async () => {
  const dialogContainer = document.createElement('div');
  dialogContainer.id = 'dialogs';
  document.querySelector('body')?.appendChild(dialogContainer);
  Dialog.init(dialogContainer);

  return {};
}) satisfies PageLoad;
