import { getElementEmitter } from "@/utils/emitEvent";
import { ACTIVATE_PICKER, CLEAR_FIELD } from "@/components/DatePicker/events";

export function ViewModel(params, element) {
  element.classList.add("i-date-picker-result");
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
      emitter(ACTIVATE_PICKER);
    },
    clear() {
      value("");
      emitter(CLEAR_FIELD);
    }
  };
}
