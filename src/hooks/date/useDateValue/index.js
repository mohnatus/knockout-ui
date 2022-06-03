import { observable } from "knockout";
import { isValidClientDate } from "@/utils/date/validate";
import { convertMomentToText, convertTextToMoment } from "./utils";

/**
 * @param {string|number|null} initialValue
 * @returns {DateValue} DateValue
 */
export function useDateValue(initialValue) {
  const textValue = observable("");
  const moment = observable(null);

  const setMoment = (newMoment) => {
    if (moment() !== newMoment) moment(newMoment);
  };

  const setTextValue = (newValue) => {
    if (textValue() !== newValue) textValue(newValue);
  };

  const textSb = textValue.subscribe((v) => {
    if (!v) {
      setMoment(null);
      return;
    }

    if (isValidClientDate(v)) {
      setMoment(convertTextToMoment(v));
      return;
    }
  });

  const momentSb = moment.subscribe((v) => {
    if (!v) {
      setTextValue("");
      return;
    }

    setTextValue(convertMomentToText(v));
  });

  if (initialValue) {
    if (typeof initialValue === "number") {
      moment(initialValue);
    } else if (typeof initialValue === "string") {
      textValue(initialValue);
    }
  }

  const dispose = () => {
    textSb.dispose();
    momentSb.dispose();
  };

  return {
    textValue,
    moment,
    dispose
  };
}
