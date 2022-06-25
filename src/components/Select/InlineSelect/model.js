import { registerComponents } from '@/utils/engine/registerComponent';

import * as BlockSelect from '@/components/Select/BlockSelect';
import * as InlineSelectResult from './InlineSelectResult';

registerComponents({
	'i-select-origin': BlockSelect,
	'i-select-result': InlineSelectResult,
});

/**
 * InlineSelectResult Component ViewModel
 * @param {InlineSelectComponentParams} params
 * @param {HTMLElement} element
 * @returns {InlineSelectComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('i-select');
	return {
		originComponent: 'i-select-origin',
		componentParams: {
			resultComponentName: 'i-select-result',
			dropdownParams: {
				placement: 'bottom-start',
				arrow: { offset: 15 },
        minWidth: '250px',
			},
			...params,
		},
	};
}
