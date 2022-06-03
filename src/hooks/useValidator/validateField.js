import { isObservable, toJS } from "knockout";

function getValidationError(error, value) {
  if (isObservable(error)) {
    return toJS(error);
  }

  if (typeof error === "function") {
    return error(value);
  }

  return error;
}

export function validateField(fieldConfig) {
  const fieldState = {
    isValid: true,
    error: null
  };

  if (!fieldConfig) return fieldState;

  const { field, validators } = fieldConfig;
  const fieldValue = toJS(field);

  for (let i = 0, count = validators.length; i < count; i++) {
    const { validateFn, error, param } = validators[i];
    if (typeof validateFn !== "function") continue;

    const isValid = validateFn(fieldValue, param);
    if (isValid) continue;

    fieldState.isValid = false;
    fieldState.error = getValidationError(error, fieldValue);
    break;
  }

  return fieldState;
}
