module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: { 100: "#A7AAAE", 200: "#24292E", 300: "#1F2428" },
        red: { 101: "#E06C79" },
        blue: { 101: "#9ECAFE", 201: "#539bf5" },
        green: { 101: "#7FDC96" },
        purple: { 101: "#B392F0" },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
