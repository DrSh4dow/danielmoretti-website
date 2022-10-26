<script>
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
</script>

<Header />
<div class="mx-auto max-w-screen-xl px-2 sm:px-4 md:px-6">
	<slot />
</div>
