import PerfectScrollbar from 'perfect-scrollbar';
import { applyBindingsToNode } from 'knockout';

import { useYScroll } from '../../hooks/useScroll';

import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './style.less';

function init(element) {
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


	const { onStart, onEnd, hasScroll } = useYScroll(element);

	applyBindingsToNode(element, {
		css: {
			'y-scroll': hasScroll,
			'y-start': onStart,
			'y-end': onEnd,
		},
	});
}

export { init };
