module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./lib/vopd-lib/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vopd-wvm/src/components/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};