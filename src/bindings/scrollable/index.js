import { applyBindingsToNode, isObservable } from 'knockout';
import PerfectScrollbar from 'perfect-scrollbar';

import { useYScroll } from '../../hooks/useScroll';

import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './style.less';

function init(element, valueAccessor) {
	element.classList.add('b-scrollable');
	element.classList.add('ps--focus');
	const ps = new PerfectScrollbar(element, {
		scrollYMarginOffset: 10,
	});

	const observer = new MutationObserver(() => {
		ps.update();
	});
	observer.observe(element, {
		childList: true,
		subtree: true,
	});

	window.addEventListener('resize', () => {
		ps.update();
	});


	const { scrollPosition, onStart, onEnd, hasScroll } = useYScroll(element);

	applyBindingsToNode(element, {
		css: {
			'y-scroll': hasScroll,
			'y-start': onStart,
			'y-end': onEnd,
		},
	});
}

export { init };
