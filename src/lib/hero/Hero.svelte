<script lang="ts">
	import Button from '$lib/button/Button.svelte';
	import { scrollToSection } from '$lib/util/scrollToSection';
	import { tweened } from 'svelte/motion';
	import { sineInOut } from 'svelte/easing';

	// Animation and behavior functions
	const cy = tweened(20, {
		duration: (from, to) => Math.abs(to - from) * 60,
		easing: sineInOut
	});

	function loop() {
		cy.set(20)
			.then(() => cy.set(66))
			.then(() => loop());
	}

	loop();
</script>

<section class="grid h-screen min-h-[720px] items-center ">
	<div
		class="absolute top-0 -z-10 hidden h-screen w-screen backdrop-blur-2xl lg:-left-10 lg:block"
	/>
	<div class="relative pb-10 pt-36">
		<div
			class="absolute -top-96 left-0 -z-20 hidden h-[800px] w-96 -rotate-[30deg] rounded-full bg-gradient-radial lg:inline"
		/>
		<div class="absolute top-0 right-0 hidden lg:block">
			<div class="w-64 border-t border-sky-500" />
			<div class="h-60 border-r border-sky-500" />
		</div>
		<div class="flex justify-start  lg:justify-center">
			<div class="inline-block ">
				<h1
					class="mb-2 text-left font-inter text-5xl font-bold sm:text-6xl md:mb-4 md:text-7xl lg:text-right lg:text-8xl"
				>
					Daniel Moretti
				</h1>
				<h4
					class="mb-6 text-left text-base font-bold text-slate-200/75 sm:text-xl md:mb-20 md:text-2xl lg:mb-24 lg:text-right lg:text-3xl"
				>
					"Building <span class="text-sky-400/75">Experiences</span> is much more <br />
					&nbsp; than building <span class="text-sky-400/75">Applications</span>."
				</h4>
			</div>
		</div>
		<div class="mb-24 md:mb-36 lg:hidden">
			<Button>Send Message</Button>
		</div>
		<div class="mb-10 flex items-center justify-center ">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<svg
				class="cursor-pointer"
				on:click={() => {
					scrollToSection('#about-me-section');
				}}
				width="32"
				height="80"
				viewBox="0 0 32 80"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="0.5" y="0.5" width="31" height="79" rx="15.5" stroke="#0EA5E9" />
				<circle cx="16" cy={$cy} r="5.5" fill="#0EA5E9" stroke="#0EA5E9" />
			</svg>
		</div>
		<div class="absolute bottom-0 left-0 hidden lg:block">
			<div class="h-60 border-l border-sky-500" />
			<div class="w-64 border-b border-sky-500" />
			<div class="absolute bottom-7 -left-12 flex -rotate-90 items-center justify-start">
				<div class="mr-1 inline-block h-4 w-4 border border-sky-500" />
				<p class="inline text-xs text-slate-200/50">#0EA5E9</p>
			</div>
		</div>
	</div>
</section>
