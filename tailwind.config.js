/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basic : '#FFBE00',
        secondary:"#fabb1b"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
