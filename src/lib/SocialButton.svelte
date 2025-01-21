<script>
	export let contact;
</script>

<a href={contact.url} target="_blank" role="button" aria-label={contact.actionType}>
	<button
		type="button"
		data-twe-ripple-init
		data-twe-ripple-color="light"
		class="bg-accent-salmon text-primary hover:bg-accent-rose mb-2 inline-block rounded-md p-3 text-xs font-medium uppercase leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
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
