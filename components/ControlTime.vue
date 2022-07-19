<template>
	<button
		class="rounded-full h-14 w-14 bg-red-500 flex items-center justify-center"
		@click="active = !active"
	>
		<Icon
			:icon="active ? 'bi:pause-fill' : 'bi:play-fill'"
			width="48"
			height="48"
			class="text-white"
		/>
	</button>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
const active = ref(false);
</script>
