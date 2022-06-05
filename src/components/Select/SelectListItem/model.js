/**
 * SelectListItem Component ViewModel
 * @param {SelectListItemComponentParams} params
 * @param {HTMLElement} element
 * @returns  {SelectListItemComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-select-list-item')
	const { item } = params;

	const { text } = item;

	return {
		text,
	};
}
