import { applyBindingsToNode } from 'knockout';

/**
 * PeriodPickerActions ViewModel
 * @param {PeriodPickerActionsParams} params
 * @param {HTMLElement} element
 * @returns {PeriodPickerActions}
 */
export function ViewModel(params, element) {
	element.classList.add('c-period-picker-actions');

	const { modal, apply, reset } = params;

	applyBindingsToNode(element, {
		css: {
			modal: modal,
		},
	});

	return { modal, apply, reset };
}
