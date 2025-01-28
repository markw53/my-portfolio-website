<script>
	import ProjectCard from './ProjectCard.svelte';
	export let projects;
</script>

<section class="mb-4 rounded-sm bg-primary text-neutral-gray">
	<h2 class="mb-6 pl-6 pr-6 pt-6 text-4xl text-secondary">Projects</h2>
	<p class="pl-6">Here are a few projects I have worked on recently.</p>
	<div>
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<style>
</style>
