import { createNuxtPersistedState } from 'pinia-plugin-persistedstate';
import { defineNuxtPlugin, useCookie } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.$pinia.use(
		createNuxtPersistedState(useCookie, {
			cookieOptions: {
				maxAge: 60 * 60 * 24 * 31 * 2,
			},
		})
	);
});
