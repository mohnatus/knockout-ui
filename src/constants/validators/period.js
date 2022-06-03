export const requiredPeriodValidator = (config = {}) => {
	const { ranges } = config;

	return [
		{
			validate: 'required',
			error: 'Обязательное поле',
		},
		{
			validate: 'period',
			param: ranges,
			error: 'Некорректный формат',
		},
		 {
			validate: 'periodValue',
			param: ranges,
			error: 'Некорректный период',
		},
	];
};
