import { toJS } from "knockout";
import { TODAY } from "@/constants/date/days";
import { formatClientDate } from "@/utils/date/format";
import { getStartOfMonth } from "@/utils/date/manipulations";

/**
 * getInputValue
 * @param {number|observable<number>} value
 * @returns {string} client-date formatted string
 */
export function getInputValue(value) {
  const _v = toJS(value);

  if (!_v) return "";
  const date = new Date(value);
  return formatClientDate(date);
}

/**
 * getMonth
 * @param {number|observable<number>} moment
 * @returns {Date} start of month date
 */
export function getMonth(moment) {
  const _m = toJS(moment);
  const date = _m ? new Date(_m) : TODAY;
  return getStartOfMonth(date);
}
