<script lang="ts">
	import { leftArrowData } from './svgData';
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
</script>

<section use:inview={options} on:change={handleChange}>
	<div class="w-full py-14">
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
	</div>
	<div class="md flex flex-wrap items-start justify-center gap-4 xl:justify-between">
		<div>
			<h3 class="text-center text-xl font-black md:text-left md:text-2xl">Website</h3>
			<h1 class="mb-6 text-center font-inter text-5xl font-bold md:text-left lg:text-6xl">
				Odontología<br />Chacón
			</h1>
			<div class="flex justify-center md:justify-start">
				<Button>View Live</Button>
			</div>
		</div>
		<div>
			<div class="max-w-md md:max-w-sm lg:max-w-lg xl:max-w-none">
				<img
					src="/images/odontologiachacon/odontologiachacon-mock.png"
					alt="landpage from odontologiabelenchacon.cl"
				/>
			</div>
		</div>
	</div>
</section>
