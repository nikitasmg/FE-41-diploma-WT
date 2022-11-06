/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [],
  theme: {
    colors: {
      accent: '#FFA800',
      grey: {
        100: '#F7F5F9',
        200: '#E5E5E5',
        300: '#C4C4C4',
        400: '#E4E0E9'
      },
      black: {
        100: '#3E3C41',
        200: '#2D2B2F',
        300: '#292929'
      },
      disable: '#918F94',
      danger: 'rgba(255, 61, 0, 0.38)',
      info: 'rgba(255, 245, 0, 0.36)'
    }
  },
};