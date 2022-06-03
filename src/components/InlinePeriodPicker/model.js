import { registerComponent } from "@/utils/engine/registerComponent";
import * as PeriodPicker from "../PeriodPicker";
import * as InlinePeriodPickerResult from "./InlinePeriodPickerResult";

registerComponent("i-period-picker-origin", PeriodPicker);
registerComponent("i-period-picker-result", InlinePeriodPickerResult);

export function ViewModel(params, element) {
  element.classList.add("i-period-picker");
  return {
    originComponent: "i-period-picker-origin",
    componentParams: {
      resultComponentName: "i-period-picker-result",
      dropdownParams: {
        placement: "bottom-start",
        arrow: { offset: 15 }
      },
      flip: false,
      ...params
    }
  };
}
