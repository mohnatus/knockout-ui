import { getElementEmitter } from '@/utils/emitEvent';
import { ACTIVATE_PICKER, CLEAR_FIELD } from '@/components/Date/DatePicker/events';
import { applyBindingsToNode } from 'knockout';

/**
 * InlineDatePickerResult Component ViewModel
 * @param {InlineDatePickerResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {InlineDatePickerResultComponent}
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
