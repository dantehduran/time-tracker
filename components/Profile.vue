<template>
	<div class="w-full h-full bg-gray-900 rounded-xl">
		<div
			class="p-6 md:h-2/3 flex flex-row md:flex-col gap-6 rounded-xl bg-slate-600 justify-center items-center"
		>
			<Icon
				icon="ic:baseline-more-time"
				width="60"
				height="60"
				class="text-white"
			/>
			<div class="flex flex-col justify-center items-center">
				<span class="text-gray-300">Personal</span>
				<h3 class="text-white text-4xl tracking-wide">Time Tracker</h3>
			</div>
		</div>
		<div class="p-6 md:h-1/3 flex md:flex-col flex-row gap-4 justify-center">
			<span
				@click="changeTimeframe('day')"
				class="hover:text-white cursor-pointer text-lg"
				:class="
					store.activeTimeframe == 'day' ? 'text-white' : 'text-slate-600'
				"
			>
				Daily
			</span>
			<span
				@click="changeTimeframe('week')"
				class="hover:text-white cursor-pointer text-lg"
				:class="
					store.activeTimeframe == 'week' ? 'text-white' : 'text-slate-600'
				"
			>
				Weekly
			</span>
			<span
				@click="changeTimeframe('month')"
				class="hover:text-white cursor-pointer text-lg"
				:class="
					store.activeTimeframe == 'month' ? 'text-white' : 'text-slate-600'
				"
			>
				Monthly
			</span>
		</div>
	</div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useTimeframe } from '~~/store/timeframeStore';
const store = useTimeframe();
const { changeTimeframe } = store;
</script>
