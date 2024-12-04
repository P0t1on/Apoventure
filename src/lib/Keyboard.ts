// Client Code

import EventEmitter from 'events';
import type TypedEventEmitter from 'typed-emitter';

const Keyboards = new EventEmitter() as TypedEventEmitter<{
  keyDown: () => void;
  keyUp: () => void;
  keyPress: () => void;
}>;
const { on, off, once } = Keyboards;
async function init() {}

export default {
  on,
  off,
  once,
  init,
};
