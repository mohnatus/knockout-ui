import { applyBindingsToNode } from "knockout";

export function ViewModel(params, element) {
  const { parent } = params;

  let parentElement = document.body;
  if (parent) {
    let el = element.closest(parent);
    if (el) parentElement = el;
  }

  applyBindingsToNode(element, {
    descendantsComplete: () => {
      parentElement.append(element);
    }
  });
  return {};
}
