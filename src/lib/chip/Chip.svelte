<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let index: number;
	export let chipClass = 'bg-indigo-600';
</script>

<div
	in:fly={{ x: 40, y: -40, delay: 1500 + 200 * index, easing: quintOut, duration: 500 }}
	class={`inline-flex items-center justify-center rounded ${chipClass} py-1 px-2 shadow sm:py-2 sm:px-4`}
>
	<h3 class="text-base font-black sm:text-lg lg:text-lg"><slot /></h3>
</div>
