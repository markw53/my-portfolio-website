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

<section class="bg-neutral-white text-primary mb-4 rounded-sm p-6">
	<h2 class="mb-6 text-4xl font-semibold">Contact</h2>

	<form name="contact" method="POST" data-netlify="true">
		<!-- Hidden input to tell Netlify what form it is -->
		<input type="hidden" name="form-name" value="contact" />

		<!-- Name Field -->
		<label for="name" class="text-primary block font-semibold">Name</label>
		<input
			type="text"
			id="name"
			name="name"
			bind:value={name}
			required
			placeholder="Your Name"
			class="focus:ring-secondary mt-1 block w-full rounded-md border border-gray-300 p-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2"
		/>

		<!-- Email Field -->
		<label for="email" class="text-primary mt-4 block font-semibold">Email</label>
		<input
			type="email"
			id="email"
			name="email"
			bind:value={email}
			required
			placeholder="Your Email"
			class="focus:ring-secondary mt-1 block w-full rounded-md border border-gray-300 p-3 text-black text-gray-900 shadow-sm focus:outline-none focus:ring-2"
		/>

		<!-- Message Field -->
		<label for="message" class="text-primary mt-4 block font-semibold">Message</label>
		<textarea
			id="message"
			name="message"
			bind:value={message}
			required
			placeholder="Your Message"
			class="focus:ring-secondary mt-1 block w-full rounded-md border border-gray-300 p-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2"
		></textarea>

		<button
			type="submit"
			class="bg-secondary text-primary hover:bg-secondary-light focus:ring-secondary mt-4 w-full rounded-md py-3 font-semibold shadow-md focus:outline-none focus:ring-2"
		>
			Submit
		</button>
		<!--
		{#if status}
			<p class="mt-4 text-center text-green-600">{status}</p>
		{/if}
	-->
	</form>
</section>

<style>
</style>
