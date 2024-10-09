import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    // config options
    base: '/landing-page-harvey/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                preu1: resolve(__dirname, 'preus/preu1.html'), // Changed 'nested' to 'preu1'
                preu2: resolve(__dirname, 'preus/preu2.html'), // Changed 'nested' to 'preu2'
                preu3: resolve(__dirname, 'preus/preu3.html'), // Changed 'nested' to 'preu3'
            },
        },
    },
});