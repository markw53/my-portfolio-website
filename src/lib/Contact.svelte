<script>
	let name = '';
	let email = '';
	let message = '';

</script>


<section class="bg-neutral-white text-primary mb-4 rounded-sm p-6">
	<h2 class="mb-6 text-4xl font-semibold">Contact</h2>

	<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
		<input type="hidden" name="form-name" value="contact" />
		<p>
		  <label>Your Name: <input type="text" name="name" /></label>
		</p>
		<p>
		  <label>Your Email: <input type="email" name="email" /></label>
		</p>
		<p>
		  <label>Your Role: <select name="role[]" multiple>
			<option value="leader">Leader</option>
			<option value="follower">Follower</option>
		  </select></label>
		</p>
		<p>
		  <label>Message: <textarea name="message"></textarea></label>
		</p>
		<p>
		  <button type="submit">Send</button>
		</p>
	  </form>
	  


<!--
	<form name="contact" method="POST" data-netlify="true" action="/">
		<input type="hidden" name="form-name" value="contact" />

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
	</form>
-->
	</section>
<style>
</style>
