import { computed, isObservable, observable, toJS } from 'knockout';

import { getElementEmitter } from '@/utils/emitEvent';
import { useCalendar } from '@/hooks/date/useCalendar';

/**
 * MonthCalendar Component ViewModel
 * @param {MonthCalendarComponentParams} params
 * @param {HTMLElement} element
 * @returns {MonthCalendarComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-month-calendar');
	const emitter = getElementEmitter(element);

	const { month, selected, selectedPeriod } = params;
	const { days, setMonth, dispose: disposeCalendar } = useCalendar(month());

	const hoverDay = isObservable(params.hoverDay)
		? params.hoverDay
		: observable(null);

	const periodStart = computed(() => {
		if (!selectedPeriod) return null;
		const period = selectedPeriod();
		return period[0];
	});

	const periodEnd = computed(() => {
		if (!selectedPeriod) return null;
		if (!periodStart()) return null;
		const period = selectedPeriod();
		if (period[1]) return period[1];
		return hoverDay();
	});

	// checks

	const isSelected = (day) => {
		if (selected) return day.moment === toJS(selected);
	};

	const isInRange = (day) => {
		if (!selectedPeriod) return false;

		const _from = periodStart();
		const _to = periodEnd();

		if (!_from) return false;

		if (day.moment === _from) return true;
		if (_to && _to < _from) return false;

		if (day.moment === _to) return true;

		if (day.moment > _from && day.moment < _to) return true;

		return false;
	};

	const isFirstDay = (day) => {
		if (selectedPeriod) {
			const [from] = toJS(selectedPeriod);
			return day.moment === from;
		}
	};

	const isLastDay = (day) => {
		if (selectedPeriod) {
			const period = toJS(selectedPeriod);
			return day.moment === period[1];
		}
	};

	// subscriptions

	const monthSb = month.subscribe((v) => {
		setMonth(v);
	});

	// methods

	const onClick = (day) => {
		emitter('select', day);
	};

	const onHover = (day) => {
		hoverDay(day.moment);
	};

	// dispose

	const dispose = () => {
		monthSb.dispose();
		periodStart();
		periodEnd.dispose();
		disposeCalendar();
	};

	return {
		days,

		isSelected,
		isInRange,
		isFirstDay,
		isLastDay,

		onClick,
		onHover,
		dispose,
	};
}
