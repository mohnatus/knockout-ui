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
	{ id: 3, text: 'Option 3' },
	{ id: 4, text: 'Option 4' },
	{ id: 5, text: 'Option 5' },
];

const ViewModel = (() => {
	const showErrors = observable(false);

	const list1 = useList(items);
	const list2 = useList(items);

	const value1 = useSelectValue();
	const multiple1 = useSelectValues();

	const { state: validator, addField } = useValidator(
		showErrors,
		'showValid'
	);

	addField('select1', value1.selected, requiredValidator());
	addField('multiple1', multiple1.selected, requiredValidator());

	return {
		showErrors,
		list1,
		list2,
		value1,
		multiple1,
		validator,
	};
})();

const root = document.getElementById('app');

applyBindings(ViewModel, root);
