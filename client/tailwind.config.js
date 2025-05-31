/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        minibg: "#F3F4F6",
        active: "#ff1847",
        textColor: "#626161"
      },
      fontFamily: {
        roboto: ["Roboto", 'sans-serif'],
        lora: ['Lora', 'sans'],
        title: ["Lobster", "sans-serif"],
        Blogtitle: ["Oswald", "sans-serif"],
      }
    },
  },
  plugins: [],
}