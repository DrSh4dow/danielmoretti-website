<script lang="ts">
	import { horizontalSlide } from '$lib/util/horizontalSlide';

	let condition = false;
</script>

<button
	on:mouseenter={() => (condition = true)}
	on:mouseleave={() => (condition = false)}
	class="group relative items-center justify-center overflow-hidden rounded border-2 border-sky-500 px-4 py-2 sm:px-5 sm:py-3"
>
	{#if condition}
		<div
			transition:horizontalSlide={{ duration: 300, axis: 'x' }}
			class="absolute top-0 left-0 -z-10 h-full w-full bg-sky-500"
		/>
	{/if}
	<h3 class="text-md select-none font-black group-hover:text-white sm:text-xl"><slot /></h3>
</button>
