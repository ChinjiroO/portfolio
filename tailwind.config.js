/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: { 100: '#A7AAAE', 200: '#24292E', 300: '#1F2428' },
        red: { 101: '#E06C79' },
        blue: { 101: '#9ECAFE', 201: '#539bf5' },
        green: { 101: '#7FDC96' },
        purple: { 101: '#B392F0' },
      },
    },
  },
  plugins: [],
};
