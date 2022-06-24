/**
 * @typedef {Object} DatePickerComponentParams
 *
 * @property {DateValue} value
 *
 * @property {AnyString} placeholder
 * @property {ObservableBoolean} disabled
 * @property {boolean} clearable
 * @property {DropdownParams} dropdownParams
 *
 * @property {string} resultComponentName
 */

/**
 * @typedef {Object} DatePickerComponent
 *
 * @property {string} _id
 *
 * @property {ObservableString} textValue
 * @property {ObservableNumber} moment
 * @property {ObservableDate} month
 *
 * @property {boolean} clearable
 * @property {ObservableBoolean} disabled
 * @property {AnyString} placeholder
 * @property {ObservableBoolean} showCalendar
 * @property {ObservableBoolean} modal
 * @property {DropdownParams} dropdownParams
 *
 * @property {string} resultComponent
 * @property {string} controlComponent
 * @property {Object.<string, Function>} resultEvents
 *
 * @property {Function} select
 * @property {Function} dispose
 */
