import { cloneDate } from ".";
import { MS_IN_DAY } from "./constants";
import { addDays, getStartOfDay } from "./manipulations";

/**
 * @param {Date} date
 * @returns {Date[]}
 */
export function getDays(from, to) {
  const days = [];

  let startOfInterval = getStartOfDay(from);
  let endOfInterval = getStartOfDay(to);

  let _current = cloneDate(startOfInterval);

  while (+_current <= +endOfInterval) {
    days.push(_current);
    _current = addDays(_current, 1);
  }

  return days;
}

/**
 * @param {Date} date1
 * @param {Date} date2
 * @returns {Number}
 */
export function getDiffInDays(date1, date2) {
  const _d1 = +getStartOfDay(date1);
  const _d2 = +getStartOfDay(date2);

  const diff = _d2 - _d1;

  return diff / MS_IN_DAY;
}
