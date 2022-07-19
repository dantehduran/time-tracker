<template>
	<div class="rounded-xl w-full" :class="color">
		<div class="h-12 text-gray-600 opacity-50 flex justify-end pr-4">
			<Icon :icon="icon" width="50" height="50" class="rotate-45" />
		</div>
		<div class="p-6 bg-indigo-900 rounded-xl flex flex-col relative">
			<ControlTime v-if="timeframe === 'day'" class="top-4 right-4 absolute" />
			<div class="flex justify-between items-center">
				<h4 class="capitalize text-white text-2xl">{{ title }}</h4>

				<!-- <span v-else class="text-white font-bold text-2xl">...</span> -->
			</div>
			<div class="mt-6 mb-2">
				<h3 class="text-white text-5xl tracking-wide mb-2">
					{{ `${current}hrs` }}
				</h3>
				<span class="text-white font-thin">{{
					`last ${timeframe} - ${previous}hrs `
				}}</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
const props = defineProps<{
	title: string;
	timeframe: 'day' | 'week' | 'month';
	icon: string;
	current: number;
	previous: number;
	color: string;
}>();
// const { title, timeframe, current, previous } = toRefs(props);
</script>
