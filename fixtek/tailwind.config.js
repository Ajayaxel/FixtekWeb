/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],   // custom class: font-manrope
        sans: ["Manrope", "sans-serif"],      // makes font-sans = Manrope
      },
    },
  },
  plugins: [],
}


