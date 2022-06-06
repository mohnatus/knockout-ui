import { computed, isObservable, observable, toJS } from 'knockout';
import { formatValidators } from './formatValidators';
import { validateField } from './validateField';

/**
 * useValidator
 * @param {observable<boolean>|null} condition
 * @param {boolean} showValid
 * @returns {useValidatorHook}
 */
export function useValidator(condition, showValid) {
	const fields = {};
	const state = {};

	const canValidate = computed(() => {
		if (!condition) return true;
		return toJS(condition);
	});

	const updateFieldState = (name) => {
		if (!canValidate()) {
			state[name].isValid(false);
			state[name].isInvalid(false);
			state[name].error(null);
			return;
		}

		const { isValid, error } = validateField(fields[name]);
		state[name].isValid(showValid ? isValid : false);
		state[name].isInvalid(!isValid);
		state[name].error(error);
	};

	const addField = (name, field, validators) => {
		console.log({name, validators})
		fields[name] = {
			field,
			validators: formatValidators(validators, () => {
				updateFieldState(name)
			}),
		};

		state[name] = {
			isValid: observable(showValid ? true : false),
			isInvalid: observable(true),
			error: observable(null),
		};

		updateFieldState(name);

		if (isObservable(field)) {
			field.subscribe((v) => {
				updateFieldState(name);
			});
		}
	};

	if (isObservable(condition)) {
		condition.subscribe((v) => {
			Object.keys(fields).forEach((name) => updateFieldState(name));
		});
	}

	return {
		addField,
		state,
	};
}
