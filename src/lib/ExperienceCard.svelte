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
	<div class="hover:bg-black/10 border border-none pb-2 pl-6 pr-6 pt-2">
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
						<div>
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
			class={`${isExpanded ? '!visible' : 'hidden'}`}
			aria-labelledby={`heading-${experience.id}`}
		>
			<span class="mb-2 pl-0.5 pr-10">
				{#each experience.description as paragraph}
					<p>{paragraph}</p>
				{/each}
			</span>
		</div>
	</div>
</div>

<style>
</style>
