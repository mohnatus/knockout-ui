/**
 * useClickOutside - обработка кликов вне элементов
 *
 * addElements {function}
 * dispose {function}
 */

export function useClickOutside(elements, callback) {
  let targets = [];

  function addElements(elements) {
    let newElements = Array.isArray(elements) ? elements : [elements];
    targets = [
      ...targets,
      ...newElements.filter((el) => el instanceof HTMLElement)
    ];
  }

  function contains(element, target) {
    if (!element || !target) return false;
    if ("contains" in element) {
      return element.contains(target);
    }
    return false;
  }

  addElements(elements);

  const listener = (event) => {
    const eventTarget = event.target;
    if (!targets.some((element) => contains(element, eventTarget))) {
      if (typeof callback === "function") callback(event);
    }
  };
  document.addEventListener("click", listener);

  return {
    addElements,
    dispose() {
      document.removeEventListener("click", listener);
    }
  };
}
