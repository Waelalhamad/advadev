import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#832cdb",
          dark: "#6c22b3",
          light: "rgba(131, 44, 219, 0.1)",
        },
        secondary: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-reverse": "float-reverse 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
