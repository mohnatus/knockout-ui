import { computed, observable } from 'knockout';

import {
	addDays,
	getEndOfMonth,
	getEndOfWeek,
	getStartOfMonth,
	getStartOfWeek,
} from '@/utils/date/manipulations';
import { getDays, getDiffInDays } from '@/utils/date/interval';
import { isToday, isWeekend } from '@/utils/date';
import { START_OF_TODAY } from '@/constants/date/days';

/**
 * @param {Date} month
 * @returns {CalendarDay[]}
 */
function getMonthCalendar(month) {
	if (!month) return [];

	const mStart = getStartOfMonth(month);
	const mEnd = getEndOfMonth(month);

	const _mStart = +mStart;
	const _mEnd = +mEnd;

	const wStart = getStartOfWeek(mStart);
	let wEnd = getEndOfWeek(mEnd);

	const daysCount = getDiffInDays(wStart, wEnd);

	if (daysCount + 1 < 7 * 6) wEnd = addDays(wEnd, 7);

	return getDays(wStart, wEnd).map((date) => {
		const moment = +date;
		return {
			moment,
			disabled: moment < _mStart || moment > _mEnd,
			date: date.getDate(),
			isWeekend: isWeekend(date),
			isToday: isToday(date),
		};
	});
}

function getMonthMoment(moment) {
	let date = new Date(moment || START_OF_TODAY);
	date = getStartOfMonth(date);
	return +date;
}

/**
 * useCalendar - дни месяца
 * @param {Moment} moment
 * @returns {useCalendarHook}
 */
export function useCalendar(moment) {
	const currentMonth = observable(getMonthMoment(moment));
	const days = computed(() => {
		return getMonthCalendar(currentMonth());
	});

	return {
		days,
		month: currentMonth,

		/**
		 * @param {Moment} moment
		 */
		setMonth(moment) {
			currentMonth(getMonthMoment(moment));
		},

		dispose() {
			days.dispose();
		},
	};
}
