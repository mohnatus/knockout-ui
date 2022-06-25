import { applyBindingsToNode } from 'knockout';

import { ACTIVATE_PICKER, CLEAR_FIELD } from '../events';
import { getElementEmitter } from '@/utils/emitEvent';

/**
 * useDatePickerResult Hook
 * @param {DatePickerResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {DatePickerResultComponent}
 */
export function useDatePickerResult(params, element) {
	const emitter = getElementEmitter(element);

	const { clearable, disabled, value, active } = params;

	const placeholder =
		typeof params.placeholder === 'string'
			? params.placeholder
			: '00.00.0000';

	applyBindingsToNode(element, {
		css: {
			active: active,
			disabled: disabled,
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
