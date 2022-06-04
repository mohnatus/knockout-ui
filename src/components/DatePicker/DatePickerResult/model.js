import { getElementEmitter } from '@/utils/emitEvent';
import { applyBindingsToNode } from 'knockout';
import { ACTIVATE_PICKER, CLEAR_FIELD } from '../events';

/**
 * DatePickerResult Component ViewModel
 * @param {DatePickerResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {DatePickerResultComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-date-picker-result');
	const emitter = getElementEmitter(element);

	const { clearable, disabled, value, active } = params;

	const placeholder =
		typeof params.placeholder === 'string'
			? params.placeholder
			: '00.00.0000';

	applyBindingsToNode(element, {
		css: {
			active: active,
		},
	});

	return {
		value,
		clearable,
		disabled,
		placeholder,

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
