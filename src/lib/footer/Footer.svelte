<script lang="ts">
	import Button from '$lib/button/Button.svelte';
</script>

<footer>
	<h1 class="mb-2 text-center font-inter text-5xl font-bold sm:mb-4 sm:text-7xl">Get in Touch</h1>
	<h3 class="mb-4 text-center text-lg font-bold text-slate-200/75 sm:mb-6 sm:text-2xl">
		Want to work together <br />or have some inquiries?
	</h3>
	<div class="mb-10 flex items-center justify-center">
		<Button>Send Message</Button>
	</div>
	<div class="mb-20 flex justify-center">
		<div class="flex items-center justify-center gap-4">
			<a
				class="text-base font-black text-slate-200/90 sm:text-xl"
				href="/resume.pdf"
				target="_blank">Resume</a
			>
			<div class="inline h-4 border border-slate-200/5 " />
			<a
				class="text-base font-black text-slate-200/90 sm:text-xl"
				href="https://github.com/DrSh4dow"
				rel="noreferrer"
				target="_blank">Github</a
			>
			<div class="inline h-4 border border-slate-200/5 " />
			<a
				class="text-base font-black text-slate-200/90 sm:text-xl"
				rel="noreferrer"
				href="https://www.linkedin.com/in/dmorettiv"
				target="_blank">LinkedIn</a
			>
		</div>
	</div>
	<h5 class="text-center text-xs font-black text-slate-200/20 sm:text-lg">
		Designed with <span class="text-red-500">&#10084;</span> and Coded with fun by Daniel Moretti
	</h5>
</footer>
