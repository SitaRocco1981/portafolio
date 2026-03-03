module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
 theme: {
  extend: {
    fontFamily: {
      sans: ["var(--font-lato)", "sans-serif"], // textos y botones
      handwriting: ["var(--font-indie)", "cursive"], // títulos
    },
  },
},
  plugins: [],
}