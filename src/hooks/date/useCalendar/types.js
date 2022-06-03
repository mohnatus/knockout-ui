/**
 * @typedef {Object} CalendarDay
 * @property {number} moment
 * @property {Boolean} disabled
 * @property {Number} date
 * @property {Boolean} isWeekend
 * @property {Boolean} isToday
 */

/**
 * @typedef {Object} useCalendarHook
 * @property {observableArray<CalendarDay[]>} days
 * @property {observable<PeriodMoment>} month
 * @property {function(<PeriodMoment>)} setMonth
 * @property {function} dispose
 */