import { applyBindingsToNode, computed, toJS } from 'knockout';

/**
 * FormField Component ViewModel
 * @param {FormFieldComponentParams} params
 * @param {HTMLElement} element
 * @returns {FormFieldComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-form-field');

	const { state = {} } = params;

	const isValid = computed(() => {
		return toJS(state.isValid);
	});

	const isInvalid = computed(() => {
		return toJS(state.isInvalid);
	});

	const error = computed(() => {
		if (!isInvalid()) return '';
		return toJS(state.error);
	});

	applyBindingsToNode(element, {
		css: {
			invalid: isInvalid,
			valid: isValid,
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
