<script>
	export let experience;

	import { onMount } from 'svelte';

	onMount(async () => {
		if (typeof window !== 'undefined') {
			try {
				const { Collapse, initTWE } = await import('tw-elements/js/tw-elements.umd.min.js');
				initTWE({ Collapse });
			} catch (error) {
				console.error('Failed to load tw-elements:', error);
			}
		}
	});

	let isExpanded = false;

	function toggleCollapse() {
		isExpanded = !isExpanded;
	}
</script>

<div id="experienceAccordion">
	<div
		class="hover:bg-primary hover:bg-opacity-25 rounded-lg border border-none"
	>
		<button
			type="button"
			class="mb-0 w-full cursor-pointer text-left"
			on:click={toggleCollapse}
			id={`heading-${experience.id}`}
			aria-expanded={isExpanded}
			aria-controls={`collapse${experience.id}`}
		>
			<div id="job-info" class="flex items-center justify-between">
				<div class="flex-1">
					<div class="flex items-center">
						<div class="sm:w-1/8 w-1/6 flex-shrink-0 p-4 md:w-1/12">
							<!--
							<img
								class="h-auto w-full bg-transparent"
								src={experience.photo.src}
								alt={experience.photo.alt}
							/>
						-->
						</div>
						<div class="ml-4">
							<h3 class="text-xl font-bold">{experience.jobTitle}</h3>
							<p class="mt-2">
								{`${experience.company}, ${experience.location} (${experience.startDate} - ${experience.endDate})`}
							</p>
						</div>
					</div>
				</div>
				<span
					class="[&:not([data-twe-collapse-collapsed])]:shadow-border group relative flex items-center border-0 px-6 py-5 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-transparent"
				>
					<span
						class={`-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none ${
							isExpanded ? 'rotate-[-180deg]' : 'rotate-0'
						} group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 [&>svg]:h-6 [&>svg]:w-6`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</span>
				</span>
			</div>
		</button>
		<div
			id={`collapse${experience.id}`}
			class={`grid grid-cols-11 ${isExpanded ? '!visible' : 'hidden'}`}
			aria-labelledby={`heading-${experience.id}`}
		>
			<span class="col-span-1"></span>
			<span class="col-span-10 mb-2 pl-0.5 pr-10">
				{#each experience.description as paragraph}
					<p>{paragraph}</p>
				{/each}
			</span>
		</div>
	</div>
</div>

<!--
<div id="experienceAccordion">
    <div class="border border-none rounded-lg bg-primary hover:bg-highlight dark:border-neutral-600 dark:bg-body-dark">
        <div class="mb-0" id={`heading-${experience.id}`}>
            <div id="job-info" class="flex justify-between items-center">
                <div class="flex-1">
                    <div class="flex items-center">
                        <div class="p-4 flex-shrink-0 w-1/6 sm:w-1/8 md:w-1/12">
                            <img class="bg-white w-full h-auto" src={experience.photo.src} alt={experience.photo.alt}>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-xl font-bold">{experience.jobTitle}</h3>
                            <p class="mt-2">{`${experience.company}, ${experience.location} (${experience.startDate} - ${experience.endDate})`}</p>
                        </div>
                    </div>
                </div> -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<!--                <button
                    class="group relative flex items-center border-0 bg-white px-6 py-5 text-left text-base text-secondary transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-transparent [&:not([data-twe-collapse-collapsed])]:text-secondary [&:not([data-twe-collapse-collapsed])]:shadow-border dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-secondary dark:[&:not([data-twe-collapse-collapsed])]:shadow-primary/10 "
                    type="button"
                    data-twe-collapse-init
                    data-twe-target={`#collapse${experience.id}`}
                    aria-expanded={experience.id === 1 ? "true" : "false"}
                    aria-controls={`collapse${experience.id}`}
                    data-twe-collapse-collapsed={experience.id !== 1 ? true : undefined}>
                    <span class={`-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none ${experience.id !== 1 ? 'rotate-0' : 'rotate-[-180deg]'} group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 [&>svg]:h-6 [&>svg]:w-6`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
        <div
            id={`collapse${experience.id}`}
            class={`grid grid-cols-11 ${experience.id === 1 ? "!visible" : "!visible hidden"}`}
            data-twe-collapse-item
            data-twe-collapse-show
            aria-labelledby={`heading-${experience.id}`}
            data-twe-parent="#experienceAccordion">
            <span class="col-span-1"></span>
            <span class="col-span-10 pl-0.5 pr-10 mb-2">
                {#each experience.description as paragraph}
                    <p>{paragraph}</p>
                {/each}
            </span>
        </div>
    </div>
</div>
-->
<style>
</style>
