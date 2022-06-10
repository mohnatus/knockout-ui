import './index';

import { applyBindings, bindingHandlers, observable } from 'knockout';

import { registerComponent } from '@/utils/engine/registerComponent';
import { useSelectValue } from '../hooks/select/useSelectValue';
import { useSelectValues } from '../hooks/select/useSelectValues';
import { requiredValidator } from '../constants/validators/required';
import { useList } from '../hooks/list/useList';
import { useValidator } from '../hooks/useValidator';
import * as Select from '@/components/select';

registerComponent('c-select', Select);

const items = [
	{ id: 1, text: 'Option 1' },
	{ id: 2, text: 'Option 2' },
	{ id: 3, text: 'Option 3', disabled: true },
	{ id: 4, text: 'Option 4' },
	{ id: 5, text: 'Option 5' },
	{ id: 6, text: 'Option 6' },
	{ id: 7, text: 'Option 7' },
	{ id: 8, text: 'Option 8' },
	{ id: 9, text: 'Option 9' },
	{ id: 10, text: 'Option 10' },
	{ id: 11, text: 'Option 11' },
];

const ViewModel = (() => {
	const showErrors = observable(false);

	const list1 = useList(items);
	const list2 = useList(items);
	const list3 = useList(items);
	const list4 = useList(items);
	const list5 = useList(items);
	const list6 = useList(items);

	const value1 = useSelectValue();
	const value2 = useSelectValue(2);
	const value3 = useSelectValue();
	const value4 = useSelectValue();

	const disableValue = observable(false);

	const multiple1 = useSelectValues([2,3]);
	const multiple2 = useSelectValues();

	const disableMultiple = observable(false);

	const { state: validator, addField } = useValidator(
		showErrors,
		'showValid'
	);

	addField('value1', value1.selected, requiredValidator());
	addField('value2', value2.selected, requiredValidator());
	addField('value3', value3.selected, requiredValidator());
	addField(
		'value4',
		value4.selected,
		requiredValidator({
			onlyIf: () => !disableValue(),
		})
	);

	addField('multiple1', multiple1.selected, [
		...requiredValidator(),
		{
			validate: 'minLength',
			param: 2,
			error: 'Не менее двух вариантов',
		},
	]);
	addField(
		'multiple2',
		multiple2.selected,
		requiredValidator({
			onlyIf: () => !disableMultiple(),
		})
	);

	return {
		showErrors,
		list1,
		list2,
		list3,
		list4,
		list5,
		list6,

		value1,
		value2,
		value3,
		value4,

		disableValue,

		multiple1,
		multiple2,

		disableMultiple,

		validator,
	};
})();

const root = document.getElementById('app');

applyBindings(ViewModel, root);
