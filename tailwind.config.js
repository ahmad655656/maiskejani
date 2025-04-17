/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: '15px',
    },
    screens: {
      sm: "680px",
      md: "760px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: { 
        primary: "#1c1c22",
        accent: {
          Default: "#00ff99",
          hover: "#00e187",
        },
      },
      fontFamily: {
        primary: "var(--font-jetbrainsMono)"
      },
    },
  },
  plugins: [],
};
