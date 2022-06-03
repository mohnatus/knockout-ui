/**
 * useInputs - внутренние поля пикера
 *
 * fromInput {observable<String>}
 * toInput {observable<String>}
 * fromInputValid {observable<Boolean>}
 * toInputValid {observable<Boolean>}
 *
 * localFrom {observable<Moment>}
 * localTo {observable<Moment>}
 *
 * setFromInput {function(<Moment>)}
 * setToInput {function(<Moment>)}
 * dispose {function}
 */

import { observable, toJS } from "knockout";
import { useDateInput } from "@/hooks/date/useDateInput";
import { getDate } from "../utils";

export function useInputs(value, onChange) {
  const [from, to] = toJS(value);

  const localFrom = observable(from);
  const localTo = observable(to);

  const valueSb = value.subscribe((v) => {
    const [from, to] = v;

    if (from !== localFrom()) localFrom(from);
    if (to !== localTo()) localTo(to);
  });

  const {
    inputValue: fromInput,
    isValid: fromInputValid,
    dispose: fromDispose
  } = useDateInput(localFrom);

  const {
    inputValue: toInput,
    isValid: toInputValid,
    dispose: toDispose
  } = useDateInput(localTo, (v) => {
    return v >= localFrom();
  });

  const fromSb = localFrom.subscribe((v) => {
    value([v, localTo()]);
    if (typeof onChange === "function") {
      onChange();
    }
  });

  const toSb = localTo.subscribe((v) => {
    value([localFrom(), v]);
    if (typeof onChange === "function") {
      onChange();
    }
  });

  return {
    fromInput,
    fromInputValid,
    toInput,
    toInputValid,

    localFrom,
    localTo,

    setFromInput(moment) {
      fromInput(getDate(moment));
    },
    setToInput(moment) {
      toInput(getDate(moment));
    },

    dispose() {
      fromDispose();
      toDispose();
      valueSb.dispose();
      fromSb.dispose();
      toSb.dispose();
    }
  };
}
