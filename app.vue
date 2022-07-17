<template>
	<div class="bg-slate-900">
		<div
			class="flex gap-8 min-h-screen justify-center items-center container mx-auto"
		>
			<div class="basis-1/4"><Profile /></div>
			<div class="basis-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
				<Card
					v-for="item in data"
					:title="item.title"
					:timeframe="activeTimeframe"
					:current="item.timeframes[activeTimeframe].current"
					:previous="item.timeframes[activeTimeframe].previous"
				/>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTimeframe } from './store/timeframe';
const store = useTimeframe();
const { activeTimeframe } = storeToRefs(store);
</script>
<script lang="ts">
const data = [
	{
		title: 'Work',
		timeframes: {
			day: {
				current: 5,
				previous: 7,
			},
			week: {
				current: 32,
				previous: 36,
			},
			month: {
				current: 103,
				previous: 128,
			},
		},
	},
	{
		title: 'Play',
		timeframes: {
			day: {
				current: 1,
				previous: 2,
			},
			week: {
				current: 10,
				previous: 8,
			},
			month: {
				current: 23,
				previous: 29,
			},
		},
	},
	{
		title: 'Study',
		timeframes: {
			day: {
				current: 0,
				previous: 1,
			},
			week: {
				current: 4,
				previous: 7,
			},
			month: {
				current: 13,
				previous: 19,
			},
		},
	},
	{
		title: 'Exercise',
		timeframes: {
			day: {
				current: 1,
				previous: 1,
			},
			week: {
				current: 4,
				previous: 5,
			},
			month: {
				current: 11,
				previous: 18,
			},
		},
	},
	{
		title: 'Social',
		timeframes: {
			day: {
				current: 1,
				previous: 3,
			},
			week: {
				current: 5,
				previous: 10,
			},
			month: {
				current: 21,
				previous: 23,
			},
		},
	},
	{
		title: 'Self Care',
		timeframes: {
			day: {
				current: 0,
				previous: 1,
			},
			week: {
				current: 2,
				previous: 2,
			},
			month: {
				current: 7,
				previous: 11,
			},
		},
	},
];
</script>
