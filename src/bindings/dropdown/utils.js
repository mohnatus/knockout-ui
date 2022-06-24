export function getPlacement(placement) {
	const [side, align = 'center'] = placement.split('-');

	return {
		side,
		align,
	};
}

export function createArrow() {
	const el = document.createElement('div');
	el.classList.add('b-dropdown-arrow');
	return el;
}

export function getArrowStyle(placement, position, config = {}, shift = {}) {
	const { x } = position;
	const { side, align } = placement;
	const { offset = 0 } = config;
	const { x: shiftX = 0 } = shift;

	let top = null,
		left = null,
		right = null,
		bottom = null;

	if (side === 'bottom') {
		top = -5;
		left = x;

		if (align === 'start') {
			left = offset - shiftX;
		}

		if (align === 'end') {
			left = null;
			right = offset + shiftX;
		}
	}

	return {
		top: top !== null ? `${top}px` : '',
		left: left !== null ? `${left}px` : '',
		right: right !== null ? `${right}px` : '',
		bottom: bottom !== null ? `${bottom}px` : '',
	};
}
