<template>
	<div class="bg-slate-800 bg-opacity-95">
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
					:color="item.color"
				/>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTimeframe } from '~/store/timeframeStore';
const store = useTimeframe();
const { activeTimeframe } = storeToRefs(store);
</script>
<script lang="ts">
const data = [
	{
		title: 'work',
		icon: 'ic:baseline-work-history',
		color: 'bg-red-500',
	},
	{
		title: 'play',
		icon: 'icon-park-solid:game-handle',
		color: 'bg-green-400',
	},
	{
		title: 'study',
		icon: 'el:book',
		color: 'bg-sky-400',
	},
	{
		title: 'exercise',
		icon: 'ic:outline-directions-run',
		color: 'bg-yellow-400',
	},
	{
		title: 'social',
		icon: 'ant-design:message-filled',
		color: 'bg-violet-400',
	},
	{
		title: 'self care',
		icon: 'fa-solid:hand-holding-medical',
		color: 'bg-rose-400',
	},
];
</script>
