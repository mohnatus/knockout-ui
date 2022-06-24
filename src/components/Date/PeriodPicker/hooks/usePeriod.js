import { computed, observable, toJS } from 'knockout';

import { useSubscriptions } from '@/hooks/useSubscriptions';

/**
 * usePeriod - работа с оригинальным значением контрола
 * @param {observable<PeriodMoments>} value
 * @returns {usePeriodHook}
 */
export function usePeriod(value) {
	const localValue = observable(toJS(value));

	const valueSb = value.subscribe((v) => {
		if (JSON.stringify(v) !== JSON.stringify(localValue())) {
			localValue(v);
		}
	});

	const from = computed(() => {
		const _v = toJS(localValue);
		return _v && _v[0];
	});

	const to = computed(() => {
		const _v = toJS(localValue);
		return _v && _v[1];
	});

	const {
		subscribe,
		trigger,
		dispose: disposeSubscriptions,
	} = useSubscriptions();

	const fromSb = from.subscribe((v) => {
		trigger('from', v, [v, to()]);
	});

	const toSb = to.subscribe((v) => {
		trigger('to', v, [from(), v]);
	});

	const dispose = () => {
		valueSb.dispose();
		fromSb.dispose();
		toSb.dispose();
		disposeSubscriptions();
	};

	return {
		localValue,
		from,
		to,
		onPeriodChange: subscribe,
		setPeriodComponent(moment) {
			const [from, to] = toJS(localValue);

			if (!from) {
				localValue([moment, null]);
				return;
			}

			if (to) {
				localValue([moment, null]);
				return;
			}

			if (moment >= from) {
				localValue([from, moment]);
				return;
			}

			localValue([moment, null]);
		},
		dispose,
	};
}
