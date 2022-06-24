import { observable } from 'knockout';

import {
	comparePeriods,
	convertPeriodToText,
	formatPeriodString,
	isValidPeriodFormat,
} from './utils';
import { useRanges } from './useRanges';

/**
 * @param {string|PeriodMoments} initialValue
 * @param {PeriodRange[]} ranges
 * @returns {PeriodValue} PeriodValue
 */
export function usePeriodValue(initialValue, ranges = []) {
	const textValue = observable('');
	const period = observable([null, null]);
	const rangeId = observable(null);

	const { getRangeByName, getRangeById } = useRanges(ranges);

	const setPeriod = (newPeriod) => {
		if (!comparePeriods(newPeriod, period())) {
			period(newPeriod);
		}
	};

	const setText = (newText) => {
		if (textValue() !== newText) textValue(newText);
	};

	const setRange = (newRange) => {
		if (rangeId() !== newRange) rangeId(newRange);
	};

	const textSb = textValue.subscribe((v) => {
		if (!v) {
			setPeriod([null, null]);
			setRange(null);
			return;
		}

		const range = getRangeByName(v);
		if (range) {
			setRange(range.id);
			setPeriod(range.period);
			return;
		}

		setRange(null);

		const periodValue = formatPeriodString(v);
		if (periodValue) {
			setPeriod(periodValue);
		}
	});

	const periodSb = period.subscribe((v) => {
		if (rangeId()) {
			const range = getRangeById(rangeId());
			if (range) {
				if (comparePeriods(range.period, v)) {
					setText(range.name);
					return;
				}
			}
		}

		setRange(null);

		if (!isValidPeriodFormat(v)) {
			setPeriod([null, null]);
			return;
		}

		setText(convertPeriodToText(v));
	});

	const rangeSb = rangeId.subscribe((v) => {
		const range = v && getRangeById(v);
		if (range) {
			setText(range.name);
			return;
		}

		setText('');
		setPeriod([null, null]);
	});

	if (initialValue) {
		if (typeof initialValue === 'string') {
			const range = getRangeById(initialValue);
			if (range) {
				rangeId(range.id);
			} else {
				const periodValue = formatPeriodString(initialValue);
				if (periodValue) {
					period(periodValue);
				} else {
					textValue(initialValue);
				}
			}
		} else if (isValidPeriodFormat(initialValue)) {
			period(initialValue);
		}
	}

	const dispose = () => {
		textSb.dispose();
		periodSb.dispose();
		rangeSb.dispose();
	};

	return {
		ranges,
		textValue,
		period,
		rangeId,
		dispose,
	};
}
