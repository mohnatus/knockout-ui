
/**
 * PeriodPickerControl ViewModel
 * @param {PeriodPickerControlParams} params
 * @param {HTMLElement} element
 * @returns {PeriodPickerControl}
 */
export function ViewModel(params, element) {
  element.classList.add("c-period-picker-control");

  const { monthName, toPrevMonth, toNextMonth } = params;

  return {
    monthName,
    toPrevMonth,
    toNextMonth
  };
}
