<script lang="ts">
	import CaseStudyCard from './CaseStudyCard.svelte';
	import OdontologiaChacon from './odontologiachacon.png';
	import DarSpa from './darspa.png';
	import EFicha from './eficha.png';
	import OdontoFicha from './odontoficha.png';
</script>

<section class="mb-28 md:mb-40 lg:mb-60">
	<div class="mb-10 flex items-center justify-end sm:mb-14 lg:mb-20">
		<div class="h-px w-full bg-sky-500 md:max-w-xs" />
		<h2 class="whitespace-nowrap pl-6 font-inter text-3xl font-bold sm:text-5xl">
			Some of My Work
		</h2>
	</div>
	<div class="flex flex-wrap justify-center gap-6">
		<CaseStudyCard
			src={OdontologiaChacon}
			techStack="TypeScript | SvelteKit | Vercel"
			title="Website | Odontología Chacón"
		/>
		<CaseStudyCard
			src={DarSpa}
			techStack="JavaScript | Svelte | Node | Firebase"
			title="Website | Dar Spa"
		/>
		<CaseStudyCard
			src={EFicha}
			techStack="TypeScript | React | Google Cloud"
			title="Web Application | E-Ficha"
		/>
		<CaseStudyCard
			src={OdontoFicha}
			techStack="C++ | Qt6 | QML"
			title="Desktop Application | Odontoficha"
		/>
	</div>
</section>
