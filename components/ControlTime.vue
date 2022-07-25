<template>
	<button
		class="rounded-full h-14 w-14 bg-red-500 flex items-center justify-center"
		@click="handleTime"
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
import { useTimeframe } from '~~/store/timeframeStore';
const store = useTimeframe();
const props = defineProps<{
	activity: string;
}>();
const { counter, pause, resume } = useInterval(1000, { controls: true });
const active = ref(false);
onMounted(() => pause());
const emit = defineEmits(['timeChange']);
watch(counter, (newVal) => {
	emit('timeChange', newVal);
});
const handleTime = () => {
	pause();
	active.value = !active.value;
	if (active.value) {
		counter.value = 0;
		resume();
	} else {
		pause();
		store.addTime(counter.value, props.activity);
		counter.value = 0;
	}
};
</script>
