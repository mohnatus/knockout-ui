/**
 * @typedef {Object} PeriodPickerActionsParams
 * @property {observable<boolean>} modal
 * @property {function} apply
 * @property {function} reset
 */

/**
 * @typedef {Object} PeriodPickerControlParams
 * @property {observable<Moment>} month
 * @property {function} toPrevMonth
 * @property {function} toNextMonth
 */

/**
 * @typedef {Object} PeriodPickerFieldParams
 * @property {observable<string>} inputValue
 */

/**
 * @typedef {Object} PeriodPickerResultParams
 * @property {observable<string>} value
 * @property {boolean} clearable
 * @property {observable<boolean>} disabled
 * @property {string|observable<string>} placeholder
 */

/**
 * @typedef {Object} PeriodPickerParams
 * @property {PeriodValue} value
 * @property {string|observable<string>} placeholder
 * @property {observable<boolean>} disabled
 * @property {boolean} clearable
 * @property {Object} dropdownParams
 * @property {string} resultComponentName
 */

/**
 * @typedef {Object} PeriodPickerActions
 * @property {observable<boolean>} modal
 * @property {function} apply
 * @property {function} reset
 */

/**
 * @typedef {Object} PeriodPickerControl
 * @property {observable<Moment>} month
 * @property {function} toPrevMonth
 * @property {function} toNextMonth
 */

/**
 * @typedef {Object} PeriodPickerField
 * @property {observable<string>} inputValue
 */

/**
 * @typedef {Object} PeriodPickerResult
 * @property {observable<string>} value
 * @property {boolean} clearable
 * @property {observable<boolean>} disabled
 * @property {string|observable<string>} placeholder
 * @property {function} onClick
 * @property {function} clear
 */
