import { computed, observable, toJS } from 'knockout';

import { addMonths, getStartOfMonth } from '@/utils/date/manipulations';
import { MONTHS } from '@/constants/date/months';
import { TODAY } from '@/constants/date/days';
import { getDateComponents } from '@/utils/date/format';

/**
 * getMonth
 * @param {AnyDate} moment
 * @returns {string}
 */
export function getMonthName(month) {
	const _date = toJS(month);
	if (!_date) return '';
	const { month: monthIndex, year } = getDateComponents(_date);

	return `${MONTHS[monthIndex]} ${year}`;
}

/**
 * getMonth
 * @param {PeriodMoment|import('knockout').Observable<PeriodMoment>} moment
 * @returns {Date}
 */
export function getMonth(moment) {
	const _m = toJS(moment);
	const date = _m ? new Date(_m) : TODAY;
	return getStartOfMonth(date);
}

/**
 * useMonths - контроллер календарей
 * @param {import('knockout').Observable<PeriodMoments>} value
 * @returns {useMonthsHook}
 */
export function useMonths(value) {
	const [from] = toJS(value);
	const month = observable(getMonth(from));
	const secondMonth = computed(() => {
		return addMonths(month(), 1);
	});
	const monthName = computed(() => {
		return getMonthName(month());
	});
	const secondMonthName = computed(() => {
		return getMonthName(secondMonth());
	});

	const updateMonth = (moment, force) => {
		const newMonth = getStartOfMonth(moment ? new Date(moment) : TODAY);
		const newMonthMoment = +newMonth;
		if (
			!force &&
			(newMonthMoment === +month() || newMonthMoment === +secondMonth())
		)
			return;
		month(newMonth);
	};

	const prevMonth = () => {
		month(addMonths(month(), -1));
	};

	const nextMonth = () => {
		month(addMonths(month(), 1));
	};

	return {
		month,
		monthName,
		secondMonth,
		secondMonthName,
		updateMonth,
		prevMonth,
		nextMonth,
		resetMonth() {
			month(getMonth());
		},
		dispose() {
			secondMonth.dispose();
			monthName.dispose();
			secondMonthName.dispose();
		},
	};
}
