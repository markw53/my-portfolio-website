<script>
	export let skills;

	const categoryColours = {
		frontend: 'green-200',
		backend: 'gray-300',
		frameworks: 'yellow-200',
		databases: 'blue-100',
		version_control: 'yellow-300',
		testing: 'red-200',
		ui_ux: 'pink-200'
	};
</script>

<section class="bg-accent-salmon bg-opacity-10 p-6 rounded-lg mb-6">
	<h2 class="mb-6 text-4xl font-semibold">About</h2>

	<div class="hover:bg-primary rounded-lg p-4 hover:bg-opacity-25">
		<p>This is some stuff about me.</p>
		<p>I like cats.</p>
		<p>I like chocolate.</p>
	</div>
</section>

<!--<div class="h-1 mb-2 rounded-lg bg-gradient-to-r from-secondary to-primary"></div>-->

<section class="bg-accent-salmon bg-opacity-10 p-6 rounded-lg mt-32 mb-8">
	<h2 class="mb-6 text-4xl font-semibold">Skills</h2>
	<h3 class="text-xl font-bold">Programming Languages</h3>
	<ul class="flex flex-row">
		<!-- rounded-md bg-slate-800 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm -->
		{#each skills.programmingLanguages as language}
			<li
				class={`hover:text-primary m-4 flex items-center justify-center rounded-full bg-transparent px-2.5 py-0.5 text-sm font-semibold text-white outline outline-1 hover:bg-white`}
			>
				{language.name}
			</li>
		{/each}
	</ul>
	<h3 class="text-xl font-bold">Technologies</h3>
	<ul class="flex flex-wrap">
		{#each skills.technologies as technology}
			<li
				class={`hover:text-primary m-4 flex items-center justify-center rounded-full bg-transparent px-2.5 py-0.5 text-sm font-semibold text-white outline outline-1 hover:bg-white`}
			>
				{technology.name}
			</li>
		{/each}
	</ul>
</section>

<!-- bg-${categoryColours[language.category]} -->
<!-- bg-${categoryColours[technology.category]} -->
<!-- h-10 w-28 -->
