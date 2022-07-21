<template>
	<div class="w-full h-full bg-indigo-900 rounded-xl">
		<div
			class="p-6 md:h-2/3 flex flex-row md:flex-col gap-6 rounded-xl bg-sky-700 justify-center items-center"
		>
			<div
				class="p-4 border-2 border-white rounded-full bg-gray-300 w-20 h-20 items-center flex justify-center text-2xl"
			>
				DH
			</div>
			<div class="flex flex-col justify-center items-center">
				<span class="text-gray-300">Report for</span>
				<h3 class="text-white text-4xl tracking-wide">Dante Huillca</h3>
			</div>
		</div>
		<div class="p-6 md:h-1/3 flex md:flex-col flex-row gap-4 justify-center">
			<span
				@click="changeTimeframe('day')"
				class="hover:text-white cursor-pointer text-lg"
				:class="
					store.activeTimeframe == 'day' ? 'text-white' : 'text-indigo-600'
				"
			>
				Daily
			</span>
			<span
				@click="changeTimeframe('week')"
				class="hover:text-white cursor-pointer text-lg"
				:class="
					store.activeTimeframe == 'week' ? 'text-white' : 'text-indigo-600'
				"
				>Weekly</span
			>
			<span
				@click="changeTimeframe('month')"
				class="hover:text-white cursor-pointer text-lg"
				:class="
					store.activeTimeframe == 'month' ? 'text-white' : 'text-indigo-600'
				"
				>Monthly</span
			>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useTimeframe } from '~~/store/timeframeStore';
const store = useTimeframe();
const { changeTimeframe } = store;
</script>
