export const requiredValidator = (config = {}) => {
	const { onlyIf } = config;
	return [
		{
			validate: 'required',
			error: 'Обязательное поле',
			onlyIf
		},
	];
};
