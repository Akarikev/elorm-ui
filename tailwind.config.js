/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/web/src/**/*.{js,ts,jsx,tsx}", // Scan all Next.js files
    "./packages/ui/src/**/*.{js,ts,jsx,tsx}", // Scan all UI package files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
