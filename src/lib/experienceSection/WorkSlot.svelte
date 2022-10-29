<script lang="ts">
	import { slide } from 'svelte/transition';
	import { activeNumber } from '$lib/stores';

	export let title = '';
	export let company = '';
	export let since = '';
	export let until = '';
	export let isExpanded = false;
	export let id = 0;
	export let keypoints = [''];
	export let techStack = '';

	activeNumber.subscribe((val) => {
		if (!val || val !== id) {
			isExpanded = false;
		} else {
			isExpanded = true;
		}
	});

	function handleClick() {
		if (!isExpanded) {
			activeNumber.set(id);
		} else {
			activeNumber.set(null);
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={handleClick}
	class="mx-auto mb-2 flex max-w-2xl cursor-pointer items-center justify-between rounded-lg bg-sky-700 px-2 py-4 sm:px-6"
>
	<div class="flex items-center justify-start">
		<svg
			class=" mr-2 h-3 fill-slate-50 antialiased"
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				class="custom-rotation-object transition-transform ease-in-out {isExpanded
					? 'rotate-90'
					: 'rotate-0'}"
				x="38"
				y="0"
				ry="15"
				rx="10"
				width="25"
				height="100"
			/>
			<rect x="0" y="37" ry="10" rx="15" width="100" height="25" />
		</svg>
		<h3 class="whitespace-nowrap text-lg font-bold sm:text-xl ">{title} {company}</h3>
	</div>
	<h3 class="hidden whitespace-nowrap text-xl font-bold sm:inline sm:text-xl">{since} - {until}</h3>
</div>

{#if isExpanded}
	<div
		transition:slide
		class="mx-auto mb-2 max-w-2xl rounded-lg border border-sky-500 py-4 px-4 sm:px-8"
	>
		<ul class="mb-4 list-outside text-base font-bold sm:text-lg md:text-xl">
			{#each keypoints as point}
				<li class="mb-2">&nbsp;{point}</li>
			{/each}
		</ul>
		<h4 class="text-base font-bold text-slate-200/75 sm:text-lg md:text-xl">{techStack}</h4>
	</div>
{/if}

<style>
	ul {
		list-style-type: '>';
	}

	.custom-rotation-object {
		transform-box: fill-box;
		transform-origin: center;
	}
</style>
