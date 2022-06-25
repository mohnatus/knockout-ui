import { useDatePickerResult } from '@/components/DatePicker/hooks/useDatePickerResult';

/**
 * DatePickerResult Component ViewModel
 * @param {DatePickerResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {DatePickerResultComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-date-picker-result');
	return useDatePickerResult(params, element);
}
