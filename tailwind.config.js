/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'aw-pattern': "url('./public/images/AWBG.jpeg')",
      }
    }
  },
  plugins: [],
}
