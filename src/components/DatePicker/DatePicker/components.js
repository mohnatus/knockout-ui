import { registerComponents } from '@/utils/engine/registerComponent';

import * as DatePickerControl from './DatePickerControl';
import * as DatePickerResult from './DatePickerResult';
import * as MonthCalendar from '@/components/MonthCalendar';

export const MonthCalendarComponent = 'c-date-picker-calendar';
export const DatePickerResultComponent = 'c-date-picker-result';
export const DatePickerControlComponent = 'c-date-picker-control';

registerComponents({
	[MonthCalendarComponent]: MonthCalendar,
	[DatePickerControlComponent]: DatePickerControl,
	[DatePickerResultComponent]: DatePickerResult,
});
