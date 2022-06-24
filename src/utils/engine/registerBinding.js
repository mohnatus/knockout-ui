import { bindingHandlers } from 'knockout';

export function registerBinding(bindingName, bindingData) {
	bindingHandlers[bindingName] = bindingData;
}

export function registerBindings(bindings) {
	Object.entries(bindings).forEach(([key, value]) =>
		registerBinding(key, value)
	);
}
