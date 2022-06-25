import { toJS } from "knockout";

import { formatClientDate } from "@/utils/date/format";

export function getDate(moment) {
  const value = toJS(moment);
  if (!value) return null;
  const date = new Date(value);
  return formatClientDate(date);
}
