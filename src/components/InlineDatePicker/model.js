import { registerComponent } from "@/utils/engine/registerComponent";
import * as DatePicker from "../DatePicker";
import * as InlineDatePickerResult from "./InlineDatePickerResult";

registerComponent("i-date-picker-origin", DatePicker);
registerComponent("i-date-picker-result", InlineDatePickerResult);

/**
 * @param {DatePickerParams} params
 * @param {HTMLElement} element
 * @returns {InlineDatePicker}
 */
export function ViewModel(params, element) {
  element.classList.add("i-date-picker");
  return {
    originComponent: "i-date-picker-origin",
    componentParams: {
      resultComponentName: "i-date-picker-result",
      dropdownParams: {
        placement: "bottom-start",
        arrow: { offset: 15 }
      },
      ...params
    }
  };
}
