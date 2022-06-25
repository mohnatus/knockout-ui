/**
 * @typedef {number|null} PeriodMoment
 */

/**
 * @typedef {[PeriodMoment, PeriodMoment]} PeriodMoments
 */

/**
 * @typedef {Object} PeriodRange
 * @property {string} id
 * @property {string} name
 * @property {PeriodMoments} period
 */

/**
 * @typedef {Object} PeriodValue
 *
 * @property {ObservableString} textValue
 * @property {import("knockout").Observable<PeriodMoments>} period
 * @property {import("knockout").Observable<string|null>} rangeId
 * @property {Array} ranges
 *
 * @property {Function} dispose
 */
