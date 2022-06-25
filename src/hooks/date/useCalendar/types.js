/**
 * @typedef {Object} CalendarDay
 * @property {number} moment
 * @property {Boolean} disabled
 * @property {Number} date
 * @property {Boolean} isWeekend
 * @property {Boolean} isToday
 */

/**
 * @typedef {Function} setMonth
 * @returns {PeriodMoment}
 */

/**
 * @typedef {Object} useCalendarHook
 * @property {import("knockout").ObservableArray<CalendarDay[]>} days
 * @property {import("knockout").Observable<PeriodMoment>} month
 * @property {setMonth} setMonth
 * @property {Function} dispose
 */