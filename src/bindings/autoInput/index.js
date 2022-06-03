/**
 * b-auto-input
 * Поле ввода с изменяющейся шириной
 */

import { isObservable } from "knockout";
import { triggerEvent } from "@/utils/emitEvent";
import { onElementDisposing } from "@/utils/engine/onElementDisposing";
import { init as initPlugin, dispose } from "./plugin";

/**
 * @typedef {Object} autoInputBindings
 * @property {observable<string>} textInput
 * @property {observable<string>} value
 */

/**
 * autoInput binding
 * @param {HTMLElement} element
 * @param {autoInputBindings} allBindings
 */
const init = function (element, valueAccessor, allBindings) {
  const onDispose = [];

  const textInput = allBindings.get("textInput");
  const value = allBindings.get("value");

  [textInput, value].forEach((f) => {
    if (isObservable(f)) {
      const sb = f.subscribe((v) => {
        setTimeout(() => {
          triggerEvent(element, "input");
        });
      });
      onDispose.push(() => sb.dispose());
    }
  });

  setTimeout(() => {
    initPlugin(element, { space: 5 });
    element.classList.add("b-auto-input");
    onDispose.push(() => dispose(element));
  });

  onElementDisposing(element, onDispose);
};

export { init };
