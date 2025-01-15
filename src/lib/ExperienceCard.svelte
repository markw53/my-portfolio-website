<script>
    
    export let experience;

</script>

<div>
    <div class="grid grid-cols-6 gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition mb-8">
        <div class="col-span-1">
            <img src={experience.photo.src} alt={experience.photo.alt}>
        </div>
        <div class="col-span-5">
        <h3 class="text-xl font-bold">{experience.jobTitle}</h3>
        <p class="text-gray-700 mt-2">{`${experience.company}, ${experience.location} (${experience.startDate} - ${experience.endDate})`}</p>
        <p class="text-gray-700 mt-2">{experience.description}</p>
        </div>
    </div>
</div>

<style>
    
</style>