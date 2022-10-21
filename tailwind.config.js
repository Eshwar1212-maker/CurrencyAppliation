/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "firstFont": ['Roboto Mono', "monospace"],
        "secondFont": ['Fasthand', 'cursive'],
        "thirdFont": ['Pacifico', "cursive"],
        "fourthFont": ['Nanum Gothic Coding', "monospace"]
      },
    },
  },
  plugins: [],
};
