import { observable, toJS } from 'knockout';

/**
 * useRanges - работа с готовыми интервалами
 * @param {string|null|observable<string|null>} rangeId
 * @param {Array} ranges
 * @returns {useRangesHook}
 */
export function useRanges(rangeId, ranges) {
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
