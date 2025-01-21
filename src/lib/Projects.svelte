<script>
	import ProjectCard from './ProjectCard.svelte';
	export let projects;
	export let skills;

	const skillsList = skills.programmingLanguages.concat(skills.technologies);
</script>

<section class="bg-accent-salmon bg-opacity-10 p-6 rounded-lg mb-4">
	<h2 class="mb-6 text-4xl font-semibold">Projects</h2>
	<p>Here are a few projects I have worked on recently.</p>

	<div>
		{#each projects as project}
			<ProjectCard {project} {skillsList} />
		{/each}
	</div>
</section>

<style>
</style>
