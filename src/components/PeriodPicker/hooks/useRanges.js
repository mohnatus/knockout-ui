/**
 * useRanges - работа с готовыми интервалами
 *
 * ranges {Array} - список интервалов
 * localRangeId {observable<string|null>} - локальная копия выбранного интервала
 * rangeId {observable<string|null>} - выбранный интервал
 * dispose {function}
 */

import { observable, toJS } from "knockout";

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
