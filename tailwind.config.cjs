const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(50% 50% at 50% 50%, rgba(30, 58, 138, 0.25) 0%, rgba(49, 46, 129, 0.05) 100%)'
			},
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('prettier-plugin-tailwindcss')]
};
