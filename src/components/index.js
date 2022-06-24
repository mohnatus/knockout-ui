import { registerComponents } from '../utils/engine/registerComponent';

import * as Dropdown from './Dropdown';
import * as FormField from './FormField';
import * as Icon from './Icon';
import * as Portal from './Portal';

registerComponents({
	'c-portal': Portal,
	'c-dropdown': Dropdown,
	'c-icon': Icon,
	'c-form-field': FormField,
});
