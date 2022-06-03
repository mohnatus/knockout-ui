export const requiredDateValidator = () => [
	{
		validate: 'required',
		error: 'Обязательное поле',
	},
	{
		validate: 'date',
		error: 'Некорректное значение',
	},
];
