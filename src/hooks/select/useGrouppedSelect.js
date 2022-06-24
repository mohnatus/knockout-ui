import { observableArray } from 'knockout';

export function useGrouppedSelect(list, value) {
	const disabledOptions = observableArray([]);

	function getChildren(itemId) {
		const children = [];

		const items = list.items();
		const itemIndex = items.findIndex((i) => i.id === itemId);
		if (itemIndex === -1) return children;

		const item = items[itemIndex];
		const { level = 0 } = item;

		let currentIndex = itemIndex + 1;
		while (true) {
			const currentItem = items[currentIndex];
			if (!currentItem) break;
			const currentLevel = currentItem.level;
			if (!currentLevel) break;
			if (currentLevel <= level) break;
			children.push(currentItem.id);
			currentIndex++;
		}

		console.log({ items, itemId, children });

		return children;
	}

	value.onSelect((v) => {
		const children = getChildren(v);
    children.forEach(id => value.remove(id))
		disabledOptions([
      ...disabledOptions(),
      ...children
    ]);
	});

	value.onRemove((v) => {
		const children = getChildren(v);
		const disabled = disabledOptions().filter((id) => {
			return !children.includes(id);
		});
		disabledOptions(disabled);
	});

	return {
		disabledOptions,
	};
}
