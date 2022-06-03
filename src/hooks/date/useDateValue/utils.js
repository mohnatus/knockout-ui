import { formatClientDate, getClientDate } from "@/utils/date/format";

export function convertMomentToText(moment) {
  if (!moment) return "";
  const date = new Date(moment);
  return formatClientDate(date);
}

export function convertTextToMoment(text) {
  if (!text) return null;
  const date = getClientDate(text);
  return +date;
}
