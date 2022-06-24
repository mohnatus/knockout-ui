/**
 * b-auto-input
 * Поле ввода с изменяющейся шириной
 */

import { applyBindingsToNode, isObservable, toJS } from 'knockout';

import { onElementDisposing } from '@/utils/engine/onElementDisposing';
import { triggerEvent } from '@/utils/emitEvent';

import { dispose, init as initPlugin } from './plugin';

/**
 * @typedef {Object} autoInputBindings
 * @param {observable<string>} placeholder
 */

/**
 * autoInput binding
 * @param {HTMLElement} element
 * @param {autoInputBindings} allBindings
 */
const init = function (element, valueAccessor, allBindings) {
	const onDispose = [];

	if (allBindings.has('placeholder')) {
		element.placeholder = toJS(allBindings.get('placeholder'));
	}

	setTimeout(() => {
		initPlugin(element, { space: 5 });
		element.classList.add('b-auto-input');
		onDispose.push(() => dispose(element));
	});

	onElementDisposing(element, onDispose);
};

const update = (element, valueAccessor, allBindings) => {
	if (allBindings.has('placeholder')) {
		element.placeholder = toJS(allBindings.get('placeholder'));
	}
	setTimeout(() => {
		triggerEvent(element, 'input');
	});
};

export { init, update };
