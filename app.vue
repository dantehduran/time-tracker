<template>
	<div class="bg-slate-900">
		<div
			class="flex gap-8 min-h-screen justify-center items-center container mx-auto flex-col md:flex-row"
		>
			<div class="md:basis-1/4 md:h-[512px] w-full"><Profile /></div>
			<div class="md:basis-3/4 grid md:grid-cols-3 gap-8 w-full">
				<Card
					v-for="item in data"
					:title="item.title"
					:timeframe="activeTimeframe"
					:icon="item.icon"
					:current="item.timeframes[activeTimeframe].current"
					:previous="item.timeframes[activeTimeframe].previous"
					:color="item.color"
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
		icon: 'ic:baseline-work-history',
		color: 'bg-red-500',
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
		icon: 'icon-park-solid:game-handle',
		color: 'bg-green-400',
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
		icon: 'el:book',
		color: 'bg-sky-400',
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
		icon: 'ic:outline-directions-run',
		color: 'bg-yellow-400',
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
		icon: 'ant-design:message-filled',
		color: 'bg-violet-400',
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
		icon: 'fa-solid:hand-holding-medical',
		color: 'bg-rose-400',
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
