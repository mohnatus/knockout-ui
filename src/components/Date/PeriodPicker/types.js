/**
 * @typedef {Object} PeriodPickerComponentParams
 * @property {PeriodValue} value
 * @property {AnyString} placeholder
 * @property {ObservableBoolean} disabled
 * @property {boolean} clearable
 * @property {DropdownParams} dropdownParams
 * @property {string} resultComponentName
 */

/**
 * @typedef {Object} PeriodPickerComponent
 * @property {string} _id
 * @property {ObservableString} textValue
 * @property {ObservableString} fromInput
 * @property {ObservableString} toInput
 * @property {ObservableBoolean} fromInputValid
 * @property {ObservableBoolean} toInputValid
 * @property {import("knockout").Observable<PeriodMoments>} localValue
 * @property {import("knockout").Observable<PeriodMoment>} hoverDay
 * @property {PeriodRange[]} ranges
 * @property {(ObservableString|import("knockout").Observable<null>)} localRangeId
 * @property {ObservableDate} month
 * @property {ObservableDate} secondMonth
 * @property {ObservableString} monthName
 * @property {ObservableString} secondMonthName
 * @property {Function} prevMonth
 * @property {Function} nextMonth
 * @property {boolean} clearable
 * @property {ObservableBoolean} disabled
 * @property {AnyString} placeholder
 * @property {Function} select
 * @property {Function} reset
 * @property {Function} save
 * @property {Function} setRange
 * @property {Function} toggleComponent
 * @property {boolean} withRanges
 * @property {ObservableBoolean} showCalendar
 * @property {ObservableBoolean} modal
 * @property {ObservableBoolean} smallModal
 * @property {(ObservableString|import("knockout").Observable<null>)} visibleComponent
 * @property {DropdownParams} dropdownParams
 * @property {string} resultComponent
 * @property {Object} resultEvents
 * @property {Function} dispose
 */
