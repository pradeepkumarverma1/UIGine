import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                format: 'iife',
                entryFileNames: 'main.js',
                name: 'UnscrambleSentenceGame'
            }
        }
    }
});
