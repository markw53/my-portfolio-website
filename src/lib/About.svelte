<script>
	export let paragraphs

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

<section class="bg-neutral-white text-primary rounded-sm mb-6"> <!-- bg-accent-salmon bg-opacity-10 -->
	<h2 class="mb-6 pt-6 pl-6 text-4xl font-semibold">About</h2>

	<div class="rounded-lg p-6 pt-0">
		{#each paragraphs as paragraph}
		<p>{paragraph}</p>
		{/each}
	</div>
</section>

<!--<div class="h-1 mb-2 rounded-lg bg-gradient-to-r from-secondary to-primary"></div>-->

<!-- bg-${categoryColours[language.category]} -->
<!-- bg-${categoryColours[technology.category]} -->
<!-- h-10 w-28 -->
