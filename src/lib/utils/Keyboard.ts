// Client Code

import { createEventEmitter } from '$lib';

export default async function InitKeyboardEvents(updateTick: number = 50) {
  const emitter = createEventEmitter<{
    keyHold: (keys: Set<string>) => void;
    keyUp: (key: string) => void;
    keyPress: (key: string) => void;
  }>();

  const downKey = new Set<string>();

  window.onkeydown = (e) => {
    if (!downKey.has(e.key)) {
      downKey.add(e.key);
      emitter.emit('keyPress', e.key);
    }
  };

  window.onkeyup = (e) => {
    downKey.delete(e.key);
    emitter.emit('keyUp', e.key);
  };

  const updater = setInterval(() => {
    if (downKey.size > 0) emitter.emit('keyHold', downKey);
  }, updateTick);

  const { on, once, emit } = emitter;

  return {
    on,
    once,
    emit,
    destroy() {
      clearInterval(updater);
      emitter.destroy();
    },
  };
}
