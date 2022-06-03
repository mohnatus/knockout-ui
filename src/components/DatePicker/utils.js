import { toJS } from "knockout";
import { TODAY } from "@/constants/date/days";
import { formatClientDate } from "@/utils/date/format";
import { getStartOfMonth } from "@/utils/date/manipulations";

export function getInputValue(value) {
  const _v = toJS(value);

  if (!_v) return "";
  const date = new Date(value);
  return formatClientDate(date);
}

export function getMonth(moment) {
  const _m = toJS(moment);
  const date = _m ? new Date(_m) : TODAY;
  return getStartOfMonth(date);
}
