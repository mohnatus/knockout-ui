import { VALIDATORS } from "./validators";

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
        validateFn,
        error,
        param
      };
    })
    .filter(Boolean);
}
