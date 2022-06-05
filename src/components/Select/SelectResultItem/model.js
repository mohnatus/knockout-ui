/**
 * SelectResultItem Component ViewModel
 * @param {SelectResultItemComponentParams} params
 * @param {HTMLElement} element
 * @returns {SelectResultItemComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-select-result-item');
	const { item } = params;

	const { text } = item;

	return {
		text,
	};
}
