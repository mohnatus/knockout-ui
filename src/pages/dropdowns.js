import './index';

import { applyBindings } from 'knockout';

const ViewModel = (() => {
	return {};
})();

const root = document.getElementById('app');

applyBindings(ViewModel, root);
