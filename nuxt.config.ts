import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
			],
			title: 'Time Tracker App',
		},
	},
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
	modules: ['@pinia/nuxt', '@vueuse/nuxt'],
	css: ['~/assets/css/tailwind.css'],
});
