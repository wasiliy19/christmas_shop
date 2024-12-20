import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
    root: './src',
    // base: '/auto-shop/',
    server: {
        port: 3000,
        open: true,
    },
    preview: {
        port: 8080,
        open: true,
    },
    publicDir: './src/assets',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './src/index.html',
                // pricing: './src/pricing.html',
                // contats: './src/contacts.html',
            },
        },
    },
    plugins: [
        [injectHTML()],
        ViteMinifyPlugin(),
        ViteImageOptimizer({
            png: {
                quality: 80,
            },
            jpeg: {
                quality: 80,
            },
            jpg: {
                quality: 80,
            },
        }),
    ],
});
