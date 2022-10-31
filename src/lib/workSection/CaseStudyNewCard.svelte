<script lang="ts">
	import Button from '$lib/button/Button.svelte';
	import { inview } from '$lib/util/inview';
	import type { Options, ObserverEventDetails } from '$lib/types';
	let isInView = false;
	const options: Options = {
		rootMargin: '-80px',
		unobserveOnEnter: true
	};

	function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
		isInView = detail.inView;
	}

	export let srcBg: string;
	export let altBg: string;
	export let srcLogo: string;
	export let altLogo: string;
	export let appType: string;
	export let appName: string;
	export let cardDirection: 'Left' | 'Right';
	export let classColor: string;
</script>

<article
	use:inview={options}
	on:change={handleChange}
	class="flex max-w-5xl transition-all delay-75 duration-700
    {isInView ? 'translate-y-0 opacity-100 blur-0' : '-translate-y-1 opacity-0 blur-md'}"
>
	{#if cardDirection === 'Left'}
		<div class="relative max-h-60 overflow-hidden rounded-2xl shadow-md sm:max-h-[360px]">
			<div
				class="absolute top-0 left-0 flex h-full w-full items-center justify-center {classColor}"
			>
				<img src={srcLogo} alt={altLogo} />
			</div>
			<img src={srcBg} alt={altBg} />
		</div>
		<div class="hidden w-[520px] p-10 lg:block">
			<h4 class="text-2xl font-black">{appType}</h4>
			<h2 class="mb-4 font-inter text-4xl font-bold">{appName}</h2>
			<h3 class="mb-10 text-2xl font-black text-slate-200">Design & Development</h3>
			<div class="flex items-center justify-start">
				<Button>Case Study</Button>
			</div>
		</div>
	{:else}
		<div class="hidden w-[520px] p-10 lg:block">
			<h4 class="text-right text-2xl font-black">{appType}</h4>
			<h2 class="mb-4 text-right font-inter text-4xl font-bold">{appName}</h2>
			<h3 class="mb-10 text-right text-2xl font-black text-slate-200">Design & Development</h3>
			<div class="flex items-center justify-end">
				<Button>Case Study</Button>
			</div>
		</div>
		<div class="relative max-h-[360px] overflow-hidden rounded-2xl shadow-md">
			<div
				class="absolute top-0 left-0 flex h-full w-full items-center justify-center {classColor}"
			>
				<img src={srcLogo} alt={altLogo} />
			</div>
			<img src={srcBg} alt={altBg} />
		</div>
	{/if}
</article>
