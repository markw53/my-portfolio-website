<script>
	export let project;

	function handleClick() {
		if (project.link) {
			window.open(project.link, '_blank');
		}
	}
</script>

<div
	href={project.link}
	on:click={handleClick}
	role="link"
	class="cursor-pointer"
	tabindex="0"
	on:keypress={(e) => e.key === 'Enter' && handleClick()}
>
	<div class="hover:bg-accent-rose mb-8 p-6 transition">
		{#if project.photo.src}
			<div
				class="relative mb-4 flex h-64 max-w-screen-sm items-center justify-center bg-transparent"
			>
				<img
					class="inset-0 z-20 max-h-full p-1 opacity-100"
					src={project.photo.src}
					alt={project.photo.alt}
				/>
			</div>
		{/if}
		<h3 class="text-xl font-bold">{project.title}</h3>
		<p class="mt-2">{`${project.organisation} (${project.year})`}</p>
		{#each project.description as paragraph}
			<p>{paragraph}</p>
		{/each}
		<div class="mt-6 flex flex-wrap items-start text-center">
			{#each project.skills as skill}
				<li
					class={`text-primary m-4 flex items-center justify-center rounded-full bg-transparent px-2.5 py-0.5 text-sm font-semibold outline outline-1`}
				>
					{skill}
				</li>
			{/each}
		</div>
	</div>
</div>

<style>
</style>
