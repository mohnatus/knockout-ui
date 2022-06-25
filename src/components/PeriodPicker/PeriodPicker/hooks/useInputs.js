import { observable, toJS } from 'knockout';

import { getDate } from '../utils';
import { useDateInput } from '@/hooks/date/useDateInput';

/**
 * useInputs - внутренние поля пикера
 * @param {import('knockout').Observable<PeriodMoments>} value
 * @param {Function} onChange
 * @returns {useInputsHook}
 */
export function useInputs(value, onChange) {
	const [from, to] = toJS(value);

	const localFrom = observable(from);
	const localTo = observable(to);

	const valueSb = value.subscribe((v) => {
		const [from, to] = v;

		if (from !== localFrom()) localFrom(from);
		if (to !== localTo()) localTo(to);
	});

	const {
		inputValue: fromInput,
		isValid: fromInputValid,
		dispose: fromDispose,
	} = useDateInput(localFrom);

	const {
		inputValue: toInput,
		isValid: toInputValid,
		dispose: toDispose,
	} = useDateInput(localTo, (v) => {
		return v >= localFrom();
	});

	const fromSb = localFrom.subscribe((v) => {
		value([v, localTo()]);
		if (typeof onChange === 'function') {
			onChange();
		}
	});

	const toSb = localTo.subscribe((v) => {
		value([localFrom(), v]);
		if (typeof onChange === 'function') {
			onChange();
		}
	});

	return {
		fromInput,
		fromInputValid,
		toInput,
		toInputValid,

		localFrom,
		localTo,

		setFromInput(moment) {
			fromInput(getDate(moment));
		},
		setToInput(moment) {
			toInput(getDate(moment));
		},

		dispose() {
			fromDispose();
			toDispose();
			valueSb.dispose();
			fromSb.dispose();
			toSb.dispose();
		},
	};
}
