<template>
	<div class="rounded-xl w-full" :class="color">
		<div class="h-12 text-gray-600 opacity-50 flex justify-end pr-4">
			<Icon :icon="icon" width="50" height="50" class="rotate-45" />
		</div>
		<div class="p-6 bg-indigo-900 rounded-xl flex flex-col relative">
			<ControlTime
				v-if="timeframe === 'day'"
				class="top-4 right-4 absolute"
				:activity="title"
				@time-change="(value) => (timer = value)"
			/>
			<div class="flex justify-start items-center">
				<h4 class="capitalize text-white text-2xl">{{ title }}</h4>
			</div>
			<div class="mt-6 mb-2">
				<h3 v-if="timer > 0" class="text-white text-5xl tracking-wide mb-2">
					{{ `${timer}mins` }}
				</h3>
				<h3 v-if="timer == 0" class="text-white text-5xl tracking-wide mb-2">
					{{ `${getTimes[timeframe](title)[0]}hrs` }}
				</h3>

				<span class="text-white font-thin">{{
					`last ${timeframe} - ${getTimes[timeframe](title)[1]}hrs `
				}}</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useTimeframe } from '~~/store/timeframeStore';
const store = useTimeframe();
const props = defineProps<{
	title: string;
	timeframe: 'day' | 'week' | 'month';
	icon: string;
	color: string;
}>();
const getTimes = {
	day: store.day,
	week: store.week,
	month: store.month,
};
const timer = ref(0);
</script>
