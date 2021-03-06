import { applyBindingsToNode, computed, observable, toJS } from 'knockout';

import { ACTIVATE_SELECT, REMOVE_ITEM, SELECT_ITEM } from '@/components/Select/events';
import {
	SelectListComponent,
	SelectListItemComponent,
	SelectResultComponent,
	SelectResultItemComponent,
} from './components';
import { ONLY_SMALL_MOBILE_MQ } from '@/constants/browser/breakpoints';
import { getUnique } from '@/utils/unique';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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
		itemFormatter,
		resultFormatter,
		searchable,
		clearable,
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
	const savedValue = observable(toJS(selected));

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

	const modal = observable(false);
	const modalDispose = useMediaQuery(ONLY_SMALL_MOBILE_MQ, (match) => {
		modal(match);
	});

	const selectedSb = selected.subscribe((v) => {
		if (!modal()) savedValue(v);
	});

	const showListSearch = computed(() => {
		return searchable || toJS(items).length > 10;
	});

	const showListSb = showList.subscribe((v) => {
		if (v) {
			if (modal()) {
				savedValue(toJS(selected));
			}
		} else {
			if (modal()) {
				selected(savedValue());
			}
		}

		query('');
	});

	const reset = () => {
		showList(false);
	};

	const apply = () => {
		savedValue(toJS(selected));
		showList(false);
	};

	const resultEvents = {
		[ACTIVATE_SELECT]: () => {
			if (toJS(disabled)) return;
			showList(true);
		},
		[REMOVE_ITEM]: (_, event) => remove(event.details),
	};

	const listEvents = {
		[SELECT_ITEM]: (_, event) => {
			select(event.details);

			if (modal()) return;

			query('');
			if (!multiple) showList(false);
		},
		[REMOVE_ITEM]: (_, event) => remove(event.details),
	};

	const dispose = () => {
		selectedSb.dispose();
		selectedItems.dispose();
		modalDispose();
		showListSb.dispose();
	};

	applyBindingsToNode(element, {
		css: {
			disabled,
		},
	});

	return {
		_id: 'c-select-' + getUnique(),

		filteredItems,
		selectedItems,
		disabledItems,
		placeholder,
		multiple,
		disabled,
		query,
		clearable,

		itemFormatter,
		resultFormatter,

		reset,
		apply,

		resultComponent: resultComponentName || SelectResultComponent,
		resultItemComponent:
			resultItemComponentName || SelectResultItemComponent,
		listComponent: listComponentName || SelectListComponent,
		listItemComponent: listItemComponentName || SelectListItemComponent,

		resultEvents,
		listEvents,

		modal,
		showList,
		showListSearch,
		dropdownParams: {
			flip: false,
			width: 'equal',
			...dropdownParams,
		},

		dispose,
	};
}
