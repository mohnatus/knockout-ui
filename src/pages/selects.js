import './index';

import { applyBindings, bindingHandlers, observable } from 'knockout';

import { registerComponent } from '@/utils/engine/registerComponent';
import { useSelectValue } from '../hooks/select/useSelectValue';
import { requiredValidator } from '../constants/validators/required';

const ViewModel = (() => {
	const showErrors = observable(false);

	const list = useList([
		{ id: 1, text: 'Option 1' },
		{ id: 2, text: 'Option 2' },
		{ id: 3, text: 'Option 3' },
		{ id: 4, text: 'Option 4' },
		{ id: 5, text: 'Option 5' },
	]);
  const value1 = useSelectValue();

	const { state: validator, addField } = useValidator(
		showErrors,
		'showValid'
	);

  addField('select1', value1, requiredValidator())

	return {
		showErrors,

		validator,
	};
})();

const root = document.getElementById('app');

applyBindings(ViewModel, root);
