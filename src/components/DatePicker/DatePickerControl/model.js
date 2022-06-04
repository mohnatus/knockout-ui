import { computed } from 'knockout';
import { getDateComponents } from '@/utils/date/format';
import { MONTHS } from '@/constants/date/months';
import { addMonths } from '@/utils/date/manipulations';

/**
 * DatePickerControl Component ViewModel
 * @param {DatePickerControlComponentParams} params
 * @param {HTMLElement} element
 * @returns {DatePickerControlComponent}
 */
export function ViewModel(params, element) {
	element.classList.add('c-date-picker-control');

	const { month } = params;

	const monthName = computed(() => {
		const _month = month();
		if (!_month) return '';
		const { month: monthIndex, year } = getDateComponents(_month);

		return `${MONTHS[monthIndex]} ${year}`;
	});

	return {
		monthName,

		prevMonth() {
			month(addMonths(month(), -1));
		},
		nextMonth() {
			month(addMonths(month(), 1));
		},

		dispose() {
			monthName.dispose();
		},
	};
}
