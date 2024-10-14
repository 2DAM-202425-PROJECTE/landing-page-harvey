import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
// config options
base: '/landing-page-harvey/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                js: resolve(__dirname, 'main.js'),
                css: resolve(__dirname, 'style.css'),
                preu1: resolve(__dirname, 'preus/preu1.html'),
                preu2: resolve(__dirname, 'preus/preu2.html'),
                preu3: resolve(__dirname, 'preus/preu3.html'),
            },
        },
    },
})