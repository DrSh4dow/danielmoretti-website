<script lang="ts">
	import WorkSlot from './WorkSlot.svelte';
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

<section
	use:inview={options}
	on:change={handleChange}
	class="mb-28 transition-all delay-75 duration-700 md:mb-40 lg:mb-60
	{isInView ? 'translate-x-0 translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-md'} "
>
	<div class="mb-12 flex items-center justify-center sm:mb-14 lg:mb-20 lg:px-6">
		<div class="h-px w-full bg-sky-500" />
		<h2 class="whitespace-nowrap px-6 font-inter text-3xl font-bold sm:text-5xl">
			Professional Experience
		</h2>
		<div class="h-px w-full bg-sky-500" />
	</div>
	<div class="">
		<WorkSlot
			id={1}
			keypoints={['Evaluate Junior and Senior Engineers']}
			title="Software Engineer"
			company="@ Woven Teams"
			since="2022"
			until="Present"
			techStack="JS/TS | C# | Java | Slack"
		/>
		<WorkSlot
			id={2}
			title="System Administrator"
			company="@ Dar Spa"
			since="2020"
			until="2022"
			keypoints={[
				'Management of internal systems',
				'Deployment of tooling and custom email server',
				'Development and Design of their public-facing Website'
			]}
			techStack="Linux | Dovecot | Svelte | Node | Ngnix | Git"
		/>
		<WorkSlot
			id={3}
			keypoints={[
				'Find and solve multiple vulnerabilities',
				'Create tools for automation using Bash'
			]}
			title="Bug Bounty Hunter"
			company="@ HackerOne"
			since="2019"
			until="2021"
			techStack="Burp Suite | Javascript | Networking | Bash"
		/>
		<WorkSlot
			keypoints={['Construction of multiple web applications', 'Building of Medical Tooling']}
			techStack="Svelte | React | Typescript | Figma | Git"
			id={4}
			title="Freelance Web Developer"
			since="2017"
			until="Present"
		/>
	</div>
</section>
