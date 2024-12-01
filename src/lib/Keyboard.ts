// Client Code

import EventEmitter from 'events';
import type TypedEventEmitter from 'typed-emitter';

const Keyboards = new EventEmitter() as TypedEventEmitter<{
  keyDown: () => void;
}>;
const { on, off, once } = Keyboards;

function init() {}

export default {
  on,
  off,
  once,
  init,
};
