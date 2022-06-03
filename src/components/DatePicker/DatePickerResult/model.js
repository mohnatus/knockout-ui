import { getElementEmitter } from "@/utils/emitEvent";

export function ViewModel(params, element) {
  element.classList.add("c-date-picker-result");
  const emitter = getElementEmitter(element);

  const { clearable, disabled, value } = params;

  const placeholder =
    typeof params.placeholder === "string" ? params.placeholder : "00.00.0000";

  return {
    clearable,
    disabled,
    placeholder,
    value,

    onClick() {
      emitter("activate");
    },
    clear() {
      value("");
      emitter("clear");
    }
  };
}
