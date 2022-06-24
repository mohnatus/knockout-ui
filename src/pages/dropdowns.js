import './index';

import { applyBindings, bindingHandlers, computed, observable } from 'knockout';


import { registerComponent } from '@/utils/engine/registerComponent';


const ViewModel = (() => {

	return {
		
	};
})();

const root = document.getElementById('app');

applyBindings(ViewModel, root);
