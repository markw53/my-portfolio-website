import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/js/**/*.js'],

	theme: {
		extend: {
			colors: {
				// Primary Color Palette (Main background color and neutral shades)
				primary: {
					DEFAULT: '#312e81', // Indigo (main background)
					light: '#6366f1',
				},
				secondary: {
					DEFAULT: '#38bdf8', // Cyan for accent elements (buttons, links)
					light: '#7dd3fc',
				},
				accent: {
					salmon: '#FDA4AF', // Peachy pink for highlights and hover effects
					rose: '#FFE4E6', // Soft purple (a calm secondary accent)
				},
				neutral: {
					white: '#ffffff', // White for text and background
					gray: '#e5e7eb', // Light gray for subtle contrast
				}
			},
			backgroundImage: {
				'gradient-main': 'linear-gradient(to bottom right, #312e81, #38bdf8)', // Indigo to Cyan gradient for background
				'gradient-soft': 'linear-gradient(to bottom, #FDA4AF, #D4C0FF)', // Soft peach to purple for accents
				'conic-gradient': 'conic-gradient(at bottom left, #f0abfc, #4ade80, #be123c)',
				'primary-to-secondary': 'linear-gradient(45deg, #2D2D2D, #4A90E2)',
				'prussian-blue-to-dark-purple': 'linear-gradient(45deg, #212F45, #312244)'
			},
			translate: {
				'20vh': '20vh'
			},
			transitionDuration: {
				700: '700ms'
			}
		}
	},
	plugins: [typography, forms, containerQueries, require('tw-elements/plugin.cjs')]
};
