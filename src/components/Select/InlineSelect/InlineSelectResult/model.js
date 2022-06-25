import { useSelectResult } from '@/components/Select/hooks/useSelectResult';

/**
 * InlineSelectResult Component ViewModel
 * @param {SelectResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {SelectResultComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('i-select-result');
	return useSelectResult(params, element)
}
