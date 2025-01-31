<script>
	import ExperienceCard from './ExperienceCard.svelte';
	export let experiences;
//	export let education;
</script>

<section class="bg-primary text-neutral-gray mb-4 rounded-sm">
	<h2 class="mb-6 pt-6 pl-6 text-4xl text-secondary">Experience</h2>
	<div>
		<h2 id="experienceAccordionTitle" class="sr-only">Expandable List of Work Experiences</h2>
		{#each experiences as experience}
			<ExperienceCard {experience} />
		{/each}
	</div>
</section>
<!--
<section>
	<h2 class="mb-6 text-4xl font-semibold">Education</h2>
	{#each education as education}
		<div
			class="hover:bg-primary hover:bg-opacity-25 mb-8 grid grid-cols-6 gap-4 rounded-lg p-6 shadow-lg transition hover:shadow-xl"
		>
			<div class="col-span-1">
				<img
					class="outline-secondary max-w-64 bg-white outline outline-1 outline-offset-0"
					src={education.photo.src}
					alt={education.photo.alt}
				/>
			</div>
			<div class="col-span-5">
				<h3 class="text-xl font-bold">{education.school}</h3>
				<p class="mt-2">{education.degree}</p>
				<p class="mt-2">{education.graduationDate}</p>
			</div>
		</div>
	{/each}
</section>
-->
