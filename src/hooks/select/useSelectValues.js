import { observableArray } from 'knockout';
import { useSubscriptions } from '@/hooks/useSubscriptions';

/**
 * useSelectValues
 * @param {string[]|number[]|null} initialValue
 * @returns {SelectValue}
 */
export function useSelectValues(initialValue = []) {
	const selectSubscriptions = useSubscriptions();
	const removeSubscriptions = useSubscriptions();

	const selected = observableArray(initialValue);

	const select = (id) => {
		if (!selected().includes(id)) {
      selected.push(id);
      selectSubscriptions.trigger();
    }
	};

	const remove = (id) => {
		selected.remove(id);
    selectSubscriptions.trigger();
	};

	return {
		selected,

		select,
		remove,

		onSelect(cb) {
			selectSubscriptions.subscribe(cb);
		},
		onRemove(cb) {
			removeSubscriptions.subscribe(cb);
		},
	};
}
