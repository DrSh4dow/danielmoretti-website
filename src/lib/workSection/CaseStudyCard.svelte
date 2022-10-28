<script lang="ts">
	import Button from '$lib/button/Button.svelte';
	export let src = '';
	export let title = 'App Type | Title';
	export let techStack = '';
</script>

<article class=" rounded-2xl bg-slate-800 p-4 shadow-xl shadow-slate-900 sm:p-6">
	<img class="mb-4 rounded-lg sm:mb-6 " {src} alt="Landing page from odontologiabelenchacon.cl" />
	<h3 class="mb-1 font-inter text-base font-bold sm:mb-3 sm:text-xl">
		{title}
	</h3>
	<p class="mb-6 text-sm text-slate-200 sm:mb-10 sm:text-base">{techStack}</p>
	<Button>Case Study</Button>
</article>
