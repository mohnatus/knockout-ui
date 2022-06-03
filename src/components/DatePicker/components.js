import { registerComponent } from "@/utils/engine/registerComponent";

import * as MonthCalendar from "../MonthCalendar";
import * as DatePickerResult from "./DatePickerResult";
import * as DatePickerControl from "./DatePickerControl";

registerComponent("c-date-picker-calendar", MonthCalendar);
registerComponent("c-date-picker-result", DatePickerResult);
registerComponent("c-date-picker-control", DatePickerControl);
