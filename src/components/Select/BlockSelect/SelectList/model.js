import { applyBindingsToNode, computed, toJS } from 'knockout';

import { REMOVE_ITEM, SELECT_ITEM } from '../events';
import { getElementEmitter } from '@/utils/emitEvent';

/**
 * SelectList Component ViewModel
 * @param {SelectListComponentParams} params
 * @param {HTMLElement} element
 * @returns {SelectListComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-select-list');
	const emitter = getElementEmitter(element);
	const {
		itemComponent,
		items,
		selectedItems,
		disabledItems,
		modal,
		multiple,
		formatter,
	} = params;

	const selectedIds = computed(() => {
		return toJS(selectedItems).map((item) => item.id);
	});

	// checks

	const isSelectedItem = (item) => {
		return selectedIds().includes(item.id);
	};
	const isDisabledItem = (item) => {
		if (toJS(item.disabled)) return true;
		const disabledIds = toJS(disabledItems);
		if (!disabledIds) return false;
		if (Array.isArray(disabledIds)) return disabledIds.includes(item.id);
		return disabledIds === item.id;
	};

	const dispose = () => {
		selectedIds.dispose();
	};

	applyBindingsToNode(element, {
		css: {
			modal,
		},
	});

	return {
		itemComponent,
		items,
		selectedIds,
		formatter,

		multiple,

		isSelectedItem,
		isDisabledItem,

		select(item) {
			if (isDisabledItem(item)) return;

			if (isSelectedItem(item)) {
				if (modal()) {
					emitter(REMOVE_ITEM, item.id);
				}
				return;
			}

			emitter(SELECT_ITEM, item.id);
		},

		modal,

		dispose,
	};
}
