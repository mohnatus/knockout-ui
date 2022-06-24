/**
 * @typedef {Object} SelectComponentParams
 * @property {SelectValue} value
 * @property {useListHook} list
 * @property {boolean} multiple
 * @property {boolean} searchable
 * @property {boolean} clearable
 * @property {Function} itemFormatter
 * @property {Function} resultFormatter
 * @property {observable<boolean>} disabled
 * @property {observableArray<string[]>} disabledItems
 * @property {string|observable<string>} placeholder
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
 * @property {observable<ListItem>|observableArray<List>} selectedItems
 * @property {observableArray<string>|null} disabledItems
 * @property {observable<boolean>} disabledItems
 * @property {boolean} multiple
 * @property {boolean} clearable
 * @property {observable<string>} query
 * @property {string|observable<string>} placeholder
 * @property {string} resultComponent
 * @property {string} resultItemComponent
 * @property {string} listComponent
 * @property {string} listItemComponent
 * @property {Object} resultEvents
 * @property {Object} listEvents
 * @property {Function} itemFormatter
 * @property {Function} resultFormatter
 * @property {observable<boolean>} modal
 * @property {observable<boolean>} showList
 * @property {observable<boolean>} showListSearch
 * @property {DropdownParams} dropdownParams
 * @property {observable} scrollbarRef
 * @property {function} reset
 * @property {function} apply
 * @property {function} dispose
 */