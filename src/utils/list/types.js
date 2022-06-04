/**
 * @typedef {Object} TreeItem
 * @property {String} id  - идентификатор элемента
 * @property {TreeItem[]|Null} items  - массив вложенных элементов
 */

/**
 * @typedef {TreeItem[]} Tree
 */

/**
 * @typedef {Object} ListItem
 * @property {String} id  - идентификатор элемента
 * @property {Object} data  - сам элемент
 * @property {String|Null} parent  - идентификатор родителя
 */

/**
 * @typedef {ListItem[]} List
 */

/**
 * @callback convertFn
 * @param {*} item
 * @returns {TreeItem}
 */
