import { defineStore } from 'pinia';
export type timeframe = 'day' | 'week' | 'month';
export interface Day {
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
			{ date: '2022/07/23', time: 8 },
			{ date: '2022/07/20', time: 4 },
			{ date: '2022/07/19', time: 3 },
			{ date: '2022/07/18', time: 3 },
			{ date: '2022/07/17', time: 4 },
			{ date: '2022/07/16', time: 1 },
			{ date: '2022/07/15', time: 1 },
			{ date: '2022/07/14', time: 1 },
			{ date: '2022/07/10', time: 1 },
			{ date: '2022/07/05', time: 1 },
			{ date: '2022/07/04', time: 1 },
			{ date: '2022/07/03', time: 1 },
			{ date: '2022/07/01', time: 2 },
			{ date: '2022/06/20', time: 1 },
			{ date: '2022/05/19', time: 2 },
		],
		play: [
			{ date: '2022/07/23', time: 4 },
			{ date: '2022/07/22', time: 3 },
			{ date: '2022/07/18', time: 3 },
			{ date: '2022/07/17', time: 4 },
			{ date: '2022/07/05', time: 1 },
			{ date: '2022/07/04', time: 1 },
			{ date: '2022/07/03', time: 1 },
			{ date: '2022/07/01', time: 2 },
			{ date: '2022/06/20', time: 1 },
			{ date: '2022/06/19', time: 2 },
		],
		study: [
			{ date: '2022/07/22', time: 1 },
			{ date: '2022/07/01', time: 2 },
			{ date: '2022/06/20', time: 1 },
			{ date: '2022/06/19', time: 2 },
		],
		exercise: [
			{ date: '2022/07/22', time: 4 },
			{ date: '2022/07/14', time: 7 },
			{ date: '2022/07/10', time: 1 },
			{ date: '2022/07/05', time: 1 },
		],
		social: [
			{ date: '2022/07/23', time: 4 },
			{ date: '2022/07/19', time: 3 },
			{ date: '2022/07/05', time: 1 },
			{ date: '2022/07/04', time: 1 },
			{ date: '2022/07/03', time: 1 },
			{ date: '2022/07/01', time: 2 },
			{ date: '2022/06/20', time: 1 },
			{ date: '2022/06/19', time: 2 },
		],
		'self care': [
			{ date: '2022/07/22', time: 4 },
			{ date: '2022/07/16', time: 4 },
			{ date: '2022/07/10', time: 1 },
			{ date: '2022/07/03', time: 1 },
			{ date: '2022/06/19', time: 2 },
		],
	}),
	actions: {
		changeTimeframe(newTimeframe: timeframe) {
			this.activeTimeframe = newTimeframe;
		},
		addTime(minutes: number, activity: string) {
			const today = new Date(new Date().toDateString());
			if (today.getTime() !== new Date(this[activity][0].date).getTime())
				this[activity].unshift({
					date: today.toLocaleDateString('sv').replaceAll('-', '/'),
					time: 0,
				});
			this[activity][0].time += minutes;
		},
	},
	getters: {
		day: (state) => {
			const today = new Date(new Date().toDateString());
			const yesterday = new Date(today);
			yesterday.setDate(yesterday.getDate() - 1);
			return (activity) => {
				let times = [0, 0];
				if (today.getTime() === new Date(state[activity][0].date).getTime())
					times[0] = state[activity][0].time;
				if (yesterday.getTime() === new Date(state[activity][1].date).getTime())
					times[1] = state[activity][1].time;
				if (yesterday.getTime() === new Date(state[activity][0].date).getTime())
					times[1] = state[activity][0].time;
				return times;
			};
		},
		week: (state) => {
			const thisweek = new Date(new Date().toDateString());
			const pastweek = new Date(thisweek);
			thisweek.setDate(thisweek.getDate() - 7);
			pastweek.setDate(thisweek.getDate() - 7);
			return (activity: string) => {
				let hours: [number, number] = [0, 0];
				for (let day of state[activity]) {
					if (thisweek.getTime() < new Date(day.date).getTime()) {
						hours[0] += day.time;
						continue;
					}
					if (pastweek.getTime() < new Date(day.date).getTime())
						hours[1] += day.time;
					else break;
				}
				return hours;
			};
		},
		month: (state) => {
			const thismonth = new Date(new Date().toDateString());
			const pastmonth = new Date(thismonth);
			pastmonth.setMonth(thismonth.getMonth() - 1);
			return (activity: string) => {
				let hours: [number, number] = [0, 0];
				for (let day of state[activity]) {
					if (thismonth.getMonth() == new Date(day.date).getMonth()) {
						hours[0] += day.time;
						continue;
					}
					if (pastmonth.getMonth() == new Date(day.date).getMonth())
						hours[1] += day.time;
					else {
						state[activity].length = state[activity].indexOf(day); //remove days if pass 2 months
						break;
					}
				}
				return hours;
			};
		},
	},
	// persist: true,
});
