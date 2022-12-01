/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        colors: {
            accent: '#FFA800',
            brown: '#9B6909',
            grey: {
                100: '#F7F5F9',
                200: '#E5E5E5',
                300: '#C4C4C4',
                400: '#E4E0E9',
            },
            black: {
                80: 'rgba(41, 41, 41, 0.8)',
                100: '#3E3C41',
                200: '#2D2B2F',
                300: '#292929',
            },
            white: '#fff',
            disable: '#918F94',
            danger: 'rgba(255, 61, 0, 0.38)',
            info: 'rgba(255, 245, 0, 0.36)',
            transparent: 'transparent',
        },
        borderRadius: {
            none: '0',
            sm: '3px',
            DEFAULT: '.25rem',
            lg: '5px',
            full: '9999px',
        },
    },
    plugins: [],
}
