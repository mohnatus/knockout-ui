/**
 * useModal - общий кеш модальных элементов
 */

import { getUnique } from "@/utils/unique";

let modals = [];

export function useModal(bodyClassName) {
  const id = getUnique();
  return {
    id,
    show() {
      modals.push(id);
      document.body.classList.add("modals-shown");
      if (bodyClassName) document.body.classList.add(bodyClassName);
    },
    hide() {
      modals = modals.filter((i) => i !== id);
      if (bodyClassName) document.body.classList.remove(bodyClassName);
      if (!modals.length) document.body.classList.remove("modals-shown");
    }
  };
}
