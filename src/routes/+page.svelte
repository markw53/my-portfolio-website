<script>
    import { onMount } from "svelte";

    onMount(async () => {
        if (typeof window !== 'undefined') {
            try {
                const { initTWE } = await import("tw-elements/js/tw-elements.umd.min.js");
                initTWE();
            } catch (error) {
                console.error('Failed to load tw-elements:', error);
            }
        }
    });

	import About from "$lib/About.svelte";
	import Header from "$lib/Header.svelte";
    import Projects from "$lib/Projects.svelte";
    import Contact from "$lib/Contact.svelte";
    import DATA from "$lib/data";
    
</script>
  
<style>
    @import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
</style>

<div class="lg:flex lg:justify-between lg:gap-4 bg-primary text-secondary">
    <a href="#main-content" class="text-center underline text-2xl sr-only focus:not-sr-only">Skip to main content</a>
    <Header />
    <main id="main-content" class="lg:w-[80%] pl-6 pr-6 text-secondary">
        <div  id="about" class="pt-24">
            <About experiences={DATA.ABOUT.experience} education={DATA.ABOUT.education}/>
        </div>
        <div id="projects" class="col-span-1 pt-24">
            <Projects projects={DATA.PROJECTS} skills={DATA.SKILLS}/>
        </div>
        <div id="contact" class="col-span-1 pt-24">
            <Contact />
        </div>
        <div class="py-6 w-full lg:ml-auto mt-0">
            <a href={DATA.REPO.src} target="_blank">{`© ${DATA.REPO.creation_year} Katherine Wilde. All Rights Reserved.`}</a>
        </div>
    </main>
</div>