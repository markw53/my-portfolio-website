<script>
	import { onMount } from 'svelte';
	import About from '$lib/About.svelte';
	import Header from '$lib/Header.svelte';
	import Projects from '$lib/Projects.svelte';
	import Contact from '$lib/Contact.svelte';
	import DATA from '$lib/data';
	import Experience from '$lib/Experience.svelte';
	import FadeInSection from '$lib/FadeInSection.svelte';
	import Skills from '$lib/Skills.svelte';

	onMount(async () => {
		if (typeof window !== 'undefined') {
			try {
				const { initTWE } = await import('tw-elements/js/tw-elements.umd.min.js');
				initTWE();
			} catch (error) {
				console.error('Failed to load tw-elements:', error);
			}
			const toTopButton = document.getElementById('to-top-button');
			window.onscroll = function () {
				if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
					toTopButton.classList.remove('hidden');
				} else {
					toTopButton.classList.add('hidden');
				}
			};
		}
	});

	function goToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<div class="text-neutral-white bg-primary min-h-screen lg:flex lg:justify-between lg:gap-4">
	<a href="#main-content" class="sr-only text-center text-2xl underline focus:not-sr-only"
		>Skip to main content</a
	>
	<Header personal={DATA.PERSONAL} contacts={DATA.CONTACTS} />
	<main id="main-content" class="text-neutral-white lg:w-[85%]">
		<!-- pl-6 pr-6 -->
		<div id="about" class="pt-24 lg:w-[95%]">
			<About paragraphs={DATA.ABOUT.paragraphs} />
		</div>
		<div id="about" class="pt-24 lg:w-[95%]">
			<FadeInSection>
				<Skills skills={DATA.SKILLS} />
			</FadeInSection>
		</div>
		<div id="experience" class="pt-24 lg:w-[95%]">
			<FadeInSection>
				<Experience experiences={DATA.ABOUT.experience} education={DATA.ABOUT.education} />
			</FadeInSection>
		</div>
		<div id="projects" class="col-span-1 pt-24 lg:w-[95%]">
			<FadeInSection>
				<Projects projects={DATA.PROJECTS} skills={DATA.SKILLS} />
			</FadeInSection>
		</div>
		<div id="contact" class="col-span-1 pt-24 lg:w-[95%]">
			<FadeInSection>
				<Contact />
			</FadeInSection>
		</div>
		<div class="mt-0 w-full py-6 pl-6 lg:ml-auto">
			<a href={DATA.SOURCE.src} target="_blank"
				>{`© ${DATA.SOURCE.creation_year} ${DATA.PERSONAL.name}. All Rights Reserved.`}</a
			>
		</div>
	</main>

	<button
		id="to-top-button"
		on:click={goToTop}
		title="Go To Top"
		class="z-90 bg-accent-salmon text-primary fixed bottom-8 right-8 hidden h-16 w-16 rounded-full border-0 text-3xl font-bold drop-shadow-md"
		>&uarr;</button
	>
</div>

<style>
	@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
</style>
