<script>
	let name = '';
	let email = '';
	let message = '';
</script>

<section class="mb-4 rounded-sm bg-primary p-6 text-neutral-gray">
	<h2 class="mb-6 text-4xl text-secondary">Contact</h2>

	<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
		<input type="hidden" name="form-name" value="contact" />
		<input type="hidden" name="form-name" value="contact" />

		<label for="name" class="block font-semibold text-primary">Name</label>
		<input
			type="text"
			id="name"
			name="name"
			bind:value={name}
			required
			placeholder="Your Name"
			class="mt-1 block w-full rounded-md border border-gray-300 p-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
		/>

		<label for="email" class="mt-4 block font-semibold text-primary">Email</label>
		<input
			type="email"
			id="email"
			name="email"
			bind:value={email}
			required
			placeholder="Your Email"
			class="mt-1 block w-full rounded-md border border-gray-300 p-3 text-black text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
		/>

		<label for="message" class="mt-4 block font-semibold text-primary">Message</label>
		<textarea
			id="message"
			name="message"
			bind:value={message}
			required
			placeholder="Your Message"
			class="mt-1 block w-full rounded-md border border-gray-300 p-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
		></textarea>

		<button
			type="submit"
			class="button-shadow button-shadow-hover mt-4 w-full rounded-md bg-secondary py-3 font-semibold text-primary lg:hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-secondary active:bg-secondary-dark transition duration-200"
		>
			Submit
		</button>
	</form>
</section>

<style>
	.button-shadow {
		box-shadow: none;
	}
	.button-shadow-hover:hover {
		box-shadow: 0 0 6px 1px #7dd3fc;
	}
	@media (max-width: 1024px) {
		.button-shadow-hover:hover {
			box-shadow: none;
		}
	}
</style>
