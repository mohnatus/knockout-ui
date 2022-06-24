/**
 * useDateInput - поле для ввода даты
 *
 * inputValue {observable<string>}
 * isValid {observable<boolean>}
 * dispose {function}
 */

import { observable, toJS } from "knockout";

import { formatClientDate, getClientDate } from "@/utils/date/format";
import { isValidClientDate } from "@/utils/date/validate";

function getInputValueFromDateMoment(moment) {
  const _moment = toJS(moment);
  if (!_moment) return "";
  const date = new Date(_moment);
  return formatClientDate(date);
}

function getMomentFromDateString(dateString) {
  if (!dateString) return null;
  return +getClientDate(dateString);
}

/**
 *
 * @param {observable<Moment>} value
 */

export function useDateInput(value, validatorFn) {
  const inputValue = observable(getInputValueFromDateMoment(value));

  const isValid = observable(true);

  const valueSb = value.subscribe((v) => {
    const newInputValue = getInputValueFromDateMoment(v);
    if (newInputValue !== inputValue()) inputValue(newInputValue);
    isValid(true);
  });

  const inputValueSb = inputValue.subscribe((v) => {
    if (!isValidClientDate(v)) {
      isValid(false);
      return;
    }

    const newMoment = getMomentFromDateString(v);

    if (typeof validatorFn === "function") {
      if (!validatorFn(newMoment)) {
        isValid(false);
        return;
      }
    }

    isValid(true);

    if (value() !== newMoment) {
      value(newMoment);
    }
  });

  const dispose = () => {
    valueSb.dispose();
    inputValueSb.dispose();
  };

  return { inputValue, isValid, dispose };
}
