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

/**
 * @typedef {Object} PeriodPickerActionsParams
 * @property {observable<boolean>} modal
 * @property {function} apply
 * @property {function} reset
 */

/**
 * @typedef {Object} PeriodPickerControlParams
 * @property {observable<PeriodMoment>} month
 * @property {function} toPrevMonth
 * @property {function} toNextMonth
 */

/**
 * @typedef {Object} PeriodPickerFieldParams
 * @property {observable<string>} inputValue
 */

/**
 * @typedef {Object} PeriodPickerResultParams
 * @property {observable<string>} value
 * @property {boolean} clearable
 * @property {observable<boolean>} disabled
 * @property {string|observable<string>} placeholder
 */

/**
 * @typedef {Object} PeriodPickerParams
 * @property {PeriodValue} value
 * @property {string|observable<string>} placeholder
 * @property {observable<boolean>} disabled
 * @property {boolean} clearable
 * @property {Object} dropdownParams
 * @property {string} resultComponentName
 */

/**
 * @typedef {Object} PeriodPickerActions
 * @property {observable<boolean>} modal
 * @property {function} apply
 * @property {function} reset
 */

/**
 * @typedef {Object} PeriodPickerControl
 * @property {observable<PeriodMoment>} month
 * @property {function} toPrevMonth
 * @property {function} toNextMonth
 */

/**
 * @typedef {Object} PeriodPickerField
 * @property {observable<string>} inputValue
 */

/**
 * @typedef {Object} PeriodPickerResult
 * @property {observable<string>} value
 * @property {boolean} clearable
 * @property {observable<boolean>} disabled
 * @property {string|observable<string>} placeholder
 * @property {function} onClick
 * @property {function} clear
 */

/**
 * @typedef {Object} PeriodPicker
 * @property {string} _id
 * @property {observable<string>} textValue
 * @property {observable<string>} fromInput
 * @property {observable<string>} toInput
 * @property {observable<PeriodMoments>} localValue
 * @property {PeriodRange[]} ranges
 * @property {observable<string|null>} localRangeId
 * @property {observable<Date>} month
 * @property {observable<Date>} secondMonth
 * @property {observable<string>} monthName
 * @property {observable<string>} secondMonthName
 * @property {function} prevMonth
 * @property {function} nextMonth
 * @property {boolean} clearable
 * @property {observable<boolean>} disabled
 * @property {string|observable<string>} placeholder
 * @property {function} select
 * @property {function} reset
 * @property {function} save
 * @property {function} setRange
 * @property {function} toggleComponent
 * @property {boolean} withRanges
 * @property {observable<boolean>} showCalendar
 * @property {observable<boolean>} modal
 * @property {observable<boolean>} smallModal
 * @property {observable<string|null>} visibleComponent
 * @property {DropdownParams} dropdownParams
 * @property {string} resultComponent
 * @property {Object} resultEvents
 * @property {function} dispose
 */
