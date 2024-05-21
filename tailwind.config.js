/** @type {import('tailwindcss').Config} */
export default {
  prefix: '',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakartasans: ["Plus Jakarta Sans"],
      },
    },
  },
  plugins: [],
};
