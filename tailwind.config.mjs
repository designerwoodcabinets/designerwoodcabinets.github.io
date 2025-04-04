/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/clsx/**/*.js'
	],
	theme: {
		extend: {
			// Design Token Components
			colors: {
				ftnText: 'var(--color-font)',
				ftnBg: 'var(--color-bg-body)',
				ftnTextNav: 'var(--color-)'
			},
			fontFamily: {
				sora: ['Sora', 'sans-serif'],
			},
			backgroundImage: { 
				'hero': 'url("../assets/images/hero.jpg")',
				'kitchen': 'url("../assets/images/kitchen-1.jpg")',
				'bathroom': 'url("../assets/images/bathroom.jpg")',
				'kitchen-2': 'url("../assets/images/kitchen-2.jpg")',
				'top': 'url("../assets/images/top.jpg")',
				'marmol': 'url("../assets/images/marmol.jpg")',
				'line-v-gradient': 'linear-gradient(0deg, transparent 0%, var(--brand-gray-300) 40%, var(--brand-gray-300) 90%, transparent 100%)',
				'line-h-gradient': 'linear-gradient(90deg, transparent 0%, var(--brand-gray-400) 40%, var(--brand-gray-400) 90%, transparent 100%)'
			},
			animation: {
				zoom: 'zoomBg 10s ease-in-out infinite',
			  },
			  keyframes: {
				zoomBg: {
				  '0%': { transform: 'scale(1)' },
				  '50%': { transform: 'scale(1.1)' },
				  '100%': { transform: 'scale(1)' },
				},
			  },
		},
	},
	plugins: [],
}
