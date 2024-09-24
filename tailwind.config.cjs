/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#bb2649',
                secondary: '#c4ced6',
                dark: '#2a2b2a',
            },
            fontFamily: {
              sankofa: ["'Sankofa Display'", "sans-serif"],
              montserrat: ["Montserrat", "sans-serif"],
            },
            minHeight: {
            '720': '45rem',
            },
            height: {
            '720': '45rem',
            },
        },
    },
    plugins: [],
};
