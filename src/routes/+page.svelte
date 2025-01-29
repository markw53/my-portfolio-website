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

<div class="min-h-screen bg-primary text-neutral-gray lg:flex lg:justify-between lg:gap-4">
	<a href="#main-content" class="sr-only text-center text-2xl underline focus:not-sr-only"
		>Skip to main content</a
	>
	<Header personal={DATA.PERSONAL} contacts={DATA.CONTACTS} />
	<main id="main-content" class="text-neutral-white lg:w-[85%]">
		<!-- pl-6 pr-6 -->
		<div id="about" class="pt-24 lg:w-[95%]">
			<!-- pt-24 -->
			<About paragraphs={DATA.ABOUT.paragraphs} />
		</div>
		<div id="about" class="lg:w-[95%]">
			<FadeInSection>
				<Skills skills={DATA.SKILLS} />
			</FadeInSection>
		</div>
		<div id="experience" class="lg:w-[95%]">
			<FadeInSection>
				<Experience experiences={DATA.ABOUT.experience} education={DATA.ABOUT.education} />
			</FadeInSection>
		</div>
		<div id="projects" class="lg:w-[95%]">
			<FadeInSection>
				<Projects projects={DATA.PROJECTS} skills={DATA.SKILLS} />
			</FadeInSection>
		</div>
		<div id="contact" class="lg:w-[95%]">
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
		class="z-90 button-shadow button-shadow-hover fixed bottom-8 right-8 flex hidden h-16 w-16 items-center justify-center rounded-full border-0 bg-accent-salmon text-3xl font-bold text-primary drop-shadow-md hover:bg-accent-rose"
		aria-label="Go to top"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			class="h-10 w-10"
		>
			<path
				d="M12 19V6m0 0l-5 5m5-5l5 5"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</div>

<style>
	@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';

	.button-shadow {
		box-shadow: none;
	}
	.button-shadow-hover:hover {
		box-shadow: 0 0 6px 1px #ffe4e6;
	}
</style>
