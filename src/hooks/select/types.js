/**
 * @typedef {(string|number)} SelectedItem
 */

/**
 * @typedef {Object} SelectValue
 * @property {(import("knockout").Observable<SelectedItem>|import("knockout").ObservableArray<SelectedItem[]>)} selected
 * @property {Function} select
 * @property {Function} remove
 * @property {Function} onSelect
 * @property {Function} onRemove
 */

/**
 * @typedef {Object} GrouppedSelect
 * @property {import("knockout").ObservableArray} disabledOptions array of ids
 */