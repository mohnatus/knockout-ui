export const requiredDateValidator = (config = {}) => {
	const {onlyIf} = config;

	return [
		{
			validate: 'required',
			error: 'Обязательное поле',
			onlyIf,
		},
		{
			validate: 'date',
			error: 'Некорректное значение',
		},
	];
};
