<script>
    import ProjectCard from "./ProjectCard.svelte";
    export let projects;
</script>
    
<section class="mb-4">
    <h2 class="text-3xl font-semibold mb-6">Projects</h2>
    <p>Here are a few projects I have worked on recently.</p>
    <div>
        {#each projects as project}
            <ProjectCard project={project}/>
        {/each}
    </div>
</section>
  
<style>
      
</style>