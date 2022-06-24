import { computed } from 'knockout';

import { VALIDATORS } from './validators';

/**
 * formatValidators
 * @param {Validator[]} validators
 * @returns {Validator[]}
 */
export function formatValidators(validators, onUpdate) {
	const validatorsList = Array.isArray(validators)
		? validators
		: [validators];
	return validatorsList
		.map((validator) => {
			if (!validator || typeof validator !== 'object') return null;
			const { validate, error, param, onlyIf } = validator;

			let validateFn, condition;

			if (typeof validate === 'function') {
				validateFn = validate;
			} else if (validate in VALIDATORS) {
				validateFn = VALIDATORS[validate];
			}

			if (!validateFn) return null;

			if (onlyIf && typeof onlyIf === 'function') {
				condition = computed(onlyIf);
				condition.subscribe((v) => {
					onUpdate();
				});
			}

			return {
				validate: validateFn,
				error,
				param,
				onlyIf: condition,
			};
		})
		.filter(Boolean);
}
