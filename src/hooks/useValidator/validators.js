import { getClientDate } from "@/utils/date/format";
import {
  isValidClientDate,
} from "@/utils/date/validate";

export const VALIDATORS = {
  required: (v) => {
    if (Array.isArray(v)) return v.length > 0;
    return !!v;
  },
  minLength: (v, param) => {
    if (v === undefined && v === null) return false;
    return v.length >= param;
  },
  maxLength: (v, param) => {
    if (v === undefined && v === null) return false;
    return v.length <= param;
  },
  length: (v, param) => {
    if (v === undefined && v === null) return false;
    return v.length === param;
  },
  regex: (v, param) => {
    return param.test(v);
  },
  date: (v) => isValidClientDate(v),
  period: (v, ranges) => {
    if (!v) return true;
    if (ranges && ranges.find((r) => r.name === v)) return true;
    const [from, to] = v.split("-");
    return isValidClientDate(from) && (!to || isValidClientDate(to));
  },
  periodValue: (v, ranges) => {
    if (!v) return true;
    if (ranges && ranges.find((r) => r.name === v)) return true;
    const [from, to] = v.split("-");
    const fromDate = getClientDate(from);
    const toDate = getClientDate(to);
    return toDate >= fromDate;
  }
};
