import { isObservable } from 'knockout';

function init(element, valueAccessor) {
	if (isObservable(valueAccessor)) {
		valueAccessor(element);
	}
}

export { init }