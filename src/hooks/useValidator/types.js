/**
 * @typedef {Object} Validator
 * @property {Function} validate
 * @property {Function<boolean>} onlyIf
 * @property {(Function|AnyString)} error
 * @property {*} param
 */

/**
 * @typedef {Object} FieldValidationState
 * @property {ObservableBoolean} isValid
 * @property {ObservableBoolean} isInvalid
 * @property {ObservableString} error
 */

/**
 * @typedef {Object<string,FieldValidationState>} ValidationState
 */

/**
 * @typedef {Object} useValidatorHook
 * @property {Function} addField
 * @property {ValidationState} state
 */
