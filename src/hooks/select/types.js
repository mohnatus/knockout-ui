/**
 * @typedef {string|number} SelectedItem
 */

/**
 * @typedef {Object} SelectValue
 * @property {observable<SelectedItem>|observableArray<SelectedItem[]>} selected
 * @property {function} select
 * @property {function} remove
 * @property {function} onSelect
 * @property {function} onRemove
 */

/**
 * @typedef {Object} GrouppedSelect
 * @property {observableArray<Array>} disabledOptions array of ids
 */