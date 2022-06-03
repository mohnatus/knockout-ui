import { useClickOutside } from "@/hooks/useClickOutside";
import { useModal } from "@/hooks/useModal";

export function ViewModel(params, element) {
  const { parent, target, open, dropdownParams, modal, className } = params;
  const $target = document.getElementById(target);

  const { show, hide } = useModal();

  const modalSb = modal.subscribe((v) => {
    open(false);
  });

  const openSb = open.subscribe((v) => {
    if (v) {
      if (modal()) show();
    } else {
      hide();
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
      ...dropdownParams
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
    }
  };
}
