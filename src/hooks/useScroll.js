import { isObservable, observable, toJS } from 'knockout';

export function useYScroll(element) {
	const hasScroll = observable(false);
	const scrollPosition = observable(0);
	const onStart = observable(true);
	const onEnd = observable(false);

	const update = () => {


		if (!element) return;



		const height = element.offsetHeight;
		const scrollHeight = element.scrollHeight;
		const scroll = element.scrollTop;

		scrollPosition(scroll);
		hasScroll(height < scrollHeight);
		onStart(scroll === 0);
		onEnd(height + scroll === scrollHeight);
	};

	update();

	element.addEventListener('scroll', update);
	window.addEventListener('resize', update);

	const dispose = () => {
		window.removeEventListener('resize', update);
		element.removeEventListener('scroll', update);
	};

	return {
		hasScroll,
		onStart,
		onEnd,
		scrollPosition,

		dispose,
	};
}
