/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-from': '#361D4A', // Replace with your custom cyan color
        'primary-via': '#66378c', // Replace with your custom cyan color
        'primary-to': '#c5abd9', // Replace with your custom blue color
        'init-blue': '#1FC7D8',
      },
    },
  },
  plugins: [],
};
