import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/tw-elements/js/**/*.js',
	],

	theme: {
		extend: {}
	},

	plugins: [typography, forms, containerQueries, require("tw-elements/plugin.cjs")],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
		  		primary: "#000000",
		  		secondary: "#E5E5E5",
				highlight: "#14213D",
				accent: "#FCA311",
			}
		}
	}
};
