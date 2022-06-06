import { isObservable, toJS } from 'knockout';

function getValidationError(error, value) {
	if (isObservable(error)) {
		return toJS(error);
	}

	if (typeof error === 'function') {
		return error(value);
	}

	return error;
}

export function validateField(fieldConfig) {
	const fieldState = {
		isValid: true,
		error: null,
	};

	if (!fieldConfig) return fieldState;

	const { field, validators } = fieldConfig;
	const fieldValue = toJS(field);

	console.log({ fieldValue, validators })

	for (let i = 0, count = validators.length; i < count; i++) {
		const { validate, error, param, onlyIf } = validators[i];
		if (typeof validate !== 'function') continue;

		if (onlyIf && !toJS(onlyIf)) continue;

		const isValid = validate(fieldValue, param);
		if (isValid) continue;

		fieldState.isValid = false;
		fieldState.error = getValidationError(error, fieldValue);
		break;
	}

	return fieldState;
}
