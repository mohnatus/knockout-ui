import { observable, toJS } from 'knockout';

/**
 * useRanges - работа с готовыми интервалами
 * @param {AnyString} [rangeId]
 * @returns {useRangesHook}
 */
export function useRanges(rangeId) {
	const localRangeId = observable(toJS(rangeId));

	const rangeIdSb = rangeId.subscribe((v) => {
		if (v !== localRangeId()) {
			localRangeId(v);
		}
	});

	const dispose = () => {
		rangeIdSb.dispose();
	};

	return { localRangeId, dispose };
}
