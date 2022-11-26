<script lang="ts">
	import UnderConstruction from '$lib/underConstruction/UnderConstruction.svelte';
	import BlogPostCard from '$lib/blogPostCard/BlogPostCard.svelte';
</script>

<svelte:head>
	<title>Daniel Moretti's Blog</title>
</svelte:head>

<h1
	class="mb-10 pt-32 text-left font-inter text-3xl font-bold sm:text-4xl md:mb-20 md:text-7xl lg:text-6xl"
>
	Daniel Moretti's Blog
</h1>
<div class="md:border-l md:border-sky-500 md:pl-6 ">
	<div class="flex max-w-3xl flex-col space-y-16">
		<BlogPostCard
      introduction="What you need to know to bootstrap your blog with SvelteKit and Prismic."
      url="/blog/test"
			date="September 5, 2022"
			title="How To Make A Blog With Prismic And SvelteKit"
		/>
	</div>
</div>
