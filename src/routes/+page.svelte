<script lang="ts">
	import Hero from '$lib/hero/Hero.svelte';
	import AboutMe from '$lib/aboutMe/AboutMe.svelte';
	import WorkSection from '$lib/workSection/WorkSection.svelte';
	import ExperienceSection from '$lib/experienceSection/ExperienceSection.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<svelte:head>
	<title>Daniel Moretti's Portfolio</title>
</svelte:head>

<Hero />
<AboutMe />
<WorkSection />
<ExperienceSection />
<Footer />
