// place files you want to import through the `$lib` alias in this folder.
// client utils
import InitDialog from './dialogs';
import InitKeyboard from './Keyboard';
import createEventEmitter from './Event';

export async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export { InitDialog, InitKeyboard, createEventEmitter };
