<script>
	import ProjectCard from './ProjectCard.svelte';
	export let projects;
	export let skills;

	const skillsList = skills.programmingLanguages.concat(skills.technologies);
</script>

<section class="bg-neutral-white text-primary mb-4 rounded-sm">
	<h2 class="mb-6 pl-6 pr-6 pt-6 text-4xl font-semibold">Projects</h2>
	<p class="pl-6">Here are a few projects I have worked on recently.</p>
	<div>
		{#each projects as project}
			<ProjectCard {project} {skillsList} />
		{/each}
	</div>
</section>

<style>
</style>
