import { cloneDate } from ".";

/**
 * @param {Date} date
 * @param {Number} days
 * @returns {Date}
 */
export function addDays(date, days) {
  const _d = cloneDate(date);
  _d.setDate(_d.getDate() + days);
  return _d;
}

/**
 * @param {Date} date
 * @param {Number} days
 * @returns {Date}
 */
export function addMonths(date, months) {
  const _d = cloneDate(date);
  _d.setMonth(_d.getMonth() + months);
  return _d;
}

/**
 * @param {Date} date
 * @returns {Date}
 */
export function getStartOfDay(date) {
  const _d = cloneDate(date);
  _d.setHours(0, 0, 0, 0);
  return _d;
}

/**
 * @param {Date} date
 * @returns {Date}
 */
export function getStartOfMonth(date) {
  const _d = cloneDate(date);
  _d.setDate(1);
  return getStartOfDay(_d);
}

/**
 * @param {Date} date
 * @returns {Date}
 */
export function getEndOfMonth(date) {
  const _d = cloneDate(date);
  _d.setMonth(_d.getMonth() + 1);
  _d.setDate(0);
  return getStartOfDay(_d);
}

/**
 * @param {Date} date
 * @returns {Date}
 */
export function getStartOfWeek(date) {
  const _d = cloneDate(date);
  const day = _d.getDay();

  let startOfWeek = _d;

  // sunday
  if (day === 0) {
    startOfWeek = addDays(_d, -6);
  } else if (day !== 1) {
    startOfWeek = addDays(_d, 1 - day);
  }

  return getStartOfDay(startOfWeek);
}

/**
 * @param {Date} date
 * @returns {Date}
 */
export function getEndOfWeek(date) {
  const _d = cloneDate(date);
  const day = _d.getDay();

  let endOfWeek = _d;

  if (day > 0) {
    endOfWeek = addDays(_d, 7 - day);
  }

  return getStartOfDay(endOfWeek);
}
