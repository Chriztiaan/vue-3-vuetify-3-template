import { defineConfig } from 'vitest/config';

export default defineConfig(() => ({
	test: {
		globals: true,
		setupFiles: [
			'./test/setupTests.ts',
		],
		cache: {
			dir: './../node_modules/.vitest/cache'
		}
	},
}));