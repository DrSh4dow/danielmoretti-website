<script lang="ts">
	import OdontologiaChacon from './odontologiachacon.png';
	import BelenLogo from './belen-logo.svg';
	import DarSpa from './darspa.png';
	import DarSpaLogo from './darspa-logo.svg';
	import EFicha from './eficha.png';
	import DanielMorettiLogo from './daniel-moretti-logo.svg';
	import OdontoFicha from './odontoficha.png';
	import CaseStudyNewCard from './CaseStudyNewCard.svelte';
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

<section class="mb-28  md:mb-40 lg:mb-60">
	<div
		use:inview={options}
		on:change={handleChange}
		class="mb-10 flex items-center justify-end transition-all delay-75 duration-700 sm:mb-14 lg:mb-20
		 {isInView ? 'translate-x-0 opacity-100 blur-0' : '-translate-x-10 opacity-0 blur-md'}"
	>
		<div class="h-px w-full bg-sky-500 md:max-w-xs" />
		<h2 class="whitespace-nowrap pl-6 font-inter text-3xl font-bold sm:text-5xl">
			Some of My Work
		</h2>
	</div>
	<div class="flex flex-wrap justify-center gap-10 lg:gap-20">
		<CaseStudyNewCard
			appName="Odontología Chacón"
			appType="Website"
			cardDirection="Left"
			srcLogo={BelenLogo}
			srcBg={OdontologiaChacon}
			altBg="Landing page from odontologiabelenchacon.cl"
			altLogo="Odontologia belen chacon Logo"
			classColor="bg-indigo-500/90"
			href="/odontologiachacon"
		/>
		<CaseStudyNewCard
			appName="Dar Spa"
			appType="Website"
			cardDirection="Right"
			srcLogo={DarSpaLogo}
			srcBg={DarSpa}
			altBg="Landing page from darspa.cl"
			altLogo="Dar Spa Logo"
			classColor="bg-teal-500/90"
			href="/darspa"
		/>
		<CaseStudyNewCard
			appName="E-Ficha"
			appType="Web Application"
			cardDirection="Left"
			srcLogo={DanielMorettiLogo}
			srcBg={EFicha}
			altBg="Medical Administrator page from e-ficha"
			altLogo="Daniel Moretti Logo"
			classColor="bg-sky-500/90"
			href="/e-ficha"
		/>
		<CaseStudyNewCard
			appName="Odontoficha"
			appType="Desktop Application"
			cardDirection="Right"
			srcLogo={DanielMorettiLogo}
			srcBg={OdontoFicha}
			altBg="Medical Administrator Dashboard from odontoficha"
			altLogo="Daniel Moretti Logo"
			classColor="bg-indigo-500/90"
			href="/odontoficha"
		/>
	</div>
</section>
