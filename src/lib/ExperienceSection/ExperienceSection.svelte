<script lang="ts">
	import WorkSlot from './WorkSlot.svelte';
</script>

<section class="mb-28 md:mb-40 lg:mb-60">
	<div class="mb-12 flex items-center justify-center sm:mb-14 lg:mb-20 lg:px-6">
		<div class="h-px w-full bg-sky-500" />
		<h2 class="whitespace-nowrap px-6 font-inter text-3xl font-bold sm:text-5xl">
			Professional Experience
		</h2>
		<div class="h-px w-full bg-sky-500" />
	</div>
	<div class="border">
		<WorkSlot title="Software Developer" company="Upwork" since="2022" until="Present" />
	</div>
</section>
