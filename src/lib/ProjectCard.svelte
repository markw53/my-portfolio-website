<script>
	export let project;

</script>

<div class="p-6"> <!-- mb-8 -->
	{#if project.photo.src}
		<div class="relative mb-4 flex h-64 max-w-screen-sm items-center justify-center bg-transparent">
			<img
				class="inset-0 z-20 max-h-full p-1 opacity-100"
				src={project.photo.src}
				alt={project.photo.alt}
			/>
		</div>
	{/if}
	<div class="flex flex-row items-center text-secondary">
		<h3>
			<a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center space-x-2 text-2xl font-semibold"
			>
				{project.title}
				<svg
					width="1.5em"
					height="1.5em"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current text-secondary"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
					</g>
					<g id="SVGRepo_iconCarrier">
						<g id="Interface / External_Link">
							<path
								id="Vector"
								d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
							</path>
						</g>
					</g>
				</svg>
			</a>
		</h3>
	</div>
	<p class="mt-2 font-semibold">{`${project.organisation} (${project.year})`}</p>
	{#each project.description as paragraph}
		<p>{paragraph}</p>
	{/each}
	<div class="mt-6 flex flex-wrap items-start text-center pb-4 border-b">
		{#each project.skills as skill}
			<li
				class={`m-4 flex items-center justify-center rounded-full bg-transparent px-2.5 py-0.5 text-sm font-semibold outline outline-1 button-shadow`}
			>
				{skill}
			</li>
		{/each}
	</div>
</div>

<!--
</div>
-->

<style>
		.button-shadow {
		box-shadow: 0 0 6px 1px #e5e7eb;
	}
	.button-shadow-hover:hover {
		box-shadow: 0 0 6px 2px #e5e7eb;
	}
</style>
