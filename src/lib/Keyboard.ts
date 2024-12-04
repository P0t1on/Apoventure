// Client Code

import { createEventEmitter } from '$lib';

export default async function InitKeyboardEvents() {
  const Keyboards = createEventEmitter<{
    keyDown: () => void;
    keyUp: () => void;
    keyPress: () => void;
  }>();
}
