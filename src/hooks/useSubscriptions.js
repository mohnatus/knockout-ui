/**
 * useSubsciptions - массив подписок
 *
 * subscribe {function} - добавление коллбэка
 * trigger {function} - вызов добавленных коллбэков
 * dispose {function}
 */

export function useSubscriptions() {
  const cbs = [];

  const subscribe = (fn) => cbs.push(fn);

  const trigger = (...params) => {
    cbs.forEach((cb) => cb(...params));
  };

  const dispose = () => {
    cbs.lenth = 0;
  };

  return { subscribe, trigger, dispose };
}
