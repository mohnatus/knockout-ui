import { computed, isObservable, observable, toJS } from "knockout";
import { formatValidators } from "./formatValidators";
import { validateField } from "./validateField";

export function useValidator(condition) {
  const fields = {};
  const state = {};

  const canValidate = computed(() => {
    if (!condition) return true;
    return toJS(condition);
  });

  const updateFieldState = (name) => {
    if (!canValidate()) {
      state[name].isValid(true);
      state[name].error(null);
      return;
    }

    const { isValid, error } = validateField(fields[name]);
    state[name].isValid(isValid);
    state[name].error(error);

    console.log("update state", toJS(state[name]));
  };

  const addField = (name, field, validators) => {
    fields[name] = {
      field,
      validators: formatValidators(validators)
    };

    state[name] = {
      isValid: observable(true),
      error: observable(null)
    };

    console.log("add field", name, fields[name]);

    updateFieldState(name);

    field.subscribe((v) => {
      updateFieldState(name);
    });
  };

  return {
    addField,
    state
  };
}
