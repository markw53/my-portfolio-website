<script>
	import SocialButton from './SocialButton.svelte';
	export let personal;
	export let contacts;

	function scrollToSection(event) {
		event.preventDefault();
		const targetId = event.currentTarget.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			});
		}
	}

	const navLinks = ['about', 'experience', 'projects', 'contact'];

	function calculateLineWidth(element) {
		const rect = element.getBoundingClientRect();
		return Math.ceil(rect.width) * 1.25; //rect.x;
	}

	function handleMouseEnter(event) {
		const link = event.target;
		const line = link.previousElementSibling;
		const width = calculateLineWidth(link);
		line.style.width = `${width}px`;
		link.style.transform = 'scale(1.25)';
	}

	function handleMouseLeave(event) {
		const link = event.target;
		const line = link.previousElementSibling;
		line.style.width = '0px';
		link.style.transform = 'scale(1)';
	}
</script>

<header class="p-6 lg:p-10 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[35%] lg:flex-col py-12 lg:py-24">
	<h1 class="mb-4 text-6xl font-bold">{personal.name}</h1>
	<p class="mb-4 text-4xl text-secondary">{personal.role}</p>
	<p class="text-xl">{personal.introduction}</p>

	<nav class="hide-on-mobile mt-4 flex flex-col space-y-4 text-2xl">
		{#each navLinks as navLink}
			<div class="group relative inline-block">
				<div
					class={`absolute bottom-0 left-0 h-0.5 w-0 bg-neutral-gray transition-all duration-300 ease-in-out group-hover:w-full`}
				></div>
				<a
					href={`#${navLink}`}
					on:click={scrollToSection}
					class="inline-block origin-bottom-left transform capitalize transition-transform duration-300 ease-in-out hover:pl-2"
					on:mouseenter={handleMouseEnter}
					on:mouseleave={handleMouseLeave}
					>{navLink}
				</a>
			</div>
		{/each}
	</nav>

	<div class="mt-8 flex space-x-4">
		{#each contacts as contact}
			<SocialButton {contact} />
		{/each}
	</div>

	<div class="mt-12">
		<a
			class="btn button-shadow button-shadow-hover mt-4 rounded-md bg-secondary px-3 py-3 text-xl font-semibold text-primary lg:hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-secondary active:bg-secondary-dark transition duration-200"
			href={personal.cv_url}
			target="_blank"
			>Download and view my CV
		</a>
	</div>
</header>

<style>
	.button-shadow {
		box-shadow: none;
	}
	.button-shadow-hover:hover {
		box-shadow: 0 0 6px 1px #7dd3fc;
	}

	@media (max-width: 1024px) {
		.hide-on-mobile {
			display: none;
		}
		.button-shadow-hover:hover {
			box-shadow: none;
		}
	}
</style>
