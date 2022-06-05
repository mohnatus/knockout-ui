/**
 * @typedef {Object} SelectListComponentParams
 * @property {string} itemComponent
 * @property {observableArray<List>} items
 * @property {observableArray<List>} selectedItems
 * @property {observableArray<ListItemVar>|null} disabledItems
 * @property {observable<boolean>} modal
 */

/**
 * @typedef {Object} SelectListComponent
 * @property {string} itemComponent
 * @property {observableArray<List>} items
 * @property {function} isSelected
 * @property {function} isDisabled
 * @property {function} select
 * @property {function} dispose
 */
