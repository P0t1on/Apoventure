// client Code
export default function EventManagerFactory<
  M extends {
    [key: string]: (...args: any[]) => void;
  }
>() {
  const Handlers: {
    [key in keyof M]: Set<M[key]>;
  } = {} as typeof Handlers;

  function on<K extends keyof M>(event: K, listener: M[K]) {
    let handlers = Handlers[event];
    if (handlers === undefined) handlers = Handlers[event] = new Set();

    handlers.add(listener);

    return () => handlers.delete(listener);
  }

  function once<K extends keyof M>(event: K, listener: M[K]) {
    let handlers = Handlers[event];
    if (handlers === undefined) handlers = Handlers[event] = new Set();

    const wrapper = ((arg) => {
      listener(arg);
      handlers.delete(wrapper);
    }) as M[K];

    handlers.add(wrapper);

    return () => handlers.delete(wrapper);
  }

  function emit<K extends keyof M>(
    handlers: K,
    ...args: Parameters<M[K]>
  ): boolean {
    let events = Handlers[handlers];
    if (handlers === undefined) return false;

    try {
      for (const handler of events) {
        handler(...args);
      }
    } catch (error) {
      console.log(error);
      return false;
    }

    return true;
  }

  return {
    on,
    once,
    emit,
  };
}
