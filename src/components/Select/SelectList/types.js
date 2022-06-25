/**
 * @typedef {Object} SelectListComponentParams
 * @property {string} itemComponent
 * @property {import("knockout").ObservableArray<List>} items
 * @property {import("knockout").ObservableArray<List>} selectedItems
 * @property {import("knockout").ObservableArray<ListItemVar>} [disabledItems]
 * @property {ObservableBoolean} modal
 * @property {boolean} multiple
 * @property {Function} formatter
 */

/**
 * @typedef {Object} SelectListComponent
 * @property {string} itemComponent
 * @property {import("knockout").ObservableArray<List>} items
 * @property {Function} isSelected
 * @property {Function} isDisabled
 * @property {Function} select
 * @property {Function} dispose
 * @property {Function} formatter
 */
