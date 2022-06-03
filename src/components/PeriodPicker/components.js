import { registerComponent } from "@/utils/engine/registerComponent";

import * as MonthCalendar from "@/components/MonthCalendar";
import * as PeriodPickerResult from "./PeriodPickerResult";
import * as PeriodPickerField from "./PeriodPickerField";
import * as PeriodPickerControl from "./PeriodPickerControl";
import * as PeriodPickerActions from "./PeriodPickerActions";

registerComponent("c-period-picker-calendar", MonthCalendar);
registerComponent("c-period-picker-result", PeriodPickerResult);
registerComponent("c-period-picker-field", PeriodPickerField);
registerComponent("c-period-picker-control", PeriodPickerControl);
registerComponent("c-period-picker-actions", PeriodPickerActions);
