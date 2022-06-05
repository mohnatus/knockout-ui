/**
 * @typedef {Object} DatePickerComponentParams
 * @property {DateValue} value
 * @property {string|observable<string>} placeholder
 * @property {observable<boolean>} disabled
 * @property {boolean} clearable
 * @property {Object} dropdownParams
 * @property {string} resultComponentName
 */

/**
 * @typedef {Object} DatePickerComponent
 * @property {string} _id
 * @property {observable<string>} textValue
 * @property {observable<number>} moment
 * @property {observable<Date>} month
 * @property {boolean} clearable
 * @property {observable<boolean>} disabled
 * @property {string|observable<string>} placeholder
 * @property {function} select
 * @property {observable<boolean>} showCalendar
 * @property {observable<boolean>} modal
 * @property {DropdownParams} dropdownParams
 * @property {string} resultComponent
 * @property {string} controlComponent
 * @property {Object} resultEvents
 * @property {function} dispose
 */
