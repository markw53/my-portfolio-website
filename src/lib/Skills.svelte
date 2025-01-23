<script>
	export let skills;

	function isValidImage(src) {
		return src && !src.startsWith('data:') && /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(src);
	}
</script>

<!--<div class="h-1 mb-2 rounded-lg bg-gradient-to-r from-secondary to-primary"></div>-->

<section class="bg-neutral-white text-primary mb-8 rounded-sm p-6">
	<h2 class="mb-6 text-4xl font-semibold">Skills</h2>
	<h3 class="text-xl font-bold">Programming Languages</h3>
	<ul class="flex flex-wrap justify-center">
		<!-- rounded-md bg-slate-800 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm -->
		{#each skills.programmingLanguages as language}
			<li
				class={`text-primary m-4 flex flex-col items-center bg-transparent text-sm font-semibold`}
			>
				{#if isValidImage(language.icon)}
					<img class="mr-6 w-12" src={language.icon} alt={language.name} />
				{/if}
				<p class="mr-6 pt-1 font-semibold">{language.name}</p>
			</li>
		{/each}
	</ul>
	<h3 class="text-xl font-bold">Technologies</h3>
	<ul class="flex flex-wrap justify-center">
		{#each skills.technologies as technology}
			<li
				class={`text-primary m-4 flex flex-col items-center bg-transparent text-sm font-semibold`}
			>
				{#if isValidImage(technology.icon)}
					<img class="mr-6 w-12" src={technology.icon} alt={technology.icon} />
				{/if}
				<p class="mr-6 pt-1 font-semibold">{technology.name}</p>
			</li>
		{/each}
	</ul>
</section>
