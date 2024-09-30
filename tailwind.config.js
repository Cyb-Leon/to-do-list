/** @type {import('tailwindcss').Config} */
import 'tw-elements/plugin.cjs';
export default {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  plugins: [(require('tw-elements/plugin.cjs'))],
  darkMode: "class"
};
