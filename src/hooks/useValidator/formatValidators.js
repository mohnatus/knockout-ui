import { VALIDATORS } from "./validators";

/**
 * formatValidators
 * @param {Validator[]} validators
 * @returns {Validator[]}
 */
export function formatValidators(validators) {
  const validatorsList = Array.isArray(validators) ? validators : [validators];
  return validatorsList
    .map((validator) => {
      if (!validator || typeof validator !== "object") return null;
      const { validate, error, param } = validator;

      let validateFn;

      if (typeof validate === "function") {
        validateFn = validate;
      } else if (validate in VALIDATORS) {
        validateFn = VALIDATORS[validate];
      }

      if (!validateFn) return null;

      return {
        validate: validateFn,
        error,
        param
      };
    })
    .filter(Boolean);
}
