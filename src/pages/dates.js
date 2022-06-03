import './index';

import { applyBindings, bindingHandlers } from "knockout";

import * as DatePicker from "@/components/DatePicker";
import * as InlineDatePicker from "@/components/InlineDatePicker";
import * as PeriodPicker from "@/components/PeriodPicker";
import * as InlinePeriodPicker from "@/components/InlinePeriodPicker";
import { RANGES } from "@/constants/date/ranges";

import { registerComponent } from "@/utils/engine/registerComponent";
import { useDateValue } from "@/hooks/date/useDateValue";
import { usePeriodValue } from "@/hooks/date/usePeriodValue";
import { useValidator } from "@/hooks/useValidator";

registerComponent("date-picker", DatePicker);
registerComponent("i-date-picker", InlineDatePicker);
registerComponent("period-picker", PeriodPicker);
registerComponent("i-period-picker", InlinePeriodPicker);

const ViewModel = (() => {
  const value1 = useDateValue();
  const value2 = useDateValue("12.05.2022");

  const period1 = usePeriodValue();
  const period2 = usePeriodValue(null, RANGES);
  const period3 = usePeriodValue("14.05.2022-14.06.2022");
  const period4 = usePeriodValue("last-week", RANGES);

  const { state: validator, addField } = useValidator();

  const dateValidator = [
    {
      validate: "required",
      error: "Обязательное поле"
    },
    {
      validate: "date",
      error: "Некорректное значение"
    }
  ];
  const periodValidator = [
    {
      validate: "required",
      error: "Обязательное поле"
    },
    {
      validate: "period",
      param: RANGES,
      error: "Некорректный формат"
    },
    {
      validate: "periodValue",
      param: RANGES,
      error: "Некорректный период"
    }
  ];

  addField("date1", value1.textValue, dateValidator);
  addField("date2", value2.textValue, dateValidator);
  addField("period1", period1.textValue, periodValidator);
  addField("period2", period2.textValue, periodValidator);

  return {
    value1,
    value2,
    period1,
    period2,
    period3,
    period4,
    validator
  };
})();

const root = document.getElementById("app");

applyBindings(ViewModel, root);
