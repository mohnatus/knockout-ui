/**
 * @typedef {Object} MonthCalendarComponentParams
 * @property {observable<PeriodMoment>} month
 * @property {observable<PeriodMoment>} selected
 * @property {observable<PeriodMoments>} selectedPeriod
 * @property {observable<PeriodMoment>} hoverDay
 */

/**
 * @typedef {Object} MonthCalendarComponent
 * @property {CalendarDay[]} days
 * @property {function} isSelected
 * @property {function} isInRange
 * @property {function} isFirstDay
 * @property {function} isLastDay
 * @property {function} onClick
 * @property {function} onHover
 * @property {function} dispose
 */
