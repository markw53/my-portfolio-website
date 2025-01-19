<script>
    
    export let project;
    export let skillsList;

    function handleClick() {
        if (project.link) {
            window.location.href = project.link;
        }
    }

    const lookupIcons = new Map(skillsList.map(skill => [skill.name, skill.icon]));

    const icons = project.skills.map(skill => lookupIcons.get(skill) || skill);
    
    function isValidImage(src) {
        return src && !src.startsWith('data:') && /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(src);
    }

</script>

<div href={project.link} on:click={handleClick} role="link" tabindex="0" on:keypress={(e) => e.key === 'Enter' && handleClick()}>
    <div class="grid grid-cols-6 gap-4 bg-primary p-6 rounded-lg shadow-lg hover:bg-highlight hover:shadow-xl transition mb-8">
        <div class="col-span-1">
            <img class="bg-white outline outline-1 outline-offset-4 outline-secondary" src={project.photo.src} alt={project.photo.alt}>
        </div>
        <div class="col-span-5">
            <h3 class="text-xl font-bold">{project.title}</h3>
            <p class="mt-2">{project.description}</p>
            <div class="flex flex-row items-start text-center mt-6">
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
</div>

<style>
    
</style>