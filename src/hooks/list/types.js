/**
 * @typedef {Object} ListItemVar
 * @property {String} id  - идентификатор элемента
 * @property {String} text
 */

/**
 * @typedef {ListItemVar[]} List
 */

/**
 * @typedef {Object} useListHook
 * @property {observableArray<List>} items
 * @property {observableArray<List>} filteredItems
 * @property {observable<boolean>} loading
 * @property {observable<string>} query
 * @property {function} getById
 * @property {function} update
 */

/**
 * @callback ListItemConvertor
 * @param {*} item
 * @returns {ListItemVar}
 */