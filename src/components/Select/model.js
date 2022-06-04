import { computed, observable, toJS } from 'knockout';
import {
	SelectListComponent,
	SelectListItemComponent,
	SelectResultComponent,
	SelectResultItemComponent,
} from './component';
import { REMOVE_ITEM, SELECT_ITEM } from './events';

/**
 * Select Component ViewModel
 * @param {SelectComponentParams} params
 * @param {HTMLElement} element
 * @returns {SelectComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-select');

	const {
		value,
		list,
		multiple,
		disabled,
		disabledItems,
		listComponentName,
		listItemComponentName,
		resultComponentName,
		resultItemComponentName,
		dropdownParams,
	} = params;
	const { items, filteredItems } = list;
	const { selected, select, remove } = value;

	const showList = observable(false);

	const selectedItems = computed(() => {
		const _selected = toJS(selected);

		if (_selected) return [];
		if (multiple && !_selected.length) return [];

		const _items = toJS(items);

		return _items.filter(({ id }) => {
			if (multiple) return _selected.includes(id);
			return _selected === id;
		});
	});

	const resultEvents = {
		[REMOVE_ITEM]: (id) => remove(id),
	};

	const listEvents = {
		[SELECT_ITEM]: (id) => select(id),
	};

	const modal = observable(false);
	const modalDispose = useMediaQuery(ONLY_SMALL_MOBILE_MQ, (match) => {
		modal(match);
	});

	const dispose = () => {
		selectedItems.dispose();
		modalDispose();
	};

	return {
		_id: 'c-select-' + getUnique(),

		filteredItems,
		selectedItems,
		disabledItems,

		resultComponent: resultComponentName || SelectResultComponent,
		resultItemComponent:
			resultItemComponentName || SelectResultItemComponent,
		listComponent: listComponentName || SelectListComponent,
		listItemComponent: listItemComponentName || SelectListItemComponent,

		resultEvents,
		listEvents,

		modal,
		showList,
		dropdownParams: {
			flip: false,
			...dropdownParams,
		},

		dispose,
	};
}
