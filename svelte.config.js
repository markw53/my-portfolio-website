import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter() // no extra options needed!
	},

	preprocess: [mdsvex(), vitePreprocess()],
	extensions: ['.svelte', '.svx']
};

export default config;