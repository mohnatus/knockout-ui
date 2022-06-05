/**
 * SelectListItem Component ViewModel
 * @param {SelectListItemComponentParams} params
 * @param {HTMLElement} element
 * @returns  {SelectListItemComponent}
 */
export function ViewModel(params, element) {
	const { item } = params;

	const { text } = item;

	return {
		text,
	};
}
