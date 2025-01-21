<script>
	export let project;
	export let skillsList;

	function handleClick() {
		if (project.link) {
			window.open(project.link, '_blank');
		}
	}

	const lookupIcons = new Map(skillsList.map((skill) => [skill.name, skill.icon]));

	const icons = project.skills.map((skill) => lookupIcons.get(skill) || skill);

	function isValidImage(src) {
		return src && !src.startsWith('data:') && /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(src);
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
	<div class="hover:bg-primary hover:bg-opacity-25 mb-8 rounded-lg p-6 shadow-lg transition hover:shadow-xl">
		{#if project.photo.src}
		<div class="h-52 w-80 mb-4 relative bg-gradient-to-br from-secondary via-transparent to-white flex items-center justify-center">	
			<!-- bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 -->
			<!-- bg-gradient-to-r from-slate-900 via-transparent to-slate-900 -->	
				<img
					class="inset-0 max-h-full p-1 opacity-100 z-20"
					src={project.photo.src}
					alt={project.photo.alt}
				/>
			</div>
		{/if}
		<h3 class="text-xl font-bold">{project.title}</h3>
		<p class="mt-2">{`${project.organisation} (${project.year})`}</p>
		{#each project.description as paragraph}
			<p class="mt-2">{paragraph}</p>
		{/each}
		<div class="mt-6 flex flex-row items-start text-center">
			{#each icons as icon (icon)}
				{#if isValidImage(icon)}
					<img class="mr-6 w-16" src={icon} alt={icon} />
				{:else}
					<span class="mr-6 w-16 font-semibold">{icon}</span>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
</style>


<!-- bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 -->