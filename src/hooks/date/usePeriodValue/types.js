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
 * @property {observable<string>} textValue
 * @property {observable<PeriodMoments>} period
 * @property {observable<string|null>} rangeId
 * @property {Array} ranges
 *
 * @property {function} dispose
 */
