/**
 * @typedef {Object} SelectResultComponentParams
 * @property {string} itemComponent
 * @property {import("knockout").Observable<ListItem>|import("knockout").ObservableArray<List>} selectedItems
 * @property {ObservableBoolean} open
 * @property {ObservableBoolean} disabled
 * @property {ObservableBoolean} modal
 * @property {boolean} clearable
 * @property {ObservableBoolean} showResultSearch
 * @property {ObservableString} query
 * @property {boolean} multiple
 * @property {AnyString} placeholder
 * @property {Function} formatter
 */

/**
 * @typedef {Object} SelectResultComponent
 * @property {string} itemComponent
 * @property {import("knockout").ObservableArray<List>} items
 * @property {ObservableBoolean} disabled
 * @property {boolean} clearable
 * @property {ObservableBoolean} showSearch
 * @property {ObservableString} query
 * @property {ObservableString} placeholderText
 * @property {Function} remove
 * @property {Function} dispose
 * @property {Function} formatter
 */
