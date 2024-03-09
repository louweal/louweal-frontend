/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    // "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        light: "var(--color-light)",
        dark: "var(--color-dark)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "88.75rem",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms")
  ],
};
