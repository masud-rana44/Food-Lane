/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#cc3333",
        secondary: "#e67e22",
        "dark-1": "#2e2e2e",
        "dark-2": "#292929",
        "dark-3": "#666666",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        lobster: ["Lobster Two", "sans-serif"],
      },
    },
  },
  plugins: [],
};
