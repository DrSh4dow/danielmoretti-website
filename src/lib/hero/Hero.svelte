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

<div class="mt-36 ">
	<h1 class="mb-2 text-left font-inter text-5xl font-bold">Daniel Moretti</h1>
	<h4 class="mb-6 text-left text-base font-bold text-slate-200/75">
		"Building <span class="text-sky-400/75">Experiences</span> is much more <br />
		&nbsp; than building <span class="text-sky-400/75">Applications</span>."
	</h4>
	<Button>Send Message</Button>
	<div class="mt-24 flex items-center justify-center">
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
</div>
