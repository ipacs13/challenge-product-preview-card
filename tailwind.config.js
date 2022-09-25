/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "dark-cyan": "hsl(158, 36%, 37%)",
      // cream: "hsl(30, 38%, 92%)",
      "dark-blue": "hsl(212, 21%, 14%)",
      "grayish-blue": "hsl(228, 12%, 48%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Fraunces: ["Fraunces", "serif"],
      },
      width: {
        600: "660px",
      },
      height: {
        custom: "31rem",
      },
      letterSpacing: {
        "custom-wide": "0.5em",
      },
    },
  },
  plugins: [],
};
