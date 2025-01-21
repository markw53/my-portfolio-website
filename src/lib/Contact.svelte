<script>
	let name = '';
	let email = '';
	let message = '';
	let status = '';

	const handleSubmit = (event) => {
		event.preventDefault();
		name = '';
		email = '';
		message = '';
		status = 'Form submitted successfully!';
	};

</script>

<section class="bg-accent-salmon bg-opacity-10 p-6 rounded-lg mb-4">
	<h2 class="mb-6 text-4xl font-semibold">Contact</h2>

	<form name="contact" method="POST" data-netlify="true" on:submit={handleSubmit}>
		<!-- Hidden input to tell Netlify what form it is -->
		<input type="hidden" name="form-name" value="contact" />

		<!-- Name Field -->
		<label for="name" class="block font-semibold text-white">Name</label>
		<input
			type="text"
			id="name"
			name="name"
			bind:value={name}
			required
			placeholder="Your Name"
			class="mt-1 block w-full rounded-md border border-gray-300 p-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>

		<!-- Email Field -->
		<label for="email" class="mt-4 block font-semibold text-white">Email</label>
		<input
			type="email"
			id="email"
			name="email"
			bind:value={email}
			required
			placeholder="Your Email"
			class="mt-1 block w-full rounded-md border border-gray-300 p-3 text-black text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>

		<!-- Message Field -->
		<label for="message" class="mt-4 block font-semibold text-white">Message</label>
		<textarea
			id="message"
			name="message"
			bind:value={message}
			required
			placeholder="Your Message"
			class="mt-1 block w-full rounded-md border border-gray-300 p-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
		></textarea>

		<button
			type="submit"
			class="mt-4 w-full rounded-md bg-ultra_violet py-3 font-semibold text-white shadow-md hover:bg-ultra_violet focus:outline-none focus:ring-2 focus:ring-blue-500"
		>
			Submit
		</button>

		{#if status}
			<p class="mt-4 text-center text-green-600">{status}</p>
		{/if}
	</form>
</section>

<style>
</style>
