import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    output: 'static',
    adapter: netlify({
        // Disable the feature that's causing errors
        functionPerRoute: false,
        binaryMediaTypes: [],
        imageService: false
    })
});
