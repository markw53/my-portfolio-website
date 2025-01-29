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
				primary: {
					DEFAULT: '#312e81',
					light: '#6366f1',
				},
				secondary: {
					DEFAULT: '#38bdf8',
					light: '#7dd3fc',
					dark: '#0ea5e9',
				},
				accent: {
					salmon: '#FDA4AF',
					rose: '#FFE4E6',
					dark: '#fb7185',
				},
				neutral: {
					white: '#ffffff',
					gray: '#e5e7eb',
				}
			},
			backgroundImage: {
				'gradient-main': 'linear-gradient(to bottom right, #312e81, #38bdf8)',
				'gradient-soft': 'linear-gradient(to bottom, #FDA4AF, #D4C0FF)',
				'conic-gradient': 'conic-gradient(at bottom left, #f0abfc, #4ade80, #be123c)',
				'primary-to-secondary': 'linear-gradient(45deg, #2D2D2D, #4A90E2)',
				'prussian-blue-to-dark-purple': 'linear-gradient(45deg, #212F45, #312244)'
			},
			fontFamily: {
				sans: ['Lato', 'Segoe UI', 'Arial', 'sans-serif'],
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

