import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'use-tmi',
			formats: ['es', 'umd'],
			fileName: (format) => `use-tmi.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'tmi.js'],
			output: {
				globals: {
					react: 'React',
					'tmi.js': 'tmi',
				},
			},
		},
	},
});
