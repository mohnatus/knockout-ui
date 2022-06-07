/**
 * @typedef {Object} useInputsHook
 * @property {observable<String>} fromInput
 * @property {observable<String>} toInput
 * @property {observable<Boolean>} fromInputValid
 * @property {observable<Boolean>} toInputValid
 * @property {observable<PerioMoment>} localFrom
 * @property {observable<PerioMoment>} localTo
 * @property {function} setFromInput
 * @property {function} setToInput
 * @property {function} dispose
 */

/**
 * @typedef {Object} useMonthsHook
 * @property {observable<Date>} month - первый календарь
 * @property {observable<string>} monthName
 * @property {observable<Date>} secondMonth - второй календарь
 * @property {observable<string>} secondMonthName
 * @property {function} updateMonth - установка активного месяца (первого)
 * @property {function} prevMonth - к предыдущему месяцу
 * @property {function} nextMonth - к следующему месяцу
 * @property {function} resetMonth - сброс к текущему
 * @property {function} dispose
 */

/**
 * @typedef {Object} usePeriodHook
 * @property  {observable<PeriodMoments>} localValue - внутренняя копия актуального значения
 * @property {observable<PerioMoment>} from
 * @property {observable<PerioMoment>} to
 * @property  {function} onPeriodChange - для подписки на изменение компонентов
 * @property  {function} setPeriodComponent - при выборе даты
 * @property  {function} dispose
 */

/**
 * @typedef {Object} useRangesHook
 * @property {PeriodRange[]} ranges - список интервалов
 * @property {observable<string|null>} localRangeId - локальная копия выбранного интервала
 * @property {observable<string|null>} rangeId - выбранный интервал
 * @property {function} dispose
 */
