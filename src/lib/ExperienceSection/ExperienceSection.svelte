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
