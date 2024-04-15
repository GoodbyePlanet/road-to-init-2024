/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-from': '#361D4A',
        'primary-via': '#66378c',
        'primary-to': '#c5abd9',
        'primary-dark': '#45275d',
        'init-blue': '#1FC7D8',
      },
    },
  },
  plugins: [],
};
