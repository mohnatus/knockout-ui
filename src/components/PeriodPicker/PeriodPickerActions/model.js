import { applyBindingsToNode } from "knockout";

export function ViewModel(params, element) {
  element.classList.add("c-period-picker-actions");

  const { modal, apply, reset } = params;

  applyBindingsToNode(element, {
    css: {
      modal: modal
    }
  });

  return { modal, apply, reset };
}
