import { applyBindingsToNode, computed, toJS } from 'knockout';
import { getElementEmitter } from '@/utils/emitEvent';
import { ACTIVATE_SELECT, REMOVE_ITEM } from '../events';

/**
 * SelectResult Component ViewModel
 * @param {SelectResultComponentParams} params
 * @param {*} element
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
		placeholder,
		multiple,
		searchable,
		query,
	} = params;

	if (multiple) element.classList.add('multiple')

	const items = computed(() => {
		const _value = toJS(selectedItems);

		console.log("result", _value)

		if (!_value) return [];
		if (Array.isArray(_value)) return _value;
		return [_value];
	});

	/**
	 * @fires Select#removeItem
	 */
	const remove = (item) => {
		emitter(REMOVE_ITEM, item.id);
	};

	applyBindingsToNode(element, {
		css: {
			active: open,
			disabled: disabled
		},
		click: (_, event) => {

			const isRemoveBtn = event.target.closest('[data-remove]');

			if (!isRemoveBtn) {
				emitter(ACTIVATE_SELECT)
			}
		}
	});

	const dispose = () => {
		items.dispose();
	};

	return {
		itemComponent,
		items,
		disabled,
		searchable,
		query,
		remove,
		dispose,
	};
}
