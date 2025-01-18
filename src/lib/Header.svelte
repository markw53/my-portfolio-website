<script>
import SocialButton from './SocialButton.svelte';
import DATA from "$lib/data";
const contacts = DATA.CONTACTS;

import { onMount } from "svelte";

onMount(async () => {
    if (typeof window !== 'undefined') {
        try {
            const { Ripple, initTWE } = await import("tw-elements/js/tw-elements.umd.min.js");
            initTWE({ Ripple });
        } catch (error) {
            console.error('Failed to load tw-elements:', error);
        }
    }
});

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

<header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[35%] lg:flex-col lg:py-24 p-6 text-secondary">
    <h1 class="text-4xl font-bold mb-4">Katherine Wilde</h1>
    <p class="text-lg mb-4">Software Developer</p>
    <nav class="flex flex-col space-y-4 mt-4">
        <a href="#about" on:click={scrollToSection}>About</a>
        <a href="#projects" on:click={scrollToSection}>Projects</a>
    </nav>

    <div class="flex mt-8 space-x-4">
        {#each contacts as contact}
            <SocialButton contact={contact}/>
        {/each}
    </div>
    
</header>
