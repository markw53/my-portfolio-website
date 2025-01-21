<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let isVisible = writable(false);
	let domRef;

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
		@apply translate-y-20vh invisible transform opacity-0 transition-opacity duration-500 ease-out;
	}
	.is-visible {
		@apply visible transform-none opacity-100;
	}
</style>
