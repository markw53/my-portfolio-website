<script>
	export let skills;

	function isValidImage(src) {
		return src && !src.startsWith('data:') && /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(src);
	}
</script>

<section class="mb-4 rounded-sm bg-primary p-6 text-neutral-gray">
	<h2 class="mb-6 text-4xl text-secondary">Skills</h2>
	<h3 class="text-xl font-bold">Programming Languages</h3>
	<ul class="flex flex-wrap justify-center">
		{#each skills.programmingLanguages as language}
			<li
				class="m-4 flex h-24 w-20 flex-col items-center justify-center rounded-md bg-black/10 text-sm font-semibold text-neutral-gray shadow-lg"
			>
				{#if isValidImage(language.icon)}
					<div class="flex h-10 w-10 items-center justify-center bg-transparent">
						<img class="h-full w-full object-contain" src={language.icon} alt={language.name} />
					</div>
				{/if}

				<p class="text-center">{language.name}</p>
			</li>
		{/each}
	</ul>

	<h3 class="text-xl font-bold">Technologies</h3>
	<ul class="flex flex-wrap justify-center">
		{#each skills.technologies as technology}
			<li
				class={`m-4 flex h-24 w-20 flex-col items-center justify-center rounded-md bg-black/10 text-sm font-semibold text-neutral-gray shadow-lg`}
			>
				{#if isValidImage(technology.icon)}
					<div class="flex h-10 w-10 items-center justify-center bg-transparent">
						<img class="h-full w-full object-contain" src={technology.icon} alt={technology.icon} />
					</div>
				{/if}
				<p class="text-center">{technology.name}</p>
			</li>
		{/each}
	</ul>
</section>
