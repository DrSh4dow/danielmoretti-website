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
	export let href: string = '.';
</script>

<article
	use:inview={options}
	on:change={handleChange}
	class="flex max-w-5xl transition-all delay-75 duration-700
    {isInView ? 'translate-y-0 opacity-100 blur-0' : '-translate-y-1 opacity-0 blur-md'}"
>
	{#if cardDirection === 'Left'}
		<a
			{href}
			class="group relative block max-h-60 cursor-pointer overflow-hidden rounded-2xl shadow-md sm:max-h-[360px]"
		>
			<div
				class="absolute top-0 left-0 flex h-full w-full items-center justify-center transition-all duration-700 group-hover:bg-slate-500/10 {classColor}/90"
			>
				<img
					class="opacity-100 blur-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-0 group-hover:blur-lg"
					src={srcLogo}
					alt={altLogo}
				/>
			</div>
			<img src={srcBg} alt={altBg} />
		</a>
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
		<a
			{href}
			class="group relative block max-h-[360px] cursor-pointer overflow-hidden rounded-2xl shadow-md"
		>
			<div
				class="absolute top-0 left-0 flex h-full w-full items-center justify-center transition-all duration-700 group-hover:bg-slate-500/10 {classColor}/90"
			>
				<img
					class="opacity-100 blur-0 transition-all duration-500 group-hover:opacity-0 group-hover:blur-lg"
					src={srcLogo}
					alt={altLogo}
				/>
			</div>
			<img src={srcBg} alt={altBg} />
		</a>
	{/if}
</article>
