module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        metallic: "#028090",
        chocolate: "#090C02",
        sea: "#3BB273",
        baby: "#FBFEF9",
        orange: {
          100: "#F96900",
          200: "#F56600",
        },
      },
      fontFamily: {
        staatliches: ["Staatliches", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
