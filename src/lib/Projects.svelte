<script>
    import ProjectCard from "./ProjectCard.svelte";
    export let projects;
    export let skills;

    console.log(skills.programmingLanguages)
    const skillsList = skills.programmingLanguages.concat(skills.technologies);
</script>
    
<section class="mb-4">
    <h2 class="text-4xl font-semibold mb-6">Projects</h2>
    <p>Here are a few projects I have worked on recently.</p>
    <div>
        {#each projects as project}
            <ProjectCard project={project} skillsList={skillsList}/>
        {/each}
    </div>
</section>
  
<style>
      
</style>