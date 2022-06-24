/**
 * @type SelectListItemFormatter
 */
const defaultFormatter = (item) => item.text;

/**
 * SelectResultItem Component ViewModel
 * @param {SelectResultItemComponentParams} params
 * @param {HTMLElement} element
 * @returns {SelectResultItemComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-select-result-item');
	const { item, formatter = defaultFormatter } = params;

	const text = formatter(item);

	return {
		text,
	};
}
