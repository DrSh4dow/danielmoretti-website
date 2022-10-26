<script lang="ts">
	import Logo from './Logo.svg';
	import Gmail from './gmail.svg';
	import LinkedIn from './linkedin.svg';
	import Github from './github.svg';
</script>

<header
	class="fixed z-30 h-16 w-full border-b border-slate-50/5 bg-slate-900/75  backdrop-blur-lg "
>
	<div
		class="mx-auto flex h-full max-w-screen-xl items-center justify-between px-2 sm:px-4 md:px-6"
	>
		<a href="/" class="flex items-center justify-start gap-2">
			<img src={Logo} alt="Logo Daniel Moretti" />
			<h3 class="select-none text-xl font-black">Daniel Moretti</h3>
		</a>
		<nav class="flex items-center ">
			<svg
				class="md:hidden"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4 8H28V10.6667H4V8ZM4 14.6667H28V17.3333H4V14.6667ZM4 21.3333H28V24H4V21.3333Z"
					fill="#E2E8F0"
					fill-opacity="0.75"
				/>
			</svg>
			<a class="hidden text-xl font-bold text-slate-200/90 md:inline" href="/">Portfolio</a>
			<a class="mx-8 hidden text-xl font-bold text-slate-200/90 md:inline" href="/blog">Blog</a>
			<a class="hidden text-xl font-bold text-slate-200/90 md:inline" href="/contact">Contact</a>
			<div class="mx-6 hidden h-8 border border-slate-200/5 sm:inline md:mx-8" />
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				src={Gmail}
				on:click={() => {
					window.open('mailto:daniel.morettiv@gmail.com', '_blank');
				}}
				class="hidden cursor-pointer sm:inline"
				alt="enviar correo via gmail a Daniel Moretti"
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				src={LinkedIn}
				on:click={() => {
					window.open('https://www.linkedin.com/in/dmorettiv', '_blank');
				}}
				class="mx-2 hidden cursor-pointer sm:inline md:mx-4"
				alt="LinkedIn de Daniel Moretti Valdivia"
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				src={Github}
				on:click={() => {
					window.open('https://github.com/DrSh4dow', '_blank');
				}}
				class="hidden cursor-pointer sm:inline"
				alt="Link a github de Daniel Moretti"
			/>
		</nav>
	</div>
</header>
