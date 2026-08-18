import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#14532D",
          light: "#1D6B3B",
          dark: "#0B3A1F",
        },
        gold: {
          DEFAULT: "#C58F2C",
          light: "#DDAE55",
          dark: "#9C7020",
        },
        cream: "#F8F5EF",
        ink: "#111827",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url('/grain.png')",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(17,24,39,0.15)",
        "premium-lg": "0 30px 80px -20px rgba(17,24,39,0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
