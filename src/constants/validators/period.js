export const requiredPeriodValidator = (config = {}) => {
	const { ranges, onlyIf } = config;

	return [
		{
			validate: 'required',
			error: 'Обязательное поле',
			onlyIf
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
