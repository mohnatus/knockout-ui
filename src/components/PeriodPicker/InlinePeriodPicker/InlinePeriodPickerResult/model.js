import { usePeriodPickerResult } from '@/components/PeriodPicker/hooks/usePeriodPickerResult';

/**
 * InlinePeriodPickerResult Component ViewModel
 * @param {PeriodPickerResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {PeriodPickerResultComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('i-period-picker-result');
	return usePeriodPickerResult(params, element)
}
