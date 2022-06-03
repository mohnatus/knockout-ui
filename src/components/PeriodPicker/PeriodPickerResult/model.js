import { getElementEmitter } from "@/utils/emitEvent";
import { ACTIVATE_PICKER, CLEAR_FIELD } from "../events";

/**
 * PeriodPickerResult ViewModel
 * @param {PeriodPickerResultParams} params
 * @param {HTMLElement} element
 * @returns {PeriodPickerResult}
 */
export function ViewModel(params, element) {
  element.classList.add("c-date-picker-result");
  const emitter = getElementEmitter(element);

  const { clearable, disabled, value } = params;

  const placeholder =
    typeof params.placeholder === "string"
      ? params.placeholder
      : "00.00.0000-00.00.0000";

  return {
    clearable,
    disabled,
    placeholder,
    value,

    /**
     * @fires PeriodPicker#activate
     */
    onClick() {
      emitter(ACTIVATE_PICKER);
    },
    /**
     * @fires PeriodPicker#activate
     */
    clear() {
      value("");
      emitter(CLEAR_FIELD);
    }
  };
}
