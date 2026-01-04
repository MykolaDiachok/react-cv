export default {
  content: ['./index.html', './src/**/*.{astro,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
