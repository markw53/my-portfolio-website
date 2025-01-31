<script>
	export let paragraphs;
</script>

<section class="mb-4 rounded-sm bg-primary text-neutral-gray">
	<h2 class="mb-6 pl-6 pt-6 text-4xl text-secondary">About</h2>

	<div class="rounded-lg p-6 pb-0 pt-0">
		{#each paragraphs as paragraph}
			<p>{paragraph}</p>
			<br />
		{/each}
	</div>
</section>
