// client Code
function EventManagerFactory<
  M extends {
    [key: string]: (...args: any[]) => void;
  }
>() {
  const Events: {
    [key in keyof M]: Set<M[key]>;
  } = {} as typeof Events;

  function on<K extends keyof M>(event: K, listener: M[K]) {
    let events = Events[event];
    if (events === undefined) events = Events[event] = new Set();

    events.add(listener);

    return () => events.delete(listener);
  }

  function once<K extends keyof M>(event: K, listener: M[K]) {
    let events = Events[event];
    if (events === undefined) events = Events[event] = new Set();

    const wrapper = ((arg) => {
      listener(arg);
      events.delete(wrapper);
    }) as M[K];

    events.add(wrapper);

    return () => events.delete(wrapper);
  }

  function emit<K extends keyof M>(event: K, ...args: Parameters<M[K]>) {}

  return {
    on,
    once,
    emit,
  };
}
