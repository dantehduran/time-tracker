<template>
	<div class="bg-red-500 rounded-xl">
		<div class="h-12">svgs</div>
		<div class="p-6 bg-indigo-900 rounded-xl flex flex-col">
			<div class="flex justify-between items-center">
				<h4 class="capitalize text-white text-2xl">{{ title }}</h4>
				<span class="text-white font-bold text-2xl">...</span>
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
const props = defineProps<{
	title: string;
	timeframe: 'day' | 'week' | 'month';
	current: number;
	previous: number;
}>();
// const { title, timeframe, current, previous } = toRefs(props);
</script>
