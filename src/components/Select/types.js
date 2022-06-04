/**
 * @typedef {Object} SelectResultItemComponentParams
 */

/**
 * @typedef {Object} SelectResultItemComponent
 */

/**
 * @typedef {Object} SelectResultComponentParams
 */

/**
 * @typedef {Object} SelectResultComponent
 */

/**
 * @typedef {Object} SelectListItemComponentParams
 */

/**
 * @typedef {Object} SelectListItemComponent
 */

/**
 * @typedef {Object} SelectListComponentParams
 */

/**
 * @typedef {Object} SelectListComponent
 */

/**
 * @typedef {Object} SelectComponentParams
 * @property {SelectValue} value
 * @property {useListHook} list
 * @property {boolean} multiple
 * @property {observable<boolean>} disabled
 * @property {observableArray<string[]>} disabledItems
 * @property {string} listComponentName
 * @property {string} listItemComponentName
 * @property {string} resultComponentName
 * @property {string} resultItemComponentName
 * @property {DropdownParams} dropdownParams
 */

/**
 * @typedef {Object} SelectComponent
 * @property {string} _id
 * @property {observableArray<List>} filteredItems
 * @property {observableArray<List>} selectedItems
 * @property {observableArray<string>|null} disabledItems
 * @property {string} resultComponent
 * @property {string} resultItemComponent
 * @property {string} listComponent
 * @property {string} listItemComponent
 * @property {Object} resultEvents
 * @property {Object} listEvents
 * @property {observable<boolean>} modal
 * @property {observable<boolean>} showList
 * @property {DropdownParams} dropdownParams
 * @property {function} dispose
 */