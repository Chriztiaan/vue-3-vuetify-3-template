import { defineConfig } from 'vitest/config';
console.log("\n\n\ndfdsfsdfd");
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