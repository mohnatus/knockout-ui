/**
 * @typedef {Object} ListItemVar
 * @property {String} id  - идентификатор элемента
 * @property {String} text
 * @property {Number} level
 * @property {Boolean} disabled
 * @property {Boolean} group
 */

/**
 * @typedef {ListItem[]} List
 */

/**
 * @typedef {Object} useListHook
 * @property {import("knockout").ObservableArray<List>} items
 * @property {import("knockout").ObservableArray<List>} filteredItems
 * @property {ObservableBoolean} loading
 * @property {ObservableString} query
 * @property {Function} getById
 * @property {Function} update
 */

/**
 * @callback ListItemConvertor
 * @param {*} item
 * @returns {ListItemVar}
 */