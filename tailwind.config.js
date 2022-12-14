module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBgColor:"#151d28",
        customColor1: "#10141f",
      },
      screens: {
        '3xl': '1920px',
      },
      dropShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.8)'
      }
    }
  },

  plugins: [],
};
