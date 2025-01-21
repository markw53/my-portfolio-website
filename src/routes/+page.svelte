<script>
	import { onMount } from 'svelte';
	import About from '$lib/About.svelte';
	import Header from '$lib/Header.svelte';
	import Projects from '$lib/Projects.svelte';
	import Contact from '$lib/Contact.svelte';
	import DATA from '$lib/data';
	import Experience from '$lib/Experience.svelte';
	import FadeInSection from '$lib/FadeInSection.svelte';

	onMount(async () => {
		if (typeof window !== 'undefined') {
			try {
				const { initTWE } = await import('tw-elements/js/tw-elements.umd.min.js');
				initTWE();
			} catch (error) {
				console.error('Failed to load tw-elements:', error);
			}
		}
	});
</script>

<div class="text-neutral-white bg-gradient-main min-h-screen lg:flex lg:justify-between lg:gap-4">
	<a href="#main-content" class="sr-only text-center text-2xl underline focus:not-sr-only"
		>Skip to main content</a
	>
	<Header />
	<main id="main-content" class="text-neutral-white pl-6 pr-6 lg:w-[80%]">
		<div id="about" class="pt-24">
			<About skills={DATA.SKILLS} />
		</div>
		<div id="experience" class="pt-24">
			<FadeInSection>
				<Experience experiences={DATA.ABOUT.experience} education={DATA.ABOUT.education} />
			</FadeInSection>
		</div>
		<div id="projects" class="col-span-1 pt-24">
			<FadeInSection>
				<Projects projects={DATA.PROJECTS} skills={DATA.SKILLS} />
			</FadeInSection>
		</div>
		<div id="contact" class="col-span-1 pt-24">
			<FadeInSection>
				<Contact />
			</FadeInSection>
		</div>
		<div class="mt-0 w-full py-6 lg:ml-auto">
			<a href={DATA.SOURCE.src} target="_blank"
				>{`© ${DATA.SOURCE.creation_year} Katherine Wilde. All Rights Reserved.`}</a
			>
		</div>
	</main>
</div>

<!-- bg-gradient-to-r from-russian_violet from-30% via-ultra_violet to-african_violet to-90% -->

<style>
	@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
</style>
