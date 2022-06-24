import { observableArray } from 'knockout';
import { useSubscriptions } from '@/hooks/useSubscriptions';

/**
 * useSelectValues Hook
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
      selectSubscriptions.trigger(id);
    }
	};

	const remove = (id) => {
		selected.remove(id);
    removeSubscriptions.trigger(id);
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
