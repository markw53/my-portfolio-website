<script>
	export let contact;
</script>

<a href={contact.url} target="_blank" role="button" aria-label={contact.actionType}>
	<button
		type="button"
		class="button-shadow button-shadow-hover mb-2 block rounded-md bg-accent-salmon p-3 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out lg:hover:bg-accent-rose focus:outline-none focus:ring-0 active:bg-accent-dark transition duration-200"
		aria-label={contact.actionType}
		tabindex="-1"
	>
		<span class="[&>svg]:h-5 [&>svg]:w-5">
			<svg
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox={contact.viewBox}
			>
				<title>{contact.actionType}</title>
				<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
				<path d={contact.path} />
			</svg>
		</span>
	</button>
</a>

<style>
	.button-shadow {
		box-shadow: none;
	}
	.button-shadow-hover:hover {
		box-shadow: 0 0 6px 1px #ffe4e6;
	}
	@media (max-width: 1024px) {
		.button-shadow-hover:hover {
			box-shadow: none;
		}
	}
</style>
