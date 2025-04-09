/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                barricadeDark: '#23222C',
                barricadeBackground: '#323140',
                accent1: '#B0FFF6',
                accent2: '#6F679E'
            }
        }
    },
    plugins: []
};
