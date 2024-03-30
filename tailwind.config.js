import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // orange color shades
                primary: {
                    50: "#fff7f0",
                    100: "#ffeedb",
                    200: "#ffdcb2",
                    300: "#ffc988",
                    400: "#ffb65f",
                    500: "#ffa435",
                    600: "#e68c2f",
                    700: "#bf7428",
                    800: "#995b21",
                    900: "#7d4c1d",
                },
                secondary: {
                    10: "#F4F8F9",
                    50: "#ECF1F3",
                    100: "#DCE5E9",
                    200: "#C6D5DB",
                    300: "#AEC2CB",
                    400: "#98AEBC",
                    500: "#8296A9",
                    600: "#778899",
                    700: "#5B6A78",
                    800: "#4D5862",
                    900: "#1F2937",
                },
            },
        },
    },

    plugins: [forms, typography],
};
