



/**
 * @typedef {Object} PeriodPickerComponentParams
 * @property {PeriodValue} value
 * @property {string|observable<string>} placeholder
 * @property {observable<boolean>} disabled
 * @property {boolean} clearable
 * @property {Object} dropdownParams
 * @property {string} resultComponentName
 */

/**
 * @typedef {Object} PeriodPickerComponent
 * @property {string} _id
 * @property {observable<string>} textValue
 * @property {observable<string>} fromInput
 * @property {observable<string>} toInput
 * @property {observable<boolean>} fromInputValid
 * @property {observable<boolean>} toInputValid
 * @property {observable<PeriodMoments>} localValue
 * @property {PeriodRange[]} ranges
 * @property {observable<string|null>} localRangeId
 * @property {observable<Date>} month
 * @property {observable<Date>} secondMonth
 * @property {observable<string>} monthName
 * @property {observable<string>} secondMonthName
 * @property {function} prevMonth
 * @property {function} nextMonth
 * @property {boolean} clearable
 * @property {observable<boolean>} disabled
 * @property {string|observable<string>} placeholder
 * @property {function} select
 * @property {function} reset
 * @property {function} save
 * @property {function} setRange
 * @property {function} toggleComponent
 * @property {boolean} withRanges
 * @property {observable<boolean>} showCalendar
 * @property {observable<boolean>} modal
 * @property {observable<boolean>} smallModal
 * @property {observable<string|null>} visibleComponent
 * @property {DropdownParams} dropdownParams
 * @property {string} resultComponent
 * @property {Object} resultEvents
 * @property {function} dispose
 */
