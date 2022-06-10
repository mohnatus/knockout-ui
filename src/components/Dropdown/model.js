import { useClickOutside } from '@/hooks/useClickOutside';
import { useModal } from '@/hooks/useModal';
import { getElementEmitter } from '@/utils/emitEvent';
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

	const modalSb = modal.subscribe((v) => {
		open(false);
	});

	const openSb = open.subscribe((v) => {
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
			modalSb.dispose();
			openSb.dispose();
			disposeClickOutside();
		},
	};
}
