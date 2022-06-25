/**
 * @typedef {Object} useSubsciptionsHook
 * @property {Function} subscribe - добавление коллбэка
 * @property {Function} trigger - вызов добавленных коллбэков
 * @property {Function} dispose
 */

/**
 * useSubsciptions - массив подписок
 * @returns {useSubsciptionsHook}
 */
export function useSubscriptions() {
	const cbs = [];

	const subscribe = (fn) => cbs.push(fn);

	const trigger = (...params) => {
		cbs.forEach((cb) => cb(...params));
	};

	const dispose = () => {
		cbs.lenth = 0;
	};

	return { subscribe, trigger, dispose };
}
