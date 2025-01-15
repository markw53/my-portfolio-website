<script>
	import About from "$lib/About.svelte";
	import Contact from "$lib/Contact.svelte";
    import Projects from "$lib/Projects.svelte";
    import DATA from "$lib/data";

    function scrollToSection(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const targetId = event.currentTarget.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId); // Get the target element

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start', // Align to the start of the element
                inline: 'nearest'
            });
        }
    }
</script>
  
<style>
    @import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
</style>

<div class="lg:flex lg:justify-between lg:gap-4 bg-gray-100">
    <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[35%] lg:flex-col lg:py-24 p-6">
        <h1 class="text-4xl font-bold mb-4">Katherine Wilde</h1>
        <p class="text-lg mb-4">Software Developer</p>
        <p class="text-xl mb-4">I specialise in building modern web applications with a focus on usability, performance, and design.</p>
        <p class="mt-4">Check out my projects to learn more about my work.</p>
        <nav class="flex flex-col space-y-4 mt-4">
            <a href="#about" on:click={scrollToSection}>About</a>
            <a href="#experience" on:click={scrollToSection}>Experience</a>
            <a href="#projects" on:click={scrollToSection}>Projects</a>
            <a href="#contact" on:click={scrollToSection}>Contact</a>
        </nav>
    </header>
    <main class="lg:w-[65%] pl-6 pr-6">
        <div id="about" class="pt-24">
            <About experiences={DATA.ABOUT.experience} education={DATA.ABOUT.education}/>
        </div>
        <div id="projects" class="col-span-1 pt-24">
            <Projects projects={DATA.PROJECTS}/>
        </div>
        <div id="contact" class="pt-24">
            <Contact />
        </div>
        <div class="py-6 w-full lg:ml-auto mt-0">
            <p>© 2025 Katherine Wilde. All Rights Reserved.</p>
        </div>
    </main>
</div>