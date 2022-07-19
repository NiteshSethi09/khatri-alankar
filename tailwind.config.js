module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "#f7f7f7",
      },
      backgroundImage: {
        // "logo-icon": 'url("/images/logo.png")',
        banner: 'url("/src/images/front2.jpg")',
        category: 'url("/src/images/banner1.jpg")',
      },
    },
  },
  plugins: [],
};
