/**
 * useMediaQuery - подписка на медиа-запрос
 */

const cache = {};

export function useMediaQuery(query, cb) {
  if (cache[query]) {
    const { mql, callbacks } = cache[query];
    callbacks.push(cb);
    cb(!!mql.matches);
    return;
  }

  const mql = matchMedia(query);
  cache[query] = {
    mql,
    callbacks: [cb]
  };

  function handleChange(mql) {
    const { callbacks } = cache[query];
    callbacks.forEach((cb) => cb(!!mql.matches));
  }

  handleChange(mql);

  mql.addEventListener("change", handleChange);

  return () => {
    cache[query].callbacks = cache[query].callbacks.filter((fn) => fn !== cb);
    if (!cache[query].callbacks.length) {
      mql.removeEventListener("change", handleChange);
      delete cache[query];
    }
  };
}
