/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				graphPaper: "url('/images/bg-graph-paper.png')",
			},
			borderWidth: {
				1: "1px",
				3: "3px",
			},
			colors: {
				icterine: '#fbfd5d', /* yellow */
				mamba: '#7d6881', /* light purple */
				mardiGras: '#331e36', /* dark purple */
				fountainBlue: '#61c2bc', /* light blue */
				seashell: '#f1f1f1', /* light gray */
				cinder: '#25292f', /* dark gray */
				gallery: '#f0f0f0', /* light gray */
				stormDust: '#636363', /* medium gray */
			},
			lineHeight: {
				'1.8': '1.8',
			},
			margin: {
				18: '72px',
			},
			padding: {
				18: '72px',
				sectionTop: '100px',
				sectionBottom: '130px',
				page: '80px',
			},
			zIndex: {
				modal: 9999,
				overlay: 9998,
				hamburger: 9995,
				navigation: 9994,
				hr: 100,
				bg: 50
			}
		},
		fontFamily: {
			sans: ['Inter', 'ui-sans-serif', 'sans-serif'],
			wide: ['Krona One', 'ui-sans-serif', 'sans-serif'],
			handwriting: ['Kalam', 'ui-sans-serif', 'cursive'],
			condensed: ['Bebas Neue', 'Arial Narrow', 'ui-sans-serif','sans-serif'],
		},
	},
	plugins: [],
}
