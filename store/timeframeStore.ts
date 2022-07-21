import { defineStore } from 'pinia';
export type timeframe = 'day' | 'week' | 'month';
interface Day {
	date: string;
	time: number;
}
export interface TimeframeStore {
	activeTimeframe: timeframe;
	work: Day[];
	play: Day[];
	study: Day[];
	exercise: Day[];
	social: Day[];
	'self care': Day[];
}

export const useTimeframe = defineStore('timeframe', {
	state: (): TimeframeStore => ({
		activeTimeframe: 'week',
		work: [
			{ date: '2021/07/20', time: 4 },
			{ date: '2021/07/19', time: 3 },
			{ date: '2021/07/18', time: 3 },
			{ date: '2021/07/17', time: 4 },
			{ date: '2021/07/16', time: 4 },
			{ date: '2021/07/15', time: 4 },
			{ date: '2021/07/14', time: 7 },
			{ date: '2021/07/10', time: 1 },
			{ date: '2021/07/05', time: 1 },
			{ date: '2021/07/04', time: 1 },
			{ date: '2021/07/03', time: 1 },
			{ date: '2021/07/01', time: 2 },
			{ date: '2021/06/20', time: 1 },
			{ date: '2021/06/19', time: 2 },
		],
		play: [
			{ date: '2021/07/20', time: 4 },
			{ date: '2021/07/19', time: 3 },
			{ date: '2021/07/18', time: 3 },
			{ date: '2021/07/17', time: 4 },
			{ date: '2021/07/05', time: 1 },
			{ date: '2021/07/04', time: 1 },
			{ date: '2021/07/03', time: 1 },
			{ date: '2021/07/01', time: 2 },
			{ date: '2021/06/20', time: 1 },
			{ date: '2021/06/19', time: 2 },
		],
		study: [
			{ date: '2021/07/03', time: 1 },
			{ date: '2021/07/01', time: 2 },
			{ date: '2021/06/20', time: 1 },
			{ date: '2021/06/19', time: 2 },
		],
		exercise: [
			{ date: '2021/07/15', time: 4 },
			{ date: '2021/07/14', time: 7 },
			{ date: '2021/07/10', time: 1 },
			{ date: '2021/07/05', time: 1 },
		],
		social: [
			{ date: '2021/07/20', time: 4 },
			{ date: '2021/07/19', time: 3 },
			{ date: '2021/07/05', time: 1 },
			{ date: '2021/07/04', time: 1 },
			{ date: '2021/07/03', time: 1 },
			{ date: '2021/07/01', time: 2 },
			{ date: '2021/06/20', time: 1 },
			{ date: '2021/06/19', time: 2 },
		],
		'self care': [
			{ date: '2021/07/20', time: 4 },
			{ date: '2021/07/16', time: 4 },
			{ date: '2021/07/10', time: 1 },
			{ date: '2021/07/03', time: 1 },
			{ date: '2021/06/19', time: 2 },
		],
	}),
	actions: {
		changeTimeframe(newTimeframe: timeframe) {
			this.activeTimeframe = newTimeframe;
		},
	},
	getters: {
		day(state) {
			let hours = [];
			const today = new Date();
			const yesterday = new Date(today);
			yesterday.setDate(yesterday.getDate() - 1);
			return (activity) => {
				if (today.getTime() === new Date(state[activity][0].date).getTime())
					hours.push(state[activity][0].time);
				else hours.push(0);
				if (yesterday.getTime() === new Date(state[activity][1].date).getTime())
					hours.push(state[activity][1].time);
				else hours.push(0);
				return hours;
			};
		},
		week(state): (string) => [number, number] {
			const thisweek = new Date();
			const pastweek = new Date(thisweek);
			thisweek.setDate(thisweek.getDate() - 7);
			pastweek.setDate(thisweek.getDate() - 14);
			return (activity: string) => {
				let hours: [number, number] = [0, 0];
				for (let i = 0; i < 14; i++) {
					if (
						thisweek.getTime() < new Date(state[activity][i].date).getTime()
					) {
						hours[0] += state[activity][i].time;
						continue;
					}
					if (pastweek.getTime() < new Date(state[activity][i].date).getTime())
						hours[1] += state[activity][i].time;
					else break;
				}
				return hours;
			};
		},
		month(state) {},
	},
	// persist: true,
});
