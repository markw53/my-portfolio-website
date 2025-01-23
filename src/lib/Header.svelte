<script>
	import SocialButton from './SocialButton.svelte';
	import { onMount } from 'svelte';
	export let personal;
	export let contacts;

	onMount(async () => {
		if (typeof window !== 'undefined') {
			try {
				const { Ripple, initTWE } = await import('tw-elements/js/tw-elements.umd.min.js');
				initTWE({ Ripple });
			} catch (error) {
				console.error('Failed to load tw-elements:', error);
			}
		}
	});

	function scrollToSection(event) {
		event.preventDefault();
		const targetId = event.currentTarget.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			});
		}
	}
</script>

<header class="p-10 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[35%] lg:flex-col lg:py-24">
	<h1 class="mb-4 text-6xl font-bold">{personal.name}</h1>
	<p class="text-secondary mb-4 text-4xl">{personal.role}</p>
	<p class="text-xl">{personal.introduction}</p>

	<nav class="mt-4 flex flex-col space-y-4 text-2xl">
		<!--<div transition:fly={{ y: 100, duration: 500 }}> -->
		<a href="#about" on:click={scrollToSection}>About</a>
		<a href="#experience" on:click={scrollToSection}>Experience</a>
		<a href="#projects" on:click={scrollToSection}>Projects</a>
		<a href="#contact" on:click={scrollToSection}>Contact</a>
	</nav>

	<div class="mt-8 flex space-x-4">
		{#each contacts as contact}
			<SocialButton {contact} />
		{/each}
	</div>
</header>
