<script lang="ts">
	import CaseStudyCard from './CaseStudyCard.svelte';
	import OdontologiaChacon from './odontologiachacon.png';
	import BelenLogo from './BelenLogo.svelte';
	import DarSpa from './darspa.png';
	import EFicha from './eficha.png';
	import OdontoFicha from './odontoficha.png';
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
</script>

<section
	use:inview={options}
	on:change={handleChange}
	class="mb-28 transition-all delay-75 duration-700 md:mb-40 lg:mb-60 
	{isInView ? 'translate-x-0 opacity-100 blur-0' : '-translate-x-10 opacity-0 blur-md'}"
>
	<div class="mb-10 flex items-center justify-end sm:mb-14 lg:mb-20">
		<div class="h-px w-full bg-sky-500 md:max-w-xs" />
		<h2 class="whitespace-nowrap pl-6 font-inter text-3xl font-bold sm:text-5xl">
			Some of My Work
		</h2>
	</div>
	<div class="flex flex-wrap justify-center gap-10">
		<article class="max-w-5xl">
			<div class="relative max-h-[360px] overflow-hidden rounded-2xl shadow-md">
				<div
					class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-indigo-500/90"
				>
					<BelenLogo />
				</div>
				<img src={OdontologiaChacon} alt="test" />
			</div>
			<div />
		</article>
	</div>
</section>
