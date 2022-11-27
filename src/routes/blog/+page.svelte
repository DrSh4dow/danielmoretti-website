<script lang="ts">
	import BlogPostCard from '$lib/blogPostCard/BlogPostCard.svelte';

	export let data: {
		documents: { title: string; introduction: string; uid: string; date: string }[];
	};
</script>

<svelte:head>
	<title>Daniel Moretti's Blog</title>
	<meta
		name="description"
		content=""
	/>
	<link rel="canonical" href="https://danielmoretti.com/blog" />
</svelte:head>

<h1
	class="mb-10 pt-32 text-left font-inter text-3xl font-bold sm:text-4xl md:mb-20 md:text-5xl lg:text-6xl"
>
	Daniel Moretti's Blog
</h1>
<div class="md:border-l md:border-sky-500 md:pl-6 ">
	<div class="flex max-w-3xl flex-col space-y-16">
    {#each data.documents as d (d.uid) }
		<BlogPostCard
			introduction={d.introduction}
			url={d.uid}
			date={d.date}
			title={d.title}
		/>
    {/each}
	</div>
</div>
