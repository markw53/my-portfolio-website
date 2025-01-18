<script>
    
    export let project;

    function handleClick() {
        if (project.link) {
            window.location.href = project.link;
        }
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
        </div>
    </div>
</div>

<style>
    
</style>