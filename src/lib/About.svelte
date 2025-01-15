<script>
    import ExperienceCard from "./ExperienceCard.svelte";
    export let experiences;
    export let education;
</script>

<section class="mb-4">
    <h2 class="text-3xl font-semibold mb-6">About</h2>
    <p>This is some stuff about me.</p>
    <p>I like cats.</p>
    <p>I like chocolate.</p>
</section>

<section class="mb-4">
    <h2 class="text-3xl font-semibold mb-6">Experience</h2>
    <div>
        {#each experiences as experience}
            <ExperienceCard experience={experience}/>
        {/each}
    </div>
    <h2 class="text-3xl font-semibold mb-6">Education</h2>
    {#each education as education}
    <div class="grid grid-cols-6 gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition mb-8">
        <div class="col-span-1">
            <img src={education.photo.src} alt={education.photo.alt}>
        </div>
        <div class="col-span-5">
            <h3 class="text-xl font-bold">{education.school}</h3>
            <p class="text-gray-700 mt-2">{education.degree}</p>
            <p class="text-gray-700 mt-2">{education.graduationDate}</p>
        </div>
    </div>
    {/each}
</section>