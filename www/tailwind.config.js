/** @type {import('tailwindcss').Config} */
// Settings

const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                ['primary-lighten']: '#E4DBFE',
                primary: '#7B68ED',
                ['primary-darken']: '#7b73ae',
                ['secondary-lighten']: '#ffeded',
                secondary: '#ffd9d9',
                ['secondary-darken']: '#ffc5c5',
                black: '#190E39',
                body: '#262626',
                background: '#F4F4F4',
                border: '#e5e7eb',
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
            fontFamily: {
                mono: ['var(--font-poppins)'],
            },
            screens: settingsScreens,
            fontSize: settingsFontSizes,
        },
    },
}
