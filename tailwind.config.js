/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "pulse 3s linear infinite",
      },
      colors: {
        dark: "#272727",
        primary: "#3BF686",
        table: "#323443",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
