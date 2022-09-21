/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          pine: "#03666B",
          night: "#07232c",
        },
        offwhite: {
          custom: "#FFF7E8",
          100: "#f5f5f5",
          200: "#eeeeee",
        }
      },
    },
  },
  plugins: [],
}