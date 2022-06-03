import { START_OF_TODAY } from "./constants";
import { getStartOfDay } from "./manipulations";

export function getDate(date) {
  if (date instanceof Date) return date;
  if (typeof date === "number") return new Date(date);
  return date;
}

/**
 * @param {Date} date
 * @returns {Date}
 */
export function cloneDate(date) {
  return new Date(+date);
}

/**
 * @param {Date} date
 * @returns {Boolean}
 */
export function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

/**
 * @param {Date} date
 * @returns {Boolean}
 */
export function isToday(date) {
  const _d = getStartOfDay(date);
  return +_d === START_OF_TODAY;
}
