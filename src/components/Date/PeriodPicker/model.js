import { applyBindingsToNode, observable, toJS } from 'knockout';
import { getUnique } from '@/utils/unique';
import { useMonths } from './hooks/useMonths';
import { usePeriod } from './hooks/usePeriod';
import { useInputs } from './hooks/useInputs';
import { useRanges } from './hooks/useRanges';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ONLY_MOBILE_MQ } from '@/constants/browser/breakpoints';
import './components';
import { ACTIVATE_PICKER, CLEAR_FIELD } from './events';
import { PeriodPickerResultComponent } from './components';

/**
 * PeriodPicker Component ViewModel
 * @param {PeriodPickerComponentParams} params
 * @param {HTMLElement} element
 * @returns {PeriodPickerComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-period-picker');

	const {
		value,
		clearable,
		disabled,
		placeholder,
		dropdownParams,
		resultComponentName,
	} = params;

	const { textValue, period, rangeId, ranges, dispose: modelDispose } = value;

	const showCalendar = observable(false);
	const visibleComponent = observable(null);

	// values
	const {
		localValue,
		onPeriodChange,
		setPeriodComponent,
		dispose: periodDispose,
	} = usePeriod(period);
	const { localRangeId, dispose: rangesDispose } = useRanges(rangeId, ranges);
	const {
		updateMonth,
		resetMonth,
		dispose: monthsDispose,
		...monthFields
	} = useMonths(localValue);
	const {
		fromInput,
		toInput,
		fromInputValid,
		toInputValid,
		setFromInput,
		setToInput,
		dispose: inputsDispose,
	} = useInputs(localValue, () => {
		localRangeId(null);
	});

	// subscriptions
	onPeriodChange((component, componentValue, periodValue) => {
		if (component === 'from') {
			updateMonth(componentValue);
			setFromInput(componentValue);
		} else {
			if (componentValue) {
				updateMonth(componentValue);
			}
			setToInput(componentValue);
		}
	});

	// methods
	const select = (day) => {
		setPeriodComponent(day.moment);
		localRangeId(null);
	};
	const save = () => {
		if (localRangeId()) {
			rangeId(localRangeId());
		} else {
			period(localValue());
		}
		showCalendar(false);
	};
	const reset = () => {
		localRangeId(rangeId());
		localValue(period());
		showCalendar(false);
	};
	const setRange = (range) => {
		if (range) {
			localValue(range.period);
			localRangeId(range.id);
		} else {
			localValue([null, null]);
			localRangeId(null);
			resetMonth();
		}
	};
	const toggleComponent = (component) => {
		visibleComponent(component);
		const [from, to] = localValue();
		if (component === 'to') {
			updateMonth(to, 'force');
		} else if (component === 'from') {
			updateMonth(from);
		}
	};

	// dom
	const modal = observable(false);
	const smallModal = observable(false);
	const smallModalDispose = useMediaQuery('(max-width: 600px)', (match) => {
		smallModal(match);
		if (!match) {
			visibleComponent(null);
		} else {
			visibleComponent('from');
		}
	});
	const modalDispose = useMediaQuery(ONLY_MOBILE_MQ, (match) => {
		modal(match);
	});
	const resultEvents = {
		[ACTIVATE_PICKER]: function () {
			if (toJS(disabled)) return;
			showCalendar(true);
		},
		[CLEAR_FIELD]: function () {
			showCalendar(false);
		},
	};

	// dispose
	const dispose = () => {
		modelDispose();
		periodDispose();
		rangesDispose();
		inputsDispose();
		monthsDispose();
		smallModalDispose();
		modalDispose();
	};

	applyBindingsToNode(element, {
		css: {
			disabled,
		},
	});

	return {
		_id: 'c-date-picker-' + getUnique(),

		textValue,
		fromInput,
		toInput,
		fromInputValid,
		toInputValid,
		localValue,
		ranges,
		localRangeId,
		clearable,
		disabled,
		placeholder,

		hoverDay: observable(null),

		select,
		reset,
		save,
		setRange,
		toggleComponent,

		withRanges: ranges.length > 0,
		...monthFields,
		showCalendar,
		modal,
		smallModal,
		visibleComponent,
		dropdownParams: {
			flip: false,
			...dropdownParams,
		},
		resultComponent: resultComponentName || PeriodPickerResultComponent,
		resultEvents,
		dispose,
	};
}
