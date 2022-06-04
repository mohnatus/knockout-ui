import { registerComponent } from "@/utils/engine/registerComponent";

import * as MonthCalendar from "@/components/MonthCalendar";
import * as PeriodPickerResult from "./PeriodPickerResult";
import * as PeriodPickerField from "./PeriodPickerField";
import * as PeriodPickerControl from "./PeriodPickerControl";
import * as PeriodPickerActions from "./PeriodPickerActions";

export const MonthCalendarComponent = "c-period-picker-calendar";
export const PeriodPickerResultComponent = "c-period-picker-result";
export const PeriodPickerFieldComponent = "c-period-picker-field";
export const PeriodPickerControlComponent = "c-period-picker-control";
export const PeriodPickerActionsComponent = "c-period-picker-actions";

registerComponent(MonthCalendarComponent, MonthCalendar);
registerComponent(PeriodPickerResultComponent, PeriodPickerResult);
registerComponent(PeriodPickerFieldComponent, PeriodPickerField);
registerComponent(PeriodPickerControlComponent, PeriodPickerControl);
registerComponent(PeriodPickerActionsComponent, PeriodPickerActions);
