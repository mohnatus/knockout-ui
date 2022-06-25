import { applyBindingsToNode } from 'knockout';

import { ACTIVATE_PICKER, CLEAR_FIELD } from '@/components/Date/DatePicker/events';
import { getElementEmitter } from '@/utils/emitEvent';

/**
 * InlineDatePickerResult Component ViewModel
 * @param {DatePickerResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {DatePickerResultComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('i-date-picker-result');
	const emitter = getElementEmitter(element);
	const { clearable, disabled, value } = params;
	const placeholder =
		typeof params.placeholder === 'string'
			? params.placeholder
			: '00.00.0000';

	applyBindingsToNode(element, {
		css: {
			disabled,
		},
	});

	return {
		clearable,
		disabled,
		placeholder,
		value,

		/**
		 * @fires DatePicker#activate
		 */
		onClick() {
			emitter(ACTIVATE_PICKER);
		},

		/**
		 * @fires DatePicker#clearField
		 */
		clear() {
			value('');
			emitter(CLEAR_FIELD);
		},
	};
}
