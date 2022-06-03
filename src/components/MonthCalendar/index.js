/**
 * c-month-calendar
 *
 * календарь на один месяц с выделенной датой или периодом
 *
 * month {observable<Moment>}
 * selected {observable<Moment>}
 * selectedPeriod {observable<[Moment,Moment]>}
 */
import { ViewModel as model } from "./model";
import { template } from "./template";
import "./style.less";

export { model, template };
