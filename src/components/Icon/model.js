import { observable } from 'knockout';

const cache = {};

/**
 * Icon Component ViewModel
 * @param {IconComponentParams} params
 * @param {HTMLElement} element
 * @returns {IconComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-icon');
	const { name, width, height } = params;

	const href = observable('');

	if (cache[name]) {
		href(cache[name]);
	} else {
		import(`./icons/${name}.svg`).then((module) => {
			const id = '#' + module.default.id;
			cache[name] = id;
			href(id);
		});
	}

	return {
		href,
		width,
		height,
	};
}
