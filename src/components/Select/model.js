import { computed, observable, toJS } from 'knockout';
import {
	SelectListComponent,
	SelectListItemComponent,
	SelectResultComponent,
	SelectResultItemComponent,
} from './components';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ONLY_SMALL_MOBILE_MQ } from '@/constants/browser/breakpoints';
import { getUnique } from '@/utils/unique';
import { ACTIVATE_SELECT, REMOVE_ITEM, SELECT_ITEM } from './events';

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
		searchable,
		placeholder,
		disabledItems,
		listComponentName,
		listItemComponentName,
		resultComponentName,
		resultItemComponentName,
		dropdownParams,
	} = params;
	const { items, filteredItems, query } = list;
	const { selected, select, remove } = value;

	const showList = observable(false);

	const selectedItems = computed(() => {
		const _selected = toJS(selected);

		if (!_selected) return [];

		if (!multiple) {
			const item = items().find((item) => item.id === _selected);
			if (item) return [item];
			return [];
		}

		if (multiple && !_selected.length) return [];

		const _items = toJS(items);

		return _items.filter(({ id }) => {
			if (multiple) return _selected.includes(id);
			return _selected === id;
		});
	});

	const resultEvents = {
		[ACTIVATE_SELECT]: () => {
			showList(true);
		},
		[REMOVE_ITEM]: (_, event) => remove(event.details),
	};

	const listEvents = {
		[SELECT_ITEM]: (_, event) => {
			query('');
			select(event.details);

			if (!multiple) showList(false);
		},
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
		placeholder,
		multiple,
		disabled,
		searchable,
		query,

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
			width: 'equal',
			...dropdownParams,
		},

		dispose,
	};
}
