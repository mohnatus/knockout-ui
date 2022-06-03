import { getUnique } from '@/utils/unique';

let modals = [];

/**
 * @typedef useModalHook
 * @property {number} id
 * @property {function} show
 * @property {function} hide
 */

/**
 * useModal - общий кеш модальных элементов
 * @param {string|null} bodyClassName
 * @returns {useModalHook}
 */
export function useModal(bodyClassName) {
	const id = getUnique();
	return {
		id,
		show() {
			modals.push(id);
			document.body.classList.add('modals-shown');
			if (bodyClassName) document.body.classList.add(bodyClassName);
		},
		hide() {
			modals = modals.filter((i) => i !== id);
			if (bodyClassName) document.body.classList.remove(bodyClassName);
			if (!modals.length) document.body.classList.remove('modals-shown');
		},
	};
}
