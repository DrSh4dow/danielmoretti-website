<script lang="ts">
	import BelenLogo from './belen-logo.svg';
	import DarSpaLogo from './darspa-logo.svg';
	import DanielMorettiLogo from './daniel-moretti-logo.svg';
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

<section id="work-section" class="mb-28  md:mb-40 lg:mb-60">
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
			appName="E-Ficha"
			appType="Web Application"
			cardDirection="Left"
			srcLogo={DanielMorettiLogo}
			srcBg="/images/eficha/eficha.png"
			altBg="Medical Administrator page from e-ficha"
			altLogo="Daniel Moretti Logo"
			classColor="bg-sky-500/90"
			href="/showcase/e-ficha"
		/>
		<CaseStudyNewCard
			appName="Odontología Chacón"
			appType="Website"
			cardDirection="Right"
			srcLogo={BelenLogo}
			srcBg="/images/odontologiachacon/odontologiachacon.png"
			altBg="Landing page from odontologiabelenchacon.cl"
			altLogo="Odontologia belen chacon Logo"
			classColor="bg-indigo-500/90"
			href="https://odontologiabelenchacon.cl"
			buttonText="View Live"
			isExternal
			rel="noreferrer"
			target="_blank"
		/>
		<CaseStudyNewCard
			appName="Dar Spa"
			appType="Website"
			cardDirection="Left"
			srcLogo={DarSpaLogo}
			srcBg="/images/darspa/darspa.png"
			altBg="Landing page from darspa.cl"
			altLogo="Dar Spa Logo"
			classColor="bg-teal-500/90"
			href="/showcase/darspa"
		/>
		<CaseStudyNewCard
			appName="Odontoficha"
			appType="Desktop Application"
			cardDirection="Right"
			srcLogo={DanielMorettiLogo}
			srcBg="/images/odontoficha/odontoficha.png"
			altBg="Medical Administrator Dashboard from odontoficha"
			altLogo="Daniel Moretti Logo"
			classColor="bg-indigo-500/90"
			href="https://github.com/DrSh4dow/odontoficha-qt"
			buttonText="View Repo"
			isExternal
			rel="noreferrer"
			target="_blank"
		/>
	</div>
</section>
