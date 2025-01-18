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
    import DATA from "$lib/data";
</script>
  
<style>
    @import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
</style>

<div class="lg:flex lg:justify-between lg:gap-4 bg-primary text-secondary">
    <Header />
    <main class="lg:w-[65%] pl-6 pr-6 text-secondary">
        <div id="about" class="pt-24">
            <About experiences={DATA.ABOUT.experience} education={DATA.ABOUT.education}/>
        </div>
        <div id="projects" class="col-span-1 pt-24">
            <Projects projects={DATA.PROJECTS}/>
        </div>
        <div class="py-6 w-full lg:ml-auto mt-0">
            <a href={DATA.REPO.src} target="_blank">{`© ${DATA.REPO.creation_year} Katherine Wilde. All Rights Reserved.`}</a>
        </div>
    </main>
</div>