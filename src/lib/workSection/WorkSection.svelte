<script lang="ts">
	import Button from '$lib/button/Button.svelte';
	import OdontologiaChacon from './odontologiachacon.png';
</script>

<section>
	<div class="mb-10 flex items-center justify-end sm:mb-14">
		<div class="h-px w-full bg-sky-500 md:max-w-xs" />
		<h2 class=" whitespace-nowrap pl-6 font-inter text-3xl font-bold sm:text-5xl">
			Some of My Work
		</h2>
	</div>
	<div class="flex justify-center gap-6 ">
		<article class="rounded-2xl bg-slate-800 p-4 sm:p-6">
			<img
				class="mb-4 rounded-lg sm:mb-6"
				src={OdontologiaChacon}
				alt="Landing page from odontologiabelenchacon.cl"
			/>
			<h3 class="mb-1 font-inter text-base font-bold sm:mb-3 sm:text-xl">
				Website | Odontología Chacón
			</h3>
			<p class="mb-6 text-sm text-slate-200 sm:mb-10 sm:text-base">
				TypeScript | SvelteKit | Vercel
			</p>
			<Button>Case Study</Button>
		</article>
	</div>
</section>
