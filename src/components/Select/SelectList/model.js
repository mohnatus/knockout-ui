import { computed, toJS } from 'knockout';
import { getElementEmitter } from '@/utils/emitEvent';
import { SELECT_ITEM } from '../events';

/**
 * SelectList Component ViewModel
 * @param {SelectListComponentParams} params
 * @param {HTMLElement} element
 * @returns {SelectListComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-select-list');
	const emitter = getElementEmitter(element);
	const { itemComponent, items, selectedItems, disabledItems } = params;

	const selectedIds = computed(() => {
		console.log(toJS(selectedItems));
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
			if (Array.isArray(disabledIds))
				return disabledIds.includes(item.id);
			return disabledIds === item.id;
		};

	const dispose = () => {
		selectedIds.dispose();
	};

	return {
		itemComponent,
		items,

		isSelectedItem,
		isDisabledItem,

		select(item) {
			if (isSelectedItem(item)) return;
			if (isDisabledItem(item)) return;
			emitter(SELECT_ITEM, item.id);
		},

		dispose,
	};
}
