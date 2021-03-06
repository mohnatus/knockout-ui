import { applyBindingsToNode } from 'knockout';

import { ACTIVATE_PICKER, CLEAR_FIELD } from '../events';
import { getElementEmitter } from '@/utils/emitEvent';

/**
 * usePeriodPickerResult Hook
 * @param {PeriodPickerResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {PeriodPickerResultComponent}
 */
export function usePeriodPickerResult(params, element) {
	const emitter = getElementEmitter(element);

	const { clearable, disabled, value, active } = params;

	const placeholder =
		typeof params.placeholder === 'string'
			? params.placeholder
			: '00.00.0000-00.00.0000';

	applyBindingsToNode(element, {
		css: {
			active,
			disabled,
		},
	});

	return {
		clearable,
		disabled,
		placeholder,
		value,

		/**
		 * @fires PeriodPicker#activate
		 */
		onClick() {
			emitter(ACTIVATE_PICKER);
		},
		/**
		 * @fires PeriodPicker#activate
		 */
		clear() {
			value('');
			emitter(CLEAR_FIELD);
		},
	};
}
