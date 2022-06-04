import { registerComponent } from "@/utils/engine/registerComponent";

import * as MonthCalendar from "../MonthCalendar";
import * as DatePickerResult from "./DatePickerResult";
import * as DatePickerControl from "./DatePickerControl";

export const MonthCalendarComponent = 'c-date-picker-calendar';
export const DatePickerResultComponent = 'c-date-picker-result';
export const DatePickerControlComponent = 'c-date-picker-control';

registerComponent(MonthCalendarComponent, MonthCalendar);
registerComponent(DatePickerResultComponent, DatePickerResult);
registerComponent(DatePickerControlComponent, DatePickerControl);
