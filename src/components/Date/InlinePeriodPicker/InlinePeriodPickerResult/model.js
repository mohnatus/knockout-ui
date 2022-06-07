import { getElementEmitter } from '@/utils/emitEvent';
import { ACTIVATE_PICKER, CLEAR_FIELD } from '@/components/Date/PeriodPicker/events';
import { applyBindingsToNode } from 'knockout';

/**
 * InlinePeriodPickerResult Component ViewModel
 * @param {InlinePeriodPickerResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {InlinePeriodPickerResultComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('i-period-picker-result');
	const emitter = getElementEmitter(element);

	const { clearable, disabled, value } = params;

	const placeholder =
		typeof params.placeholder === 'string'
			? params.placeholder
			: '00.00.0000-00.00.0000';

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
		 * @fires PeriodPicker#activate
		 */
		onClick() {
			emitter(ACTIVATE_PICKER);
		},
		/**
		 * @fires PeriodPicker#clearField
		 */
		clear() {
			value('');
			emitter(CLEAR_FIELD);
		},
	};
}
