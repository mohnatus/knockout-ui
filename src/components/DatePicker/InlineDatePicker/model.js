import { registerComponents } from '@/utils/engine/registerComponent';

import * as DatePicker from '@/components/DatePicker/DatePicker';
import * as InlineDatePickerResult from './InlineDatePickerResult';

registerComponents({
	'i-date-picker-origin': DatePicker,
	'i-date-picker-result': InlineDatePickerResult,
});

/**
 * InlineDatePicker Component ViewModel
 * @param {DatePickerComponentParams} params
 * @param {HTMLElement} element
 * @returns {InlineDatePickerComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('i-date-picker');
	return {
		originComponent: 'i-date-picker-origin',
		componentParams: {
			resultComponentName: 'i-date-picker-result',
			dropdownParams: {
				placement: 'bottom-start',
				arrow: { offset: 15 },
			},
			...params,
		},
	};
}
