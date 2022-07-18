<template>
	<div class="w-full h-full bg-indigo-900 rounded-xl">
		<div
			class="p-6 flex flex-row md:flex-col gap-6 rounded-xl bg-sky-700 pb-10 justify-evenly items-center md:items-start"
		>
			<div
				class="p-4 border-2 border-white rounded-full bg-gray-300 w-20 h-20 items-center flex justify-center text-2xl"
			>
				DH
			</div>
			<div>
				<span class="text-gray-300">Report for</span>
				<h3 class="text-white text-4xl">Dante Huillca</h3>
			</div>
		</div>
		<div class="p-6 flex md:flex-col flex-row gap-4 justify-center">
			<span
				@click="changeTimeframe('day')"
				class="hover:text-white cursor-pointer text-lg font-semibold"
				:class="
					store.activeTimeframe == 'day' ? 'text-white' : 'text-indigo-600'
				"
			>
				Daily
			</span>
			<span
				@click="changeTimeframe('week')"
				class="hover:text-white cursor-pointer text-lg font-semibold"
				:class="
					store.activeTimeframe == 'week' ? 'text-white' : 'text-indigo-600'
				"
				>Weekly</span
			>
			<span
				@click="changeTimeframe('month')"
				class="hover:text-white cursor-pointer text-lg font-semibold"
				:class="
					store.activeTimeframe == 'month' ? 'text-white' : 'text-indigo-600'
				"
				>Monthly</span
			>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useTimeframe } from '~~/store/timeframe';
const store = useTimeframe();
const { changeTimeframe } = store;
</script>
