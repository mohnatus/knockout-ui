import { applyBindingsToNode, computed, toJS } from 'knockout';

import { ACTIVATE_SELECT, REMOVE_ITEM } from '../events';
import { getElementEmitter } from '@/utils/emitEvent';

/**
 * SelectResult Component ViewModel
 * @param {SelectResultComponentParams} params
 * @param {HTMLElement} element
 * @returns {SelectResultComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-select-result');
	const emitter = getElementEmitter(element);

	const {
		itemComponent,
		selectedItems,
		open,
		disabled,
		clearable,
		placeholder,
		multiple,
		query,
		modal,
		formatter,
	} = params;

	if (multiple) element.classList.add('multiple');

	const items = computed(() => {
		const _value = toJS(selectedItems);

		if (!_value) return [];
		if (Array.isArray(_value)) return _value;
		return [_value];
	});

	const focusOnSearchField = () => {
		setTimeout(() => {
			const input = element.querySelector('input');
			if (input) input.focus();
		});
	};

	/**
	 * @fires Select#removeItem
	 */
	const remove = (item) => {
		emitter(REMOVE_ITEM, item.id);
	};

	applyBindingsToNode(element, {
		css: {
			active: open,
			disabled,
		},
		click: (_, event) => {
			const isRemoveBtn = event.target.closest('[data-remove]');

			if (!isRemoveBtn) {
				emitter(ACTIVATE_SELECT);
				focusOnSearchField();
			}
		},
	});

	const openSb = open.subscribe((v) => {
		if (v && multiple) {
			focusOnSearchField();
		}
	});

	const dispose = () => {
		items.dispose();
		openSb.dispose();
	};

	return {
		itemComponent,
		items,
		disabled,
		clearable,
		placeholder,
		query,
		formatter,
		remove,
		dispose,
	};
}
