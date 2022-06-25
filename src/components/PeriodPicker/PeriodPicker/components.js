import { registerComponents } from '@/utils/engine/registerComponent';

import * as MonthCalendar from '@/components/MonthCalendar';
import * as PeriodPickerActions from './PeriodPickerActions';
import * as PeriodPickerControl from './PeriodPickerControl';
import * as PeriodPickerField from './PeriodPickerField';
import * as PeriodPickerResult from './PeriodPickerResult';

export const MonthCalendarComponent = 'c-period-picker-calendar';
export const PeriodPickerResultComponent = 'c-period-picker-result';
export const PeriodPickerFieldComponent = 'c-period-picker-field';
export const PeriodPickerControlComponent = 'c-period-picker-control';
export const PeriodPickerActionsComponent = 'c-period-picker-actions';

registerComponents({
	[MonthCalendarComponent]: MonthCalendar,
	[PeriodPickerResultComponent]: PeriodPickerResult,
	[PeriodPickerFieldComponent]: PeriodPickerField,
	[PeriodPickerControlComponent]: PeriodPickerControl,
	[PeriodPickerActionsComponent]: PeriodPickerActions,
});
