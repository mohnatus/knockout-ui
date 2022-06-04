import { observable } from 'knockout';
import { useSubscriptions } from '@/hooks/useSubscriptions';

/**
 * useSelectValue
 * @param {string|number} initialValue
 * @returns {SelectValue}
 */
export function useSelectValue(initialValue) {
	const selectSubscriptions = useSubscriptions();
	const removeSubscriptions = useSubscriptions();

	const selected = observable(initialValue);

	const select = (id) => {
		selected(id);
		selectSubscriptions.trigger(id);
	};

	const remove = (id) => {
		if (selected() === id) {
			selected(null);
			removeSubscriptions.trigger(id);
		}
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
