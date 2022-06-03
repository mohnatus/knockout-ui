import { applyBindingsToNode, computed, observable } from "knockout";

/**
 * PeriodPickerField ViewModel
 * @param {PeriodPickerFieldParams} params
 * @param {HTMLElement} element
 * @returns {PeriodPickerField}
 */
export function ViewModel(params, element) {
  element.classList.add("c-period-picker-field");

  const { inputValue, isValid } = params;
  const focused = observable(false);

  const invalid = computed(() => !isValid())

  applyBindingsToNode(element, {
    css: {
      focused,
      invalid
    }
  })

  return {
    inputValue,
    focused,

    dispose() {
      invalid.dispose();
    }
  };
}
