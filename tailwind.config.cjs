const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('prettier-plugin-tailwindcss')]
};
