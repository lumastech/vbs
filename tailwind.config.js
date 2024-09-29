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
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                body: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "system-ui",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "system-ui",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
            },
            colors: {
                primary: {
                    50: "#F3FAF7",
                    100: "#DEF7EC",
                    200: "#BCF0DA",
                    300: "#84E1BC",
                    500: "#31C48D",
                    1000: "#0E9F6E",
                    600: "#057A55",
                    700: "#046C4E",
                    800: "#03543F",
                    900: "#014737",
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
            spacing: {
                130: "38rem",
                98: "28rem",
            },
        },
    },

    plugins: [forms, typography, "flowbite/plugin"],
};
