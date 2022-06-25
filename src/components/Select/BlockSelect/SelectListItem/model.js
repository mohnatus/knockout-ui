/**
 * @type SelectListItemFormatter
 */
const defaultFormatter = (item) => item.text;

/**
 * SelectListItem Component ViewModel
 * @param {SelectListItemComponentParams} params
 * @param {HTMLElement} element
 * @returns  {SelectListItemComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-select-list-item');
	const { item, formatter = defaultFormatter } = params;

	const text = formatter(item);

	return {
		text,
	};
}
