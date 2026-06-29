import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          brand: "#C41E1E",
        },
        navy: "#1B2A6B",
        cream: "#FFF5E6",
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
        playfair: ["var(--font-playfair-display)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
