/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#393E46',
        accent: '#E5D8CC',
        gray: '#878079',
        'base-1': '#9A947A',
        'base-2': '#DEBA95',
        'base-3': '#DDA995',
        'base-4': '#C9B19F',
        'base-5': '#D2B179',
        'base-6': '#BFBDB8',
      },
      fontFamily: {
        'prosto': ['Prosto One', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};