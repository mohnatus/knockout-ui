/**
 * @typedef {Object} MonthCalendarParams
 * @property {observable<PeriodMoment>} month
 * @property {observable<PeriodMoment>} selected
 * @property {observable<PeriodMoments>} selectedPeriod
 */

/**
 * @typedef {Object} MonthCalendar
 * @property {CalendarDay[]} days
 * @property {function} isSelected
 * @property {function} isInRange
 * @property {function} isFirstDay
 * @property {function} isLastDay
 * @property {function} onClick
 * @property {function} onHover
 * @property {function} dispose
 */