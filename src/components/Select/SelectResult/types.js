/**
 * @typedef {Object} SelectResultComponentParams
 * @property {string} itemComponent
 * @property {observable<ListItem>|observableArray<List>} selectedItems
 * @property {observable<boolean>} open
 * @property {observable<boolean>} disabled
 * @property {observable<boolean>} modal
 * @property {boolean} clearable
 * @property {observable<boolean>} showResultSearch
 * @property {observalbe<string>} query
 * @property {boolean} multiple
 * @property {string|observable<string>} placeholder
 * @property {Function} formatter
 */

/**
 * @typedef {Object} SelectResultComponent
 * @property {string} itemComponent
 * @property {observableArray<List>} items
 * @property {observable<boolean>} disabled
 * @property {boolean} clearable
 * @property {observable<boolean>} showSearch
 * @property {observable<string>} query
 * @property {observable<string>} placeholderText
 * @property {function} remove
 * @property {function} dispose
 * @property {Function} formatter
 */
