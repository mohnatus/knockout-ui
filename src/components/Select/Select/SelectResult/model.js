import { useSelectResult } from '@/components/Select/hooks/useSelectResult';


/**
 * SelectResult Component ViewModel
 * @param {SelectResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {SelectResultComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-select-result');

	return useSelectResult(params, element);
}
