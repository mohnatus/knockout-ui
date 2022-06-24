import { RANGES } from '@/constants/date/ranges';
import { usePeriodValue } from '.';

describe('period value', () => {
	describe('установка исходного значения', () => {
		test('строка с периодом', () => {
			const { textValue } = usePeriodValue('22.02.2022-24.02.2022');
			expect(textValue()).toBe('22.02.2022-24.02.2022');
		});
		test('строка с датой', () => {
			const { textValue } = usePeriodValue('22.02.2022');
			expect(textValue()).toBe('22.02.2022');
		});
	});
});

describe('period value + ranges', () => {
	describe('установка исходного значения', () => {
		test('название интервала', () => {
			const range = RANGES.find((r) => r.id === 'last-week');
			const { textValue } = usePeriodValue(range.id, RANGES);
			expect(textValue()).toBe(range.name);
		});
	});
});
