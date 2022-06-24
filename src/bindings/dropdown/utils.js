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

	const { x, y, centerOffset } = position;
	const { side, align } = placement;
  const { offset = 0 } = config;
  const { x: shiftX = 0, y: shiftY = 0 } = shift;

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
		top: top != null ? `${top}px` : '',
		left: left != null ? `${left}px` : '',
		right: right != null ? `${right}px` : '',
		bottom: bottom != null ? `${bottom}px` : '',
	};

	return {
		left: x != null ? `${x}px` : '',
		top: y != null ? `${y}px` : '',
	};

	const staticSide = {
		left: 'right',
		right: 'left',
		top: 'bottom',
		bottom: 'top',
	}[side];

	let arrowSide = {
		'top-start': 'left',
		'top-end': 'right',
		'bottom-start': 'left',
		'bottom-end': 'right',
		'left-start': 'top',
		'left-end': 'bottom',
		'right-start': 'top',
		'right-end': 'bottom',
	}[`${side}-${align}`];

	if (arrowSide) {
		return {
			[staticSide]: '-5px',
			[arrowSide]: offset + 'px',
		};
	}

	return {
		left: x ? `${x}px` : '',
		top: y ? `${y}px` : '',
		right: '',
		bottom: '',
		[staticSide]: '-5px',
	};
}
