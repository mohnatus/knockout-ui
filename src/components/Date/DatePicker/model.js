import { applyBindingsToNode, observable, toJS } from 'knockout';

import { ACTIVATE_PICKER, CLEAR_FIELD } from './events';
import { ONLY_SMALL_MOBILE_MQ } from '@/constants/browser/breakpoints';
import { getMonth } from './utils';
import { getUnique } from '@/utils/unique';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import {
	DatePickerControlComponent,
	DatePickerResultComponent,
} from './components';

/**
 * DatePicker Component ViewModel
 * @param {DatePickerComponentParams} params
 * @param {HTMLElement} element
 * @returns {DatePickerComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-date-picker');

	const {
		value,
		clearable,
		disabled,
		placeholder,
		dropdownParams,
		resultComponentName,
		controlComponentName,
	} = params;
	const { textValue, moment, dispose: modelDispose } = value;

	const showCalendar = observable(false);
	const month = observable(getMonth(moment));
	const momentSb = moment.subscribe((v) => {
		month(getMonth(v));
	});

	// methods
	const select = (day) => {
		if (moment() !== day.moment) {
			moment(day.moment);
		}
	};

	// dom
	const modal = observable(false);
	const modalDispose = useMediaQuery(ONLY_SMALL_MOBILE_MQ, (match) => {
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

	applyBindingsToNode(element, {
		css: {
			disabled: disabled,
		},
	});

	// dispose

	const dispose = () => {
		momentSb.dispose();
		modelDispose();
		modalDispose();
	};

	return {
		_id: 'c-date-picker-' + getUnique(),

		textValue,
		moment,
		month,
		clearable,
		disabled,
		placeholder,
		select,

		showCalendar,
		modal,
		dropdownParams: {
			flip: false,
			...dropdownParams,
		},
		resultComponent: resultComponentName || DatePickerResultComponent,
		controlComponent: controlComponentName || DatePickerControlComponent,
		resultEvents,
		dispose,
	};
}
