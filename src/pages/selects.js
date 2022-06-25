import { applyBindings, observable } from 'knockout';

import './index';
import * as BlockSelect from '@/components/Select/Select';
import * as InlineSelect from '@/components/Select/InlineSelect';
import { registerComponent } from '@/utils/engine/registerComponent';
import { requiredValidator } from '../constants/validators/required';
import { useGrouppedSelect } from '../hooks/select/useGrouppedSelect';
import { useList } from '../hooks/list/useList';
import { useSelectValue } from '../hooks/select/useSelectValue';
import { useSelectValues } from '../hooks/select/useSelectValues';
import { useValidator } from '../hooks/useValidator';

registerComponent('c-select', BlockSelect);
registerComponent('i-select', InlineSelect);

const items = [
	{ id: 1, text: 'Option 1' },
	{
		id: 2,
		text: 'Очень-очень-очень длинное название варианта, которое не влезет на одну строку совершенно точно',
	},
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

const grouppedItems = [
	{ id: 1, group: true, text: 'Group 1', level: 0 },
	{ id: 2, text: 'Option 1', level: 1, groupName: 'Group 1' },
	{ id: 3, text: 'Option 2', level: 1, groupName: 'Group 1' },
	{ id: 4, group: true, text: 'Group 2', level: 0 },
	{ id: 5, text: 'Option 3', level: 1, groupName: 'Group 2' },
	{ id: 6, text: 'Option 4', level: 1, groupName: 'Group 2' },
];

const itemsTree = [
	{ id: 1, text: 'Folder 1', level: 0 },
	{ id: 2, text: 'Folder 1.1', level: 1, parents: ['Folder 1'] },
	{
		id: 3,
		text: 'Folder 1.1.1',
		level: 2,
		parents: ['Folder 1', 'Folder 1.1.'],
	},
	{
		id: 4,
		text: 'Folder 1.1.2',
		level: 2,
		parents: ['Folder 1', 'Folder 1.1.'],
	},
	{ id: 5, text: 'Folder 2', level: 0 },
	{ id: 6, text: 'Folder 2.1', level: 1, parents: ['Folder 2'] },
];

const ViewModel = (() => {
	const showErrors = observable(false);

	const list1 = useList(items);
	const list2 = useList(items);
	const list3 = useList(items);
	const list4 = useList(items);
	const list5 = useList(items);
	const list6 = useList(items);
	const list7 = useList(items);
	const list8 = useList(items);

	const value1 = useSelectValue();
	const value2 = useSelectValue(2);
	const value3 = useSelectValue();
	const value4 = useSelectValue();
	const value7 = useSelectValue();

	const disableValue = observable(false);

	const multiple1 = useSelectValues([2, 3]);
	const multiple2 = useSelectValues();
	const multiple8 = useSelectValues([]);

	const disableMultiple = observable(false);

	const grouppedList1 = useList(grouppedItems);
	const grouppedValue1 = useSelectValues();
	const grouppedResultFormatter1 = (item) => {
		return `<span>${item.groupName}</span>/${item.text}`;
	};

	const grouppedList2 = useList(itemsTree);
	const grouppedValue2 = useSelectValues();
	const { disabledOptions: treeDisabled } = useGrouppedSelect(
		grouppedList2,
		grouppedValue2
	);

	const grouppedResultFormatter2 = (item) => {
		const items = (item.parents || []).map((p) => `<span>${p}</span>`);
		items.push(item.text);
		return items.join('/');
	};

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
		list7,
		list8,

		value1,
		value2,
		value3,
		value4,
		value7,

		disableValue,

		multiple1,
		multiple2,
		multiple8,

		disableMultiple,

		grouppedList1,
		grouppedList2,

		grouppedValue1,
		grouppedValue2,
		treeDisabled,

		grouppedResultFormatter1,
		grouppedResultFormatter2,

		validator,
	};
})();

const root = document.getElementById('app');

applyBindings(ViewModel, root);
