/**
 * @typedef {Object} SelectComponentParams
 * @property {SelectValue} value
 * @property {useListHook} list
 * @property {boolean} multiple
 * @property {boolean} searchable
 * @property {boolean} clearable
 * @property {Function} itemFormatter
 * @property {Function} resultFormatter
 * @property {ObservableBoolean} disabled
 * @property {import("knockout").ObservableArray<string[]>} disabledItems
 * @property {AnyString} placeholder
 * @property {string} listComponentName
 * @property {string} listItemComponentName
 * @property {string} resultComponentName
 * @property {string} resultItemComponentName
 * @property {DropdownParams} dropdownParams
 */

/**
 * @typedef {Object} SelectComponent
 * @property {string} _id
 * @property {import("knockout").ObservableArray<List>} filteredItems
 * @property {import("knockout").Observable<ListItem>|import("knockout").ObservableArray<List>} selectedItems
 * @property {import("knockout").ObservableArray<string>} [disabledItems]
 * @property {ObservableBoolean} disabledItems
 * @property {boolean} multiple
 * @property {boolean} clearable
 * @property {ObservableString} query
 * @property {AnyString} placeholder
 * @property {string} resultComponent
 * @property {string} resultItemComponent
 * @property {string} listComponent
 * @property {string} listItemComponent
 * @property {Object} resultEvents
 * @property {Object} listEvents
 * @property {Function} itemFormatter
 * @property {Function} resultFormatter
 * @property {ObservableBoolean} modal
 * @property {ObservableBoolean} showList
 * @property {ObservableBoolean} showListSearch
 * @property {DropdownParams} dropdownParams
 * @property {import("knockout").Observable} scrollbarRef
 * @property {Function} reset
 * @property {Function} apply
 * @property {Function} dispose
 */