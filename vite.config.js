import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    // config options
    base: '/landing-page-harvey/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                preu1: resolve(__dirname, 'preus/preu1.html'),
                preu2: resolve(__dirname, 'preus/preu2.html'),
                preu3: resolve(__dirname, 'preus/preu3.html'),
            },
        },
    },
});
