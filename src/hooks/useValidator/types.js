/**
 * @typedef {Object} Validator
 * @property {function} validate
 * @property {string|function|observable<string>} error
 * @property {*} param
 */

/**
 * @typedef {Object} FieldValidationState
 * @property {observable<boolean>} isValid
 * @property {observable<boolean>} isInvalid
 * @property {observable<string>} error
 */

/**
 * @typedef {Object<string,FieldValidationState>} ValidationState
 */

/**
 * @typedef {Object} useValidatorHook
 * @property {function} addField
 * @property {ValidationState} state
 */