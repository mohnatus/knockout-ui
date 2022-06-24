import { computed, observable, observableArray } from 'knockout';

const defaultConvertor = (item) => item;

const defaultSearchFn = (item, query) => {
	return item.text.includes(query);
};

/**
 * useList Hook
 * @param {Array} initialList
 * @param {ListItemConvertor|null} itemConvertor
 * @param {function|null} searchFn
 * @returns {useListHook}
 */
export function useList(
	initialList,
	itemConvertor = defaultConvertor,
	searchFn = defaultSearchFn
) {
	const loading = observable(false);
	const items = observableArray([]);

	const query = observable('');
	const normalizedQuery = computed(() => {
		return query().trim().toLowerCase();
	});
	const filteredItems = computed(() => {
		const q = normalizedQuery();
		return items().filter((item) => searchFn(item, q));
	});

	const getById = (id) => {
		return items().find((item) => item.id === id);
	};

	const load = () => {
		if (typeof initialList === 'function') {
			loading(true);
			initialList().then((data) => {
				items(data.map(itemConvertor));
				loading(false);
			});
		}
	};

	const update = () => {
		load();
	};

	if (Array.isArray(initialList)) {
		items(initialList.map(itemConvertor));
	} else if (typeof initialList === 'function') {
		load();
	}

	return {
		loading,
		items,
		query,
		filteredItems,
		update,
		getById,
	};
}
