<script>
    import ProjectCard from "./ProjectCard.svelte";
    export let projects;
</script>
    
<section class="mb-4">
    <h2 class="text-3xl font-semibold mb-6">Projects</h2>
    <p>Here are a few projects I have worked on recently.</p>
    <div> <!--class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"-->
        {#each projects as project}
            <ProjectCard project={project}/>
        {/each}
    </div>
</section>
  
<style>
      
</style>