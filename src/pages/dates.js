import './index';

import { applyBindings, bindingHandlers, computed, observable } from 'knockout';

import * as DatePicker from '@/components/Date/DatePicker';
import * as InlineDatePicker from '@/components/Date/InlineDatePicker';
import * as PeriodPicker from '@/components/Date/PeriodPicker';
import * as InlinePeriodPicker from '@/components/Date/InlinePeriodPicker';
import { RANGES } from '@/constants/date/ranges';

import { registerComponent } from '@/utils/engine/registerComponent';
import { useDateValue } from '@/hooks/date/useDateValue';
import { usePeriodValue } from '@/hooks/date/usePeriodValue';
import { useValidator } from '@/hooks/useValidator';
import {
	REQUIRED_DATE_VALIDATOR,
	requiredDateValidator,
} from '../constants/validators/date';
import { requiredPeriodValidator } from '../constants/validators/period';

registerComponent('date-picker', DatePicker);
registerComponent('i-date-picker', InlineDatePicker);
registerComponent('period-picker', PeriodPicker);
registerComponent('i-period-picker', InlinePeriodPicker);

const ViewModel = (() => {
	const showErrors = observable(false);

	const value1 = useDateValue();
	const value2 = useDateValue('12.05.2022');
	const value3 = useDateValue(Date.now());
	const value4 = useDateValue(Date.now());
	const value5 = useDateValue(Date.now());

	const disableValue1 = observable(false);
	const disableValue2 = observable(false);

	const period1 = usePeriodValue();
	const period2 = usePeriodValue(null, RANGES);
	const period3 = usePeriodValue('14.05.2022-14.06.2022');
	const period4 = usePeriodValue('last-week', RANGES);
	const period5 = usePeriodValue('06.06.2022');
	const period6 = usePeriodValue('14.05.2022-14.06.2022');
	const period7 = usePeriodValue('today', RANGES);

	const disablePeriod1 = observable(false);
	const disablePeriod2 = observable(false);

	const { state: validator, addField } = useValidator(
		showErrors,
		'showValid'
	);

	addField('value1', value1.textValue, requiredDateValidator());
	addField('value2', value2.textValue, requiredDateValidator());
	addField(
		'value3',
		value3.textValue,
		requiredDateValidator({
			onlyIf: () => !disableValue1(),
		})
	);
	addField('value4', value4.textValue, requiredDateValidator());
	addField(
		'value5',
		value5.textValue,
		requiredDateValidator({
			onlyIf: () => !disableValue2(),
		})
	);

	addField('period1', period1.textValue, requiredPeriodValidator());
	addField(
		'period2',
		period2.textValue,
		requiredPeriodValidator({ ranges: RANGES })
	);
	addField('period3', period3.textValue, requiredPeriodValidator());
	addField('period4', period4.textValue, requiredPeriodValidator({
		ranges: RANGES
	}));
	addField(
		'period5',
		period5.textValue,
		requiredPeriodValidator({
			onlyIf: () => !disablePeriod1(),
		})
	);
	addField('period6', period6.textValue, requiredPeriodValidator());
	addField(
		'period7',
		period7.textValue,
		requiredPeriodValidator({
			onlyIf: () => !disablePeriod2(),
			ranges: RANGES
		})
	);

	return {
		showErrors,
		value1,
		value2,
		value3,
		value4,
		value5,
		disableValue1,
		disableValue2,
		period1,
		period2,
		period3,
		period4,
		period5,
		period6,
		period7,
		disablePeriod1,
		disablePeriod2,
		validator,
	};
})();

const root = document.getElementById('app');

applyBindings(ViewModel, root);
