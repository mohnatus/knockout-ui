import { useClickOutside } from '@/hooks/useClickOutside';
import { useModal } from '@/hooks/useModal';
import { getElementEmitter } from '@/utils/emitEvent';
import { isObservable } from 'knockout';
import { HIDE_DROPDOWN, SHOW_DROPDOWN } from './events';

/**
 * Dropdown Component ViewModel
 * @param {DropdownComponentParams} params
 * @param {HTMLElemen} element
 * @returns {DropdownComponent} dropdown component
 */
export function ViewModel(params, element) {
	const emitter = getElementEmitter(element);

	const { parent, target, open, dropdownParams, modal, className } = params;
	const $target = document.getElementById(target);

	const { show, hide } = useModal();

	console.log('component', { dropdownParams })

	const modalSb = isObservable(modal) && modal.subscribe((v) => {
		open(false);
	});

	const openSb = isObservable(open) && open.subscribe((v) => {
		if (v) {
			if (modal()) {
				show();
				emitter(SHOW_DROPDOWN);
			}
		} else {
			hide();
			emitter(HIDE_DROPDOWN);
		}
	});

	const { addElements, dispose: disposeClickOutside } = useClickOutside(
		[],
		() => {
			open(false);
		}
	);

	return {
		params: {
			arrow: { offset: 15 },
			...dropdownParams,
		},
		className,
		parent,
		target,
		open,
		modal,
		onRender(el) {
			addElements([el, $target]);
		},
		dispose() {
			modalSb && modalSb.dispose();
			openSb && openSb.dispose();
			disposeClickOutside();
		},
	};
}
