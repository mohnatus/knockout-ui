import { registerBindings } from '../utils/engine/registerBinding';

import * as bAutoInput from './autoInput';
import * as bDropdown from './dropdown';
import * as bElement from './element';
import * as bLog from './log';
import * as bScrollable from './scrollable';

registerBindings({
	bAutoInput,
	bDropdown,
	bElement,
	bLog,
	bScrollable,
});
