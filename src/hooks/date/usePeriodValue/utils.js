import { formatClientDate, getClientDate } from "@/utils/date/format";
import { isValidClientDate } from "@/utils/date/validate";

export function isValidPeriodFormat(period) {
  if (!Array.isArray(period)) return false;
  if (period.length !== 2) return false;

  const [from, to] = period;

  return (!from || typeof from === "number") && (!to || typeof to === "number");
}

export function convertPeriodToText([from, to]) {
  if (!from && !to) return "";
  if (!to || from === to) {
    return formatClientDate(new Date(from));
  }
  return `${formatClientDate(new Date(from))}-${formatClientDate(
    new Date(to)
  )}`;
}

export function comparePeriods([from1, to1], [from2, to2]) {
  return from1 === from2 && to1 === to2;
}

export function formatPeriodString(periodString) {
  const [from, to] = periodString.split("-");

  if (isValidClientDate(from) && isValidClientDate(to)) {
    const fromDate = getClientDate(from);
    const toDate = to ? getClientDate(to) : fromDate;

    const fromMoment = +fromDate;
    const toMoment = +toDate;

    if (toMoment < fromMoment) {
      return null;
    }

    return [fromMoment, toMoment];
  }

  return null;
}
