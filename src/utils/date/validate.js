import { getClientDate } from "./format";

const CLIENT_DATE_REGEX = /^\d{2}\.\d{2}.\d{4}$/;

export function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

export function isValidClientDate(dateString) {
  if (!dateString) return true;

  return CLIENT_DATE_REGEX.test(dateString);
}

export function isValidClientPeriod(periodString) {
  if (!periodString) return true;
  const [from, to] = periodString.split("-");

  if (!CLIENT_DATE_REGEX.test(from)) return false;

  if (!to) return true;

  if (!CLIENT_DATE_REGEX.test(to)) return false;

  const fromDate = getClientDate(from);
  const toDate = getClientDate(to);

  if (!isValidDate(fromDate) || !isValidDate(toDate)) return false;

  return fromDate <= toDate;
}
