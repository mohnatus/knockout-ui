/**
 * @typedef {Object} useInputsHook
 * @property {ObservableString} fromInput
 * @property {ObservableString} toInput
 * @property {ObservableBoolean} fromInputValid
 * @property {ObservableBoolean} toInputValid
 * @property {import("knockout").Observable<PerioMoment>} localFrom
 * @property {import("knockout").Observable<PerioMoment>} localTo
 * @property {Function} setFromInput
 * @property {Function} setToInput
 * @property {Function} dispose
 */

/**
 * @typedef {Object} useMonthsHook
 * @property {ObservableDate} month - первый календарь
 * @property {ObservableString} monthName
 * @property {ObservableDate} secondMonth - второй календарь
 * @property {ObservableString} secondMonthName
 * @property {Function} updateMonth - установка активного месяца (первого)
 * @property {Function} prevMonth - к предыдущему месяцу
 * @property {Function} nextMonth - к следующему месяцу
 * @property {Function} resetMonth - сброс к текущему
 * @property {Function} dispose
 */

/**
 * @typedef {Object} usePeriodHook
 * @property  {import("knockout").Observable<PeriodMoments>} localValue - внутренняя копия актуального значения
 * @property {import("knockout").Observable<PerioMoment>} from
 * @property {import("knockout").Observable<PerioMoment>} to
 * @property  {Function} onPeriodChange - для подписки на изменение компонентов
 * @property  {Function} setPeriodComponent - при выборе даты
 * @property  {Function} dispose
 */

/**
 * @typedef {Object} useRangesHook
 * @property {PeriodRange[]} ranges - список интервалов
 * @property {(ObservableString|import("knockout").Observable<null>)} localRangeId - локальная копия выбранного интервала
 * @property {(ObservableString|import("knockout").Observable<null>)} rangeId - выбранный интервал
 * @property {Function} dispose
 */
