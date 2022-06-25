
import { useDatePickerResult } from '@/components/DatePicker/hooks/useDatePickerResult';

/**
 * InlineDatePickerResult Component ViewModel
 * @param {DatePickerResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {DatePickerResultComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('i-date-picker-result');

	return useDatePickerResult(params, element)
}
