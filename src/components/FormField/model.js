import { applyBindingsToNode, computed, toJS } from 'knockout';

/**
 * FormField ViewModel
 * @param {FormFieldParams} params
 * @param {HTMLElement} element
 * @returns {FormField}
 */
export function ViewModel(params, element) {
	element.classList.add('c-form-field');

	const { state = {} } = params;

	const isInvalid = computed(() => {
		return !toJS(state.isValid);
	});

	const error = computed(() => {
		if (!isInvalid()) return '';
		return toJS(state.error);
	});

	applyBindingsToNode(element, {
		css: {
			invalid: isInvalid,
		},
	});

	return {
		error,
		dispose() {
			isInvalid.dispose();
      error.dispose();
		},
	};
}
