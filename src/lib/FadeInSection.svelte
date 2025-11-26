<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let isVisible = writable(false);
	let domRef!: HTMLDivElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => isVisible.set(entry.isIntersecting));
			},
			{ threshold: 0, rootMargin: '0px 0px -10% 0px' }
		);
		observer.observe(domRef);
		return () => observer.unobserve(domRef);
	});
</script>

<div class="fade-in-section" class:is-visible={$isVisible} bind:this={domRef}>
	<slot></slot>
</div>

<style>
	.fade-in-section {
		transform: translateY(20vh);
		visibility: hidden;
		opacity: 0;
		transition: opacity 500ms ease-out, transform 500ms ease-out;
	}
	.is-visible {
		visibility: visible;
		transform: none;
		opacity: 1;
	}
</style>
