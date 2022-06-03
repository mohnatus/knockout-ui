/**
 * PeriodPickerField ViewModel
 * @param {PeriodPickerFieldParams} params
 * @param {HTMLElement} element
 * @returns {PeriodPickerField}
 */
export function ViewModel(params, element) {
  element.classList.add("c-period-picker-field");

  const { inputValue } = params;

  return {
    inputValue
  };
}
