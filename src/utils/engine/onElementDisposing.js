import { utils } from "knockout";

export function onElementDisposing(element, cbs) {
  utils.domNodeDisposal.addDisposeCallback(element, function () {
    if (Array.isArray(cbs)) {
      cbs.forEach((cb) => {
        if (typeof cb === "function") cb();
      });
    } else {
      if (typeof cbs === "function") cbs();
    }
  });
}
