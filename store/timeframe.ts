import { defineStore } from 'pinia';
export type timeframe = 'day' | 'week' | 'month';
interface Category {
	day: number[];
	week: [number, number];
	month: [number, number];
}
interface TimeframeStore {
	activeTimeframe: timeframe;
	work: Category;
	play: Category;
	study: Category;
	exercise: Category;
	social: Category;
	'self care': Category;
}

export const useTimeframe = defineStore('timeframe', {
	state: (): TimeframeStore => ({
		activeTimeframe: 'week',
		work: {
			day: [4, 3, 3, 6, 4, 4, 7, 1, 1, 1, 1, 2, 1, 2],
			week: [9, 31],
			month: [40, 0],
		},
		play: {
			day: [4, 3, 3, 6, 4, 4, 7, 1, 1, 1, 1, 2, 1, 2],
			week: [9, 31],
			month: [40, 0],
		},
		study: {
			day: [4, 3, 3, 6, 4, 4, 7, 1, 1, 1, 1, 2, 1, 2],
			week: [9, 31],
			month: [40, 0],
		},
		exercise: {
			day: [4, 3, 3, 6, 4, 4, 7, 1, 1, 1, 1, 2, 1, 2],
			week: [9, 31],
			month: [40, 0],
		},
		social: {
			day: [4, 3, 3, 6, 4, 4, 7, 1, 1, 1, 1, 2, 1, 2],
			week: [9, 31],
			month: [40, 0],
		},
		'self care': {
			day: [4, 3, 3, 6, 4, 4, 7, 1, 1, 1, 1, 2, 1, 2],
			week: [9, 31],
			month: [40, 0],
		},
	}),
	actions: {
		changeTimeframe(newTimeframe: timeframe) {
			this.activeTimeframe = newTimeframe;
		},
	},
	persist: true,
});
