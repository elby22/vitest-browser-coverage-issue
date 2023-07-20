import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		
		watch: false,
		threads: false,
		isolate: false,
		cache: false,
		coverage: {
			clean: true,
			enabled: true,
			provider: 'istanbul',
		},
		reporters: ['verbose'],
		include: ['./src/**/*.test.ts'],
		browser: {
			slowHijackESM: false,
			enabled: process.env['BROWSER'] ? true : false,
			headless: true,
			name: 'chrome',
			provider: 'webdriverio',
		},
	},
});

