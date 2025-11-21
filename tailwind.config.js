/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
