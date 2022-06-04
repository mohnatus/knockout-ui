/**
 * PeriodPickerControl Component ViewModel
 * @param {PeriodPickerControlComponentParams} params
 * @param {HTMLElement} element
 * @returns {PeriodPickerControlComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-period-picker-control');

	const { monthName, toPrevMonth, toNextMonth } = params;

	return {
		monthName,
		toPrevMonth,
		toNextMonth,
	};
}
