import { registerBinding } from '@/utils/engine/registerBinding';

import * as Dropdown from './dropdown';
import * as Log from './log';
import * as AutoInput from './autoInput';
import * as Scrollable from './scrollable';
import * as Element from './element';

registerBinding('bDropdown', Dropdown);
registerBinding('bLog', Log);
registerBinding('bAutoInput', AutoInput);
registerBinding('bScrollable', Scrollable);
registerBinding('bElement', Element);
