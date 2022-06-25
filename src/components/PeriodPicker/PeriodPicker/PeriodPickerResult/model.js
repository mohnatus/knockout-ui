import { usePeriodPickerResult } from '@/components/PeriodPicker/hooks/usePeriodPickerResult';

/**
 * PeriodPickerResult Component ViewModel
 * @param {PeriodPickerResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {PeriodPickerResultComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-date-picker-result');
	return usePeriodPickerResult(params, element);
}
