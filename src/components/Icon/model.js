import { observable } from 'knockout';

export function ViewModel(params, element) {
	element.classList.add('c-icon');
	const { name, width, height } = params;

	const href = observable('');

	import(`./icons/${name}.svg`).then((module) => {
		href('#' + module.default.id);
	});

	return {
		href,
		width,
		height,
	};
}
