import { acceptHMRUpdate, defineStore } from 'pinia';
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
		activeTimeframe: 'day',
		work: [],
		play: [],
		study: [],
		exercise: [],
		social: [],
		'self care': [],
	}),
	actions: {
		changeTimeframe(newTimeframe: timeframe) {
			this.activeTimeframe = newTimeframe;
		},
		addTime(minutes: number, activity: string) {
			const today = new Date(new Date().toDateString());
			if (
				!this[activity][0] ||
				today.getTime() !== new Date(this[activity][0].date).getTime()
			)
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
				if (
					state[activity][0] &&
					today.getTime() === new Date(state[activity][0].date).getTime()
				)
					times[0] = state[activity][0].time;
				if (
					state[activity][1] &&
					yesterday.getTime() === new Date(state[activity][1].date).getTime()
				)
					times[1] = state[activity][1].time;
				if (
					state[activity][0] &&
					yesterday.getTime() === new Date(state[activity][0].date).getTime()
				)
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
	persist: true,
});

if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useTimeframe, import.meta.hot));
