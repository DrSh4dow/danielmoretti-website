<script lang="ts">
	import { onMount } from 'svelte';
	import { leftArrowData } from './svgData';
	import { blur } from 'svelte/transition';
	import Chip from '$lib/chip/Chip.svelte';

	let techs = ['React', 'TypeScript', 'Express.js', 'HTML', 'CSS', 'GCP', 'Firebase'];
	let isMounted = false;

	onMount(() => (isMounted = true));

	function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
		isMounted = detail.inView;
	}
</script>

<div class="absolute top-0 -z-10 hidden h-screen w-screen backdrop-blur-2xl lg:-left-10 lg:block" />
{#if isMounted}
	<section class="relative mb-20">
		<div
			class="absolute -top-64 -left-20 -z-20 hidden h-[800px] w-96 -rotate-[30deg] rounded-full bg-gradient-radial lg:inline"
		/>
		<div class="flex w-full py-10">
			<a in:blur={{ amount: 10 }} href="/#work-section" data-sveltekit-prefetch>
				<svg
					class="cursor-pointer"
					width="52"
					height="52"
					viewBox="0 0 52 52"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="26" cy="26" r="25.5" stroke="#0EA5E9" />
					<path d={leftArrowData} fill="#0EA5E9" />
				</svg>
			</a>
		</div>
		<div class="mb-10 grid sm:mb-20 lg:grid-cols-2">
			<div class="lg:pt-4">
				<h3 class="text-2xl font-black sm:mb-1">
					{#each ['Web', ' Application'] as word, i}
						<span in:blur={{ amount: 10, delay: 300 * (i + 1) }}>{word}</span>
					{/each}
				</h3>
				<h1 in:blur={{ amount: 10, delay: 900 }} class="font-inter text-7xl font-bold sm:text-8xl">
					E-Ficha
				</h1>
			</div>
			<img
				in:blur={{ amount: 10, delay: 1200 }}
				class="hidden lg:inline"
				src="/images/eficha/mockup.png"
				alt="mockup of e-ficha web application"
			/>
		</div>
		<div in:blur={{ amount: 10, delay: 1200 }} class="grid gap-5 sm:gap-10 lg:grid-cols-2">
			<div>
				<h5 class="mb-2 text-2xl font-black sm:mb-6">Project Overview</h5>
				<p class="max-w-lg text-lg text-slate-200">
					This project empowers doctors to have all the tools they need ranging from medical
					history, patient administration, scheduler, recipe generation, statistical generation, and
					AI-assisted writing in one place and with multi-platform support.
				</p>
			</div>
			<div>
				<h5 class="mb-2 text-2xl font-black sm:mb-6">Tech & Tools Used</h5>
				<div class="flex max-w-md flex-wrap gap-2">
					{#each techs as tech, i}
						<Chip index={i}>{tech}</Chip>
					{/each}
				</div>
			</div>
		</div>
	</section>
	<section in:blur={{ amount: 10, delay: 1500 }} class="mb-10 flex flex-wrap gap-10">
		<div>
			<h5 class="mb-2 text-xl font-bold">Intuitive UI for patient-management</h5>
			<img class="rounded-lg shadow" src="/images/eficha/patients.png" alt="patients dashboard" />
		</div>
		<div>
			<h5 class="mb-2 text-xl font-bold">Multiline autocompletion inspired by Intellisense</h5>
			<img
				class="rounded-lg shadow"
				src="/images/eficha/autocompletion.png"
				alt="patients creation page showing autocompletion capabilities"
			/>
		</div>
		<div>
			<h5 class="mb-2 text-xl font-bold">
				Straightforward UI with a utility-first approach for doctors
			</h5>
			<img
				class="rounded-lg shadow"
				src="/images/eficha/medhistory.png"
				alt="medical history management"
			/>
		</div>
		<div>
			<h5 class="mb-2 text-xl font-bold">Recipe generation with on-the-fly pdf rendering</h5>
			<img
				class="rounded-lg shadow"
				src="/images/eficha/recipe.png"
				alt="on-the-fly pdf rendering"
			/>
		</div>
		<div>
			<h5 class="mb-2 text-xl font-bold">Powerful scheduler plus Google Calendar integration</h5>
			<img
				class="rounded-lg shadow"
				src="/images/eficha/scheduler.png"
				alt="Scheduler for e-ficha"
			/>
		</div>
		<div>
			<h5 class="mb-2 text-xl font-bold">Themes can never be left out &#10084;</h5>
			<img class="rounded-lg shadow" src="/images/eficha/themes.png" alt="theming" />
		</div>
	</section>

	<h5 class="text-center text-xs font-black text-slate-200/20 sm:text-lg">
		Designed with <span class="text-red-500">&#10084;</span> and Coded with fun by Daniel Moretti
	</h5>
{/if}
